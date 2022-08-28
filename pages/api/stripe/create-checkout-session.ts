import type { NextApiRequest, NextApiResponse } from 'next';

import stripe from '../../../lib/util/stripe-client';
import type { FieldValues } from 'react-hook-form';
import type { ItemDto } from '@/hooks/cart';
import { SHIPPING_FEES } from '../../../lib/costants';
import { GetOrderProductDocument } from '@/graphcms/generated/graphql';
import { client } from '../../../lib/graphcms/client';

interface ExtendedNextApiRequest extends NextApiRequest {
	body: {
		items: ItemDto[];
		user: { id: string; email: string };
		cancel_url: string;
		success_url: string;
	};
}
const createCheckoutSession = async (req: ExtendedNextApiRequest, res: NextApiResponse) => {
	const { items, user, cancel_url, success_url } = req.body;
	const getOrderProduct = async (pid: string, cid: string) => {
		const result = await client.query(GetOrderProductDocument, { pid, cid }).toPromise();
		const {
			product: {
				image: { url },
				name,
				price,
				...product
			},
			productVariantColor: { name: colorName, colorId }
		} = result.data;
		return {
			currency: 'EUR',
			product_data: {
				description: `${name} - Colore: ${colorName}`,
				metadata: {
					...product,
					colorId
				},
				name,
				images: [url]
			},
			unit_amount: price
		};
	};

	try {
		const line_items = await Promise.all(
			items.map(async (item: ItemDto) => ({
				adjustable_quantity: {
					enabled: true,
					minimum: 1
				},
				price_data: await getOrderProduct(item.id, item.color.id),
				quantity: item.quantity
			}))
		);

		const session = await stripe.checkout.sessions.create({
			mode: 'payment',
			line_items,
			locale: 'it',
			payment_method_types: ['card'],
			cancel_url,
			customer_email: user.email,
			client_reference_id: user.id,
			success_url: `${success_url}?id={CHECKOUT_SESSION_ID}`,
			shipping_options: [
				{
					shipping_rate_data: {
						type: 'fixed_amount',
						fixed_amount: {
							amount: SHIPPING_FEES,
							currency: 'eur'
						},
						display_name: 'Costi di spedizione',

						delivery_estimate: {
							minimum: {
								unit: 'business_day',
								value: 5
							},
							maximum: {
								unit: 'business_day',
								value: 7
							}
						}
					}
				}
			]
		});
		res.status(201).json({ session });
	} catch (error) {
		console.error('ERROR', error);
		res.status(500).json({
			message: 'There was a problem creating the Stripe Checkout session'
		});
	}
};

export default createCheckoutSession;
