import React from 'react';

import { PRODUCT_WIDTH } from '../../../costants';
import { formatPrice } from '../../../util/format-price';
import { ColorDto, ItemDto, ProductDto, useCartStore } from '@/hooks/cart';
import { Counter } from '@/components/ui/counter';
import { Image } from '@/components/ui/image';
import { ProductVariantColors } from '@/components/ui/product-variant-colors';

export interface ProductItemProps {
	data: ProductDto;
}

const ProductCard: React.FC<ProductItemProps> = ({ data }) => {
	const { addItem, getQuantityItem, items, updateQuantityItem } = useCartStore();
	const { id, description, image, name, price, productVariantColors } = data;

	const handlerMinus = (cid: string): void => {
		updateQuantityItem(data.id, cid, 1);
	};

	const getSelectedColor = (cid: string): ColorDto | never => {
		const index = productVariantColors.findIndex((color) => {
			return color.id === cid;
		});
		if (index === -1) {
			throw new Error('There is no variant color');
		}
		return productVariantColors[index];
	};

	const handlerPlus = (cid: string): void => {
		const color = getSelectedColor(cid);
		const item: ItemDto = { id, name, color, image, price };
		addItem(item, 1);
	};

	return (
		<article className="flex">
			<div className="w-1/2 flex flex-col">
				<div className="flex justify-center">
					{/* eslint-disable */}
					<Image image={image} width={PRODUCT_WIDTH} />
					{/* eslint-enable */}
				</div>
				{productVariantColors.map((color) => {
					return (
						<div key={color.id} className="flex flex-col">
							<div className="flex mb-1">
								<p
									className="w-3/4 flex items-center pl-3 border border-gray-300 rounded-lg rounded-r-none border-r-0 uppercase"
									style={{ backgroundColor: String(`#${color.hex}`) }}
								>
									<span className="bg-white shadow-sm text-gray-400 first-letter:uppercase font-serif text-xs  px-1.5 py-0.5 rounded-lg lowercase">
										{color.name}
									</span>
								</p>
								<div className="w-1/4">
									<Counter
										size="lg"
										cid={color.id}
										handlerMinus={handlerMinus}
										handlerPlus={handlerPlus}
										value={getQuantityItem(data.id, color.id)}
									/>
								</div>
							</div>
						</div>
					);
				})}
			</div>
			<div className="w-1/2">
				<h2 className="text-3xl font-bold text-brand-600">{name}</h2>
				<h3 className="mt-6 text-2xl text-brand-300">{formatPrice(price)}</h3>
				<h4 className="mt-10 text-lg max-w-lg">{description}</h4>
				<ProductVariantColors data={productVariantColors} />
				{items.map((item) => {
					return (
						<p key={item.id + item.color.id}>
							{item.name}-{item.quantity}
						</p>
					);
				})}
			</div>
		</article>
	);
};

export { ProductCard };
