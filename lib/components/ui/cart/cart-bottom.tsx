import React from 'react';

import { formatPrice } from '../../../util/format-price';
import { SHIPPING_FEES } from '../../../costants';
import { Button } from '@/components/ui/button';

export interface CartBottomProps {
	total: number;
}

const CartBottom: React.FC<CartBottomProps> = ({ total }) => {
	return (
		<>
			<ul className="flex justify-between items-center text-lg">
				<li>Subtotale:</li>
				<li>{formatPrice(total)}</li>
			</ul>
			<ul className="flex justify-between items-center text-lg">
				<li>Spedizione:</li>
				<li>{formatPrice(SHIPPING_FEES)}</li>
			</ul>
			<ul className="mb-3 flex justify-between items-center text-lg">
				<li>Totale:</li>
				<li className="font-bold">{formatPrice(total + SHIPPING_FEES)}</li>
			</ul>
			<Button>Procedi all&#39;ordine</Button>
		</>
	);
};

export { CartBottom };
