import React from 'react';

import { GetProductsSlugCategoryQuery } from '@/graphcms/generated/graphql';
import { Products } from './products';

export interface ProductsListProps {
	data: NonNullable<GetProductsSlugCategoryQuery['category']>['products'];
}
const ProductsList: React.FC<ProductsListProps> = ({ data }) => {
	return (
		<section className="w-full grid grid-cols-4 gap-x-8 gap-y-4 mt-8">
			{data ? data.map((product) => <Products key={product.id} data={product} />) : null}
		</section>
	);
};

export { ProductsList };
