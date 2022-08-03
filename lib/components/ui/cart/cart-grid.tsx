import React from 'react';

import { ItemDto } from '@/hooks/cart';
import { CartCard } from './cart-card';
export interface CartGridProps {
	data: ItemDto[];
	handlerDeleteItem: (data: ItemDto) => void;
}

const CartGridCard: React.FC<CartGridProps> = ({ data, handlerDeleteItem }) => {
	return (
		<>
			{data.map((item) => (
				<div key={item.id + item.color.id} className="px-6 pb-6 pt-6 border-b border-b-gray-300">
					<CartCard data={item} handlerDeleteItem={handlerDeleteItem} />
				</div>
			))}
		</>
	);
};

export { CartGridCard };
