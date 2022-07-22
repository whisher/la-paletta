import React from 'react';

import { ProductsSlugCategoryQuery } from '@/graphcms/generated/graphql';
import { Breadcrumbs, Breadcrumb } from '@/components/ui/breadcrumbs';

export interface HomeProps {
	data: ProductsSlugCategoryQuery;
}

const Products: React.FC<HomeProps> = ({ data }) => {
	const { categories } = data;
	const category = categories[0];
	const { name, products } = category;
	const routes: Breadcrumbs[] = [{ name, href: '/' }, { name: 'pippo' }];
	console.log('data', name, products);
	return (
		<>
			<Breadcrumb routes={routes} />
			<div className="">popp</div>
		</>
	);
};

export { Products };
