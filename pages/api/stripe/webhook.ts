import type { NextApiRequest, NextApiResponse } from 'next';
import Stripe from 'stripe';
import {
	CreateOrderMutationDocument,
	PublishOrderMutationDocument
} from '@/graphcms/generated/graphql';
import { client } from '../../../lib/graphcms/client';

import { stripeSigningSecret } from '../../../lib/util/stripe-signing-secret';
import stripe from '../../../lib/util/stripe-client';

export const config = {
	api: {
		bodyParser: false
	}
};

const createOrder = async (sessionId: string) => {
	const { customer, line_items, ...session } = await stripe.checkout.sessions.retrieve(sessionId, {
		expand: ['line_items.data.price.product', 'customer']
	});
	const order = {
		email: session.customer_email,
		total: session.amount_total,
		stripeCheckoutId: session.id,
		orderItems: {
			create: line_items!.data.map((item) => ({
				quantity: item.quantity,
				total: item.amount_total,
				product: {
					connect: {
						id: (item.price?.product as Stripe.Product).metadata.productId
					}
				}
			}))
		}
	};

	const result = await client
		.mutation(CreateOrderMutationDocument, {
			order
		})
		.toPromise();
	/*const id = result.data.order.id;
	const result2 = await client
		.mutation(PublishOrderMutationDocument, {
			id
		})
		.toPromise();
	console.log('Result', result.data.order.id);
	console.log('Result', result2);*/
	console.log('Result', result.data.order.id);
};

const webhook = async (req: NextApiRequest, res: NextApiResponse, event: any) => {
	const permittedEvents = ['checkout.session.completed'];

	if (req.method === 'POST') {
		if (permittedEvents.includes(event.type)) {
			try {
				switch (event.type) {
					case 'checkout.session.completed':
						await createOrder(event.data.object.id);
						break;
					default:
						throw new Error(`Unhandled event: ${event.type}`);
				}
			} catch (error) {
				console.log('ERROR', error);
				res.status(500).json({ message: 'Unknown event' });
			}
		}

		res.status(204).end();
	} else {
		res.status(405).json({ message: 'Method not allowed' });
	}
};

export default stripeSigningSecret(webhook);
