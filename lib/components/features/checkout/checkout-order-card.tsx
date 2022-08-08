import React, { ReactNode } from 'react';

import { ItemDto } from '@/hooks/cart';
import { formatPrice } from '../../../util/format-price';
export interface CheckoutOrderCardProps {
	data: ItemDto;
}

const CheckoutOrderCard: React.FC<CheckoutOrderCardProps> = ({ data }) => {
	const total = data.price * data.quantity!;
	return (
		<li className="relative flex">
			<span className="block w-7/12 text-ellipsis">{data.name}</span>
			<span className="block w-3/12">x{data.quantity!}</span>
			<span className="block w-2/12 text-right">{formatPrice(total)}</span>
			<span
				className="absolute -top-1 left-0 h-2 w-2 shadow-sm rounded-sm"
				style={{ backgroundColor: String(`#${data.color.hex}`) }}
			></span>
		</li>
	);
};

export { CheckoutOrderCard };
