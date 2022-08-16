import React from 'react';
import { GetDoneOrderProductQuery } from '@/graphcms/generated/graphql';
import { StripeSuccessGrid } from './grid';
export interface StripeSuccessProps {
	data: GetDoneOrderProductQuery['orders'][0];
}

const StripeSuccess: React.FC<StripeSuccessProps> = ({ data }) => {
	console.log('data', data);
	return (
		<div className="flex justify-center items-center">
			<StripeSuccessGrid data={data.orderItems} />
		</div>
	);
};

export { StripeSuccess };
