import type { NextApiRequest, NextApiResponse } from 'next';

import { stripeSigningSecret } from '../../../lib/util/stripe-signing-secret';
import stripe from '../../../lib/util/stripe-client';

export const config = {
	api: {
		bodyParser: false
	}
};

const handler = async (req: NextApiRequest, res: NextApiResponse, event: any) => {
	const permittedEvents = ['checkout.session.completed'];

	if (req.method === 'POST') {
		if (permittedEvents.includes(event.type)) {
			try {
				switch (event.type) {
					case 'checkout.session.completed':
						const { customer, line_items, ...session } = await stripe.checkout.sessions.retrieve(
							event.data.object.id,
							{
								expand: ['line_items.data.price.product', 'customer']
							}
						);
						console.log('WEBHOOKll', customer, line_items, session);
						//await createOrder({ sessionId: event.data.object.id });
						break;
					default:
						throw new Error(`Unhandled event: ${event.type}`);
				}
			} catch (error) {
				res.status(500).json({ message: 'Unknown event' });
			}
		}

		res.status(204).end();
	} else {
		res.status(405).json({ message: 'Method not allowed' });
	}
};

export default stripeSigningSecret(handler);
