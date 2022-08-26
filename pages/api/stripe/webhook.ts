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
		customer: {
			connect: {
				id: session.client_reference_id
			}
		},
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
				},
				productVariantColor: {
					connect: {
						id: (item.price?.product as Stripe.Product).metadata.colorId
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
