import React, { ReactNode } from 'react';

import { SHIPPING_FEES } from '../../../costants';
import { formatPrice } from '../../../util/format-price';
import { ItemDto } from '@/hooks/cart';
import { CheckoutOrderCard } from './checkout-order-card';
export interface CheckoutOrderProps {
	data: ItemDto[];
	total: number;
	toggle: () => void;
}

const CheckoutOrder: React.FC<CheckoutOrderProps> = ({ data, total, toggle }) => {
	return (
		<div className="px-2 py-1 shadow-lg rounded-lg">
			<div className="flex justify-between items-center mb-6 ">
				<h2 className="uppercase font-bold">Il tuo ordine</h2>
				<button
					onClick={toggle}
					type="button"
					className="px-1 text-xs font-sans uppercase rounded-md leading-5 bg-black/50 text-white cursor-pointer"
				>
					Dettaglio
				</button>
			</div>
			<ul className="flex flex-col gap-y-2">
				{data.map((item) => {
					return <CheckoutOrderCard key={item.id} data={item} />;
				})}
			</ul>
			<ul className="flex justify-between items-center mt-3 text-lg">
				<li>Spedizione:</li>
				<li>{formatPrice(SHIPPING_FEES)}</li>
			</ul>
			<ul className="mt-3 flex justify-between items-center text-lg font-bold">
				<li>Totale:</li>
				<li>{formatPrice(total + SHIPPING_FEES)}</li>
			</ul>
		</div>
	);
};

export { CheckoutOrder };
