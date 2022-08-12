import React, { useState } from 'react';

import { FieldValues } from 'react-hook-form';

import { loadStripe } from '@stripe/stripe-js';

import { useCartStore } from '@/hooks/cart';
import { Breadcrumbs, Breadcrumb } from '@/components/ui/breadcrumbs';
import { CheckoutForm } from './checkout-form';
import { CheckoutOrder } from './checkout-order';

const stripePromise = loadStripe(String(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY));

const Checkout: React.FC = () => {
	const { getTotal, getTotalItems, items, toggle } = useCartStore();
	const [loading, setLoading] = useState(false);
	const routes: Breadcrumbs[] = [{ name: 'Checkout' }];
	const handleSubmitForm = async (user: FieldValues) => {
		try {
			setLoading(true);
			const stripe = await stripePromise;

			const res = await fetch('/api/stripe/create-checkout-session', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					cancel_url: window.location.href,
					success_url: `${window.location.origin}/stripe/success`,
					items,
					user
				})
			});

			if (!res.ok) {
				const error = new Error('An error occurred while performing this request');

				throw error;
			}
			const { session } = await res.json();
			await stripe!.redirectToCheckout({
				sessionId: session.id
			});
		} catch (error) {
			console.error(error);
		} finally {
			setLoading(false);
		}
	};
	return (
		<div className="min-h-[calc(100vh-theme(space.20))]">
			<div className="mt-3">
				<Breadcrumb routes={routes} />
			</div>
			<div className="flex gap-16 mt-9">
				<div className="w-8/12">
					<CheckoutForm handleSubmitForm={handleSubmitForm} />
				</div>
				<div className="w-4/12">
					<CheckoutOrder data={items} total={getTotal()} toggle={toggle} />
				</div>
			</div>
		</div>
	);
};

export { Checkout };
