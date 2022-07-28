import React from 'react';

import Link from 'next/link';

import { GetProductsSlugCategoryQuery } from '@/graphcms/generated/graphql';
import { Button } from '@/components/ui/button';
import { Image } from '@/components/ui/image';
import { ProductVariantColors } from '@/components/ui/product-variant-colors';
import { routes, PRODUCT_GRID_WIDTH } from '../../../costants';
import { formatPrice } from '../../../util/format-price';
import { getSizesFromTransformation } from '../../../util/get-sizes-from-transformation';

export interface ProductsCardProps {
	data: NonNullable<GetProductsSlugCategoryQuery['category']>['products'][0];
}

const ProductsCard: React.FC<ProductsCardProps> = ({ data }) => {
	const { product: prod } = routes;
	const { slug: slugCategory } = data;
	const { image, name, price, slug, productVariantColors } = data;
	const href = `${prod}${slugCategory}/${slug}`;

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
					<h2 className="w-full relative z-50 h-12 bg-white text-center text-lg font-bold truncate">
						{name}
					</h2>
					<h3 className="text-center text-3xl text-gray-400">{formatPrice(price)}</h3>
					<ProductVariantColors data={productVariantColors} />
				</article>
			</a>
		</Link>
	);
};

export { ProductsCard };
