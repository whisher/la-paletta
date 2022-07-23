import React from 'react';

import { ProductsSlugCategoryQuery } from '@/graphcms/generated/graphql';
import { Breadcrumbs, Breadcrumb } from '@/components/ui/breadcrumbs';
import { ProductsList } from './products-list';

export interface HomeProps {
	data: ProductsSlugCategoryQuery;
}

const Products: React.FC<HomeProps> = ({ data }) => {
	const category = data.category;
	const { name } = category?.products![0];
	const routes: Breadcrumbs[] = [{ name }];
	return (
		<div className="min-h-[calc(100vh-theme(space.20))]">
			<Breadcrumb routes={routes} />
			<ProductsList data={products} />
		</div>
	);
};

export { Products };
