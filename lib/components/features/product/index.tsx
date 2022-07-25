import React from 'react';

import { GetProductSlugQuery } from '@/graphcms/generated/graphql';
import { Breadcrumbs, Breadcrumb } from '@/components/ui/breadcrumbs';

import { ProductItem } from './product-item';

export interface ProductProps {
	data: NonNullable<GetProductSlugQuery['product']>;
}

const Product: React.FC<ProductProps> = ({ data }) => {
	const { name, categories } = data;
	const { slug: categorySlug, name: categoryName } = categories[0];

	const routes: Breadcrumbs[] = [{ name: categoryName, href: categorySlug }, { name }];

	return (
		<div className="min-h-[calc(100vh-theme(space.20))]">
			<div className="mt-3">
				<Breadcrumb routes={routes} />
			</div>
			<ProductItem data={data} />
		</div>
	);
};

export { Product };
