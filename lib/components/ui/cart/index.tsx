import React from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';

import { ItemDto, useCartStore } from '@/hooks/cart';
import { CartBottom } from './cart-bottom';
import { CartIcon } from './cart-icon';
import { CartGridCard } from './cart-grid';
import { CartNoData } from './cart-no-data';
const Cart: React.FC = () => {
	const { getTotal, getTotalItems, items, open, removeItem, toggle } = useCartStore();

	const total = getTotal();
	const totalItems = getTotalItems();
	const hasItems = items.length > 0;

	const handlerDeleteItem = (data: ItemDto) => {
		removeItem(data);
	};
	return (
		<>
			{open ? (
				<button
					className={`fixed right-1.5 top-4 z-50 cursor-pointer bg-trasparent`}
					onClick={toggle}
				>
					<AiFillCloseCircle
						className={` w-7 h-7 ease-in-out transition ${
							open ? 'text-gray-400 scale-100' : 'text-white scale-0'
						}`}
					/>
				</button>
			) : (
				<CartIcon total={total} totalItems={totalItems} toggle={toggle} />
			)}

			<div
				className={`top-0 right-0 w-screen before:content-[''] before:absolute before:w-full before:h-full before:bg-black/20 fixed h-full z-40 flex justify-end ease-in-out transition duration-200 ${
					open ? 'translate-x-0 ' : 'translate-x-full'
				}`}
			>
				<aside className="relative w-96 flex flex-col bg-white">
					<div className="flex flex-col h-full">
						<h2 className="flex items-center h-14 px-6 text-xl text-gray-400 border-b border-b-gray-300 bg-white">
							I miei acquisti
						</h2>
						<div className="no-scroll mt-4 h-4/6 overflow-y-auto">
							{hasItems ? (
								<CartGridCard data={items} handlerDeleteItem={handlerDeleteItem} />
							) : (
								<CartNoData toggle={toggle} />
							)}
						</div>
						<div className="flex-1 pt-4 px-6">{hasItems ? <CartBottom total={total} /> : null}</div>
					</div>
				</aside>
			</div>
		</>
	);
};

export { Cart };
