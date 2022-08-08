import React from 'react';
import Link from 'next/link';
import { setCookie } from 'cookies-next';

import { formatPrice } from '../../../util/format-price';
import { COOKIE_CHECKOUT, SHIPPING_FEES, routes } from '../../../costants';
import { Button } from '@/components/ui/button';

export interface CartBottomProps {
	total: number;
	toggle: () => void;
}

const CartBottom: React.FC<CartBottomProps> = ({ total, toggle }) => {
	const { checkout } = routes;
	const handlerSetCookie = () => {
		setCookie(COOKIE_CHECKOUT, true);
		toggle();
	};
	return (
		<Link href={checkout}>
			<a onClick={handlerSetCookie}>
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
			</a>
		</Link>
	);
};

export { CartBottom };
