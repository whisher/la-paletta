import React from 'react';

import { GetProductSlugQuery } from '@/graphcms/generated/graphql';
import { routes as rts } from '../../../costants';
import { Breadcrumbs, Breadcrumb } from '@/components/ui/breadcrumbs';

import { ProductCard } from './product-card';

export interface ProductProps {
	data: NonNullable<GetProductSlugQuery['product']>;
}

const Product: React.FC<ProductProps> = ({ data }) => {
	const { products } = rts;
	const { name, categories } = data;
	const { slug: categorySlug, name: categoryName } = categories[0];

	const routes: Breadcrumbs[] = [
		{ name: categoryName, href: `${products}/${categorySlug}` },
		{ name }
	];

	return (
		<div className="min-h-[calc(100vh-theme(space.20))]">
			<div className="mt-3">
				<Breadcrumb routes={routes} />
			</div>
			<ProductCard data={data} />
		</div>
	);
};

export { Product };
