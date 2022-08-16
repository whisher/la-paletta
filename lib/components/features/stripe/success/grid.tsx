import React from 'react';

import { GetDoneOrderProductQuery } from '@/graphcms/generated/graphql';
import { StripeSuccessCard } from './card';

export interface StripeSuccessGridProps {
	data: GetDoneOrderProductQuery['orders']['0']['orderItems'];
}

const StripeSuccessGrid: React.FC<StripeSuccessGridProps> = ({ data }) => {
	console.log(data[0]);
	return (
		<>
			{data.map((item) => (
				<div key={item.id} className="px-6 pb-6 pt-6 border-b border-b-gray-300">
					<StripeSuccessCard data={item} />
				</div>
			))}
		</>
	);
};

export { StripeSuccessGrid };
