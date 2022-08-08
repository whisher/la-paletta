import React from 'react';

import { ItemDto, useCartStore } from '@/hooks/cart';
import { Breadcrumbs, Breadcrumb } from '@/components/ui/breadcrumbs';
import { CheckoutForm } from './checkout-form';
import { CheckoutOrder } from './checkout-order';
const Checkout: React.FC = () => {
	const { getTotal, getTotalItems, items, toggle } = useCartStore();
	const routes: Breadcrumbs[] = [{ name: 'Checkout' }];
	return (
		<div className="min-h-[calc(100vh-theme(space.20))]">
			<div className="mt-3">
				<Breadcrumb routes={routes} />
			</div>
			<div className="flex gap-16 mt-9">
				<div className="w-8/12">
					<CheckoutForm />
				</div>
				<div className="w-4/12">
					<CheckoutOrder data={items} total={getTotal()} toggle={toggle} />
				</div>
			</div>
		</div>
	);
};

export { Checkout };
