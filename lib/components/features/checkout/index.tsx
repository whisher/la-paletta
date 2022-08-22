import React, { useState } from 'react';
import { FieldValues } from 'react-hook-form';
import { loadStripe } from '@stripe/stripe-js';
import type { OperationResult } from 'urql';
import { deleteCookie } from 'cookies-next';
import { COOKIE_CHECKOUT } from '../../../costants';
import { client } from '@/graphcms/client';
import {
	GetCustomerDocument,
	CreateCustomerMutationDocument,
	UpdateCustomerMutationDocument
} from '@/graphcms/generated/graphql';
import { useCartStore } from '@/hooks/cart';
import { Breadcrumbs, Breadcrumb } from '@/components/ui/breadcrumbs';
import { Loader } from '@/components/ui/loader';
import { CheckoutForm } from './checkout-form';
import { CheckoutOrder } from './checkout-order';

const stripePromise = loadStripe(String(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY));
const upSertCustomer = async (user: FieldValues): Promise<OperationResult<any, { data: any }>> => {
	const result = await client.query(GetCustomerDocument, { email: user.email }).toPromise();
	const { customer } = result.data;

	if (!customer) {
		return await client
			.mutation(CreateCustomerMutationDocument, {
				data: user
			})
			.toPromise();
	} else {
		return await client
			.mutation(UpdateCustomerMutationDocument, {
				data: user,
				where: { id: customer.id, email: user.email }
			})
			.toPromise();
	}
};
const Checkout: React.FC = () => {
	const { getTotal, getTotalItems, items, toggle } = useCartStore();
	const [loading, setLoading] = useState(false);
	const routes: Breadcrumbs[] = [{ name: 'Checkout' }];
	const handleSubmitForm = async (user: FieldValues) => {
		try {
			setLoading(true);
			const stripe = await stripePromise;
			const { account, ...customer } = user;
			const result = await upSertCustomer(customer);
			if (!result.data) {
				throw new Error('No customer id');
			}
			const {
				customer: { id }
			} = result.data;

			const res = await fetch('/api/stripe/create-checkout-session', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					cancel_url: window.location.href,
					success_url: `${window.location.origin}/stripe/success`,
					items,
					...{ user: { id, email: user.email } }
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
			deleteCookie(COOKIE_CHECKOUT);
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
				<div className="relative w-8/12">
					{loading ? (
						<div className="absolute inset-0 flex justify-center items-center rounded bg-black/20">
							<Loader />
						</div>
					) : null}
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
