import React from 'react';

import { ProductsSlugCategoryQuery } from '@/graphcms/generated/graphql';
import { Products } from './products';

export interface ProductsListProps {
	data: ProductsSlugCategoryQuery['category'];
}
const ProductsList: React.FC<ProductsListProps> = ({ data }) => {
	const products = data?.products;
	return (
		<section className="w-full grid grid-cols-4 gap-x-8 gap-y-4 mt-8">
			{products ? products.map((product) => <Products key={product.slug} data={product} />) : null}
		</section>
	);
};

export { ProductsList };
