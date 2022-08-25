import React from 'react';

import { GetDoneOrderProductQuery } from '@/graphcms/generated/graphql';
import { formatPrice } from '../../../../util/format-price';
import { StripeSuccessCard } from './card';

export interface StripeSuccessGridProps {
	data: GetDoneOrderProductQuery['orders']['0'];
}

const StripeSuccessGrid: React.FC<StripeSuccessGridProps> = ({ data }) => {
	const { id, orderItems, total } = data;
	return (
		<>
			<h2 className="mb-3 uppercase font-bold text-black/70">
				N°. ordine: <span className="lowercase text-black"> {id}</span>
			</h2>
			<div className="flex flex-col shadow-sm rounded-t-md">
				{orderItems.map((item) => (
					<div key={item.id} className="px-6 pb-6 pt-6 border-b border-b-gray-300">
						<StripeSuccessCard data={item} />
					</div>
				))}
				<div className="flex justify-between px-6 py-10">
					<span className="uppercase font-bold text-black/70">Totale</span>
					<span className="uppercase font-bold text-black">{formatPrice(total)}</span>
				</div>
			</div>
		</>
	);
};

export { StripeSuccessGrid };
