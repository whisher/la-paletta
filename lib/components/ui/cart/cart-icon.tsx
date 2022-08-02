import React from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import classNames from 'classnames';
import { formatPrice } from '../../../util/format-price';

export interface CartIconProps {
	total: number;
	totalItems: number;
	toggle: () => void;
}

const CartIcon: React.FC<CartIconProps> = ({ total, totalItems, toggle }) => {
	return (
		<div className="flex items-center">
			<button
				className="relative flex justify-center items-center p-1 rounded-full bg-white border-2 border-white"
				onClick={toggle}
			>
				<AiOutlineShoppingCart className="text-brand-300 w-8 h-8" />
				<span
					className={classNames(
						'absolute -top-3 -right-1 w-5 h-5 flex justify-center items-center border rounded-full border-white bg-black text-sm text-white transition duration-300 ease-in-out',
						{
							'scale-100': totalItems > 0,
							'scale-0': totalItems === 0
						}
					)}
				>
					{totalItems}
				</span>
			</button>
			<span className="pl-2 text-white font-mono">{formatPrice(total)}</span>
		</div>
	);
};

export { CartIcon };
