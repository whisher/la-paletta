import React, { useEffect } from 'react';
import { GetDoneOrderProductQuery } from '@/graphcms/generated/graphql';
import { useCartStore } from '@/hooks/cart';
import { Breadcrumbs, Breadcrumb } from '@/components/ui/breadcrumbs';
import { StripeSuccessGrid } from './grid';
import { StripeSuccessCustomer } from './customer';
export interface StripeSuccessProps {
	data: GetDoneOrderProductQuery['orders'][0];
}

const StripeSuccess: React.FC<StripeSuccessProps> = ({ data }) => {
	const { resetCart } = useCartStore();
	const routes: Breadcrumbs[] = [{ name: 'Il tuo acquisto' }];
	useEffect(() => {
		resetCart();
	}, [resetCart]);

	return (
		<div className="min-h-[calc(100vh-theme(space.20))]">
			<div className="mt-3">
				<Breadcrumb routes={routes} />
			</div>
			<div className="flex mt-6 gap-x-10">
				<div className="w-1/2">
					<StripeSuccessGrid data={data} />
				</div>
				<div className="w-1/2">
					<StripeSuccessCustomer data={data.customer!} />
				</div>
			</div>
		</div>
	);
};

export { StripeSuccess };
