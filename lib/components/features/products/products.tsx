import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { ProductsSlugCategoryQuery } from '@/graphcms/generated/graphql';
import { Button } from '@/components/ui/button';
import { routes } from '../../../costants';
import { formatPrice } from '../../../util/format-price';

export interface ProductsProps {
	data: ProductsSlugCategoryQuery['categories'][0]['products'][0];
}

const Products: React.FC<ProductsProps> = ({ data }) => {
	const { product: prod } = routes;
	const { slug: slugCategory } = data.categories[0];
	const { image, name, price, slug } = data;
	const href = `${prod}${slugCategory}/${slug}`;
	return (
		<Link href={href}>
			<a>
				<article className={`group flex flex-col rounded-lg px-4 py-6 border border-gray-300`}>
					<div className="relative">
						{image ? (
							<Image
								src={image.url}
								alt={String(image.altText)}
								width={Number(image.width)}
								height={Number(image.height)}
							/>
						) : null}
						<div className="absolute bottom-0 left-0 w-full translate-y-full group-hover:translate-y-0 origin-bottom transition">
							<Button>Vedi tutti i prodotti</Button>
						</div>
					</div>
					<h2 className="w-full relative z-50 h-10 bg-white text-center text-lg font-bold truncate">
						{name}
					</h2>
					<h3 className="text-center text-3xl text-gray-400">{formatPrice(price)}</h3>
				</article>
			</a>
		</Link>
	);
};

export { Products };
