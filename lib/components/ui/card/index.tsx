import React from 'react';

import Link from 'next/link';

import { routes, PRODUCT_GRID_WIDTH } from '../../../costants';
import { formatPrice } from '../../../util/format-price';
import { GetProductsSlugCategoryQuery, GetSearchQuery } from '@/graphcms/generated/graphql';

import { Button } from '@/components/ui/button';
import { Image } from '@/components/ui/image';
import { ProductVariantColors } from '@/components/ui/product-variant-colors';

export interface CardProps {
	data:
		| NonNullable<GetProductsSlugCategoryQuery['category']>['products'][0]
		| NonNullable<GetSearchQuery>['products'][0];
}

const Card: React.FC<CardProps> = ({ data }) => {
	const { product } = routes;
	const { image, name, price, slug, productVariantColors } = data;
	const href = `${product}/${slug}`;
	return (
		<Link href={href}>
			<a>
				<article className={`group flex flex-col rounded-lg px-4 py-6 border border-gray-300`}>
					<div className="relative flex justify-center items-center">
						{/* eslint-disable */}
						<Image image={image} width={PRODUCT_GRID_WIDTH} />
						{/* eslint-enable */}
						<div className="absolute bottom-0 left-0 w-full translate-y-full group-hover:translate-y-0 origin-bottom transition p-1">
							<Button>Scegli</Button>
						</div>
					</div>
					<h2 className="w-full relative z-40 h-12 bg-white text-center text-lg font-bold truncate">
						{name}
					</h2>
					<h3 className="text-center text-3xl  text-gray-400">{formatPrice(price)}</h3>
					<ProductVariantColors data={productVariantColors} />
				</article>
			</a>
		</Link>
	);
};
const MemoizedCard = React.memo(Card);
export { MemoizedCard };
