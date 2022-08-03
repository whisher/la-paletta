import React from 'react';
import { AiOutlineDelete } from 'react-icons/ai';

import { PRODUCT_THUMBNAIL } from '../../../costants';
import { formatPrice } from '../../../util/format-price';
import { ItemDto, useCartStore } from '@/hooks/cart';
import { Counter } from '@/components/ui/counter';
import { Image } from '@/components/ui/image';

export interface CartCardProps {
	data: ItemDto;
	handlerDeleteItem: (data: ItemDto) => void;
}

const CartCard: React.FC<CartCardProps> = ({ data, handlerDeleteItem }) => {
	const { addItem, getQuantityItem, getTotalItem, updateQuantityItem } = useCartStore();
	const { id, color, image, name, price } = data;

	const handlerMinus = (cid: string): void => {
		updateQuantityItem(data.id, cid, 1);
	};

	const handlerPlus = (cid: string): void => {
		const item: ItemDto = { id, name, color, image, price };
		addItem(item, 1);
	};
	return (
		<>
			<div className="flex items-center">
				{/* eslint-disable */}
				<div className="relative">
					<Image image={image} width={PRODUCT_THUMBNAIL} isThumbNail={true} />
					<span
						className="absolute top-0 left-0 h-4 w-4 shadow-sm rounded-sm"
						style={{ backgroundColor: String(`#${color.hex}`) }}
					></span>
				</div>
				{/* eslint-enable */}
				<p className="flex-1 text-base text-ellipsis">{name}</p>
				<button
					className="relative flex justify-center items-center p-1 rounded-full bg-white border-2 border-white"
					onClick={() => handlerDeleteItem(data)}
				>
					<AiOutlineDelete className="text-red-400 w-6 h-6" />
				</button>
			</div>
			<div className="flex">
				<div className="w-2/6">
					<Counter
						size="sm"
						cid={color.id}
						handlerMinus={handlerMinus}
						handlerPlus={handlerPlus}
						value={getQuantityItem(data.id, color.id)}
					/>
				</div>
				<div className="w-2/6 text-center">{formatPrice(data.price)}</div>
				<div className="w-2/6 text-right">{formatPrice(getTotalItem(data.id, data.color.id))}</div>
			</div>
		</>
	);
};

export { CartCard };
