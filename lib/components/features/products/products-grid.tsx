import React from 'react';

import { GetProductsSlugCategoryQuery } from '@/graphcms/generated/graphql';
import { ProductsCard } from './products-card';

export interface ProductsGridProps {
	data: NonNullable<GetProductsSlugCategoryQuery['category']>['products'];
}
const ProductsGrid: React.FC<ProductsGridProps> = ({ data }) => {
	return (
		<section className="w-full grid grid-cols-4 gap-x-8 gap-y-4 mt-8">
			{data ? data.map((product) => <ProductsCard key={product.id} data={product} />) : null}
		</section>
	);
};

export { ProductsGrid };
