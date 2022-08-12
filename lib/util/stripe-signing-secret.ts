import type { NextApiRequest, NextApiResponse } from 'next';
import stripe from './stripe-client';

const stripeSigningSecret =
	(handler: (req: NextApiRequest, res: NextApiResponse, event: any) => Promise<void>) =>
	async (req: NextApiRequest, res: NextApiResponse) => {
		const chunks = [];

		for await (const chunk of req) {
			chunks.push(typeof chunk === 'string' ? Buffer.from(chunk) : chunk);
		}

		let event;

		try {
			const signature = 'stripe-signature' in req.headers ? req.headers['stripe-signature'] : '';
			if (!signature) {
				throw new Error('No stripe-signature');
			}
			event = stripe.webhooks.constructEvent(
				Buffer.concat(chunks),
				signature,
				String(process.env.STRIPE_WEBHOOK_SIGNING_SECRET)
			);
		} catch (error) {
			let message;
			if (error instanceof Error) {
				message = error.message;
			} else {
				message = String(error);
			}
			return res.status(400).json({ message: message });
		}

		return handler(req, res, event);
	};

export { stripeSigningSecret };
