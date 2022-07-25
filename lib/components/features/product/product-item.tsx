import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { GetProductSlugQuery } from '@/graphcms/generated/graphql';

import { Counter } from '@/components/ui/counter';
import { ProductVariantColors } from '@/components/ui/product-variant-colors';

import { formatPrice } from '../../../util/format-price';

/**
 * 
 * {image ? (
						<figure role="group">
							<img src={image.url} alt={String(image.altText)} />
						</figure>
					) : null}
 */
export interface ProductItemProps {
	data: NonNullable<GetProductSlugQuery['product']>;
}

const ProductItem: React.FC<ProductItemProps> = ({ data }) => {
	const { description, image, name, price, productVariantColors } = data;

	return (
		<article className="flex">
			<div className="w-1/2 flex flex-col">
				<div className="flex justify-center">
					<Image src={image.url} alt={String(image.altText)} width={200} height={400} />
				</div>
				<ProductVariantColors data={productVariantColors} />
				<Counter value={0} />
			</div>
			<div className="w-1/2">
				<h2 className="text-3xl font-bold">{name}</h2>
				<h3 className="mt-6 text-2xl text-brand-300">{formatPrice(price)}</h3>
				<h4 className="mt-10 text-lg max-w-lg">{description}</h4>
			</div>
		</article>
	);
};

export { ProductItem };
