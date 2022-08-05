import React, { useReducer } from 'react';

import { GetProductsSlugCategoryQuery } from '@/graphcms/generated/graphql';
import { Breadcrumbs, Breadcrumb } from '@/components/ui/breadcrumbs';
import { ButtonGroup } from '@/components/ui/button-group';
import { NoData } from '@/components/ui/no-data';
import { ProductsGrid } from './products-grid';

type ProductsDto = NonNullable<GetProductsSlugCategoryQuery['category']>['products'];

const descendingPrice = (a: ProductsDto[0], b: ProductsDto[0]) => {
	return b.price - a.price;
};

const ascendingPrice = (a: ProductsDto[0], b: ProductsDto[0]) => {
	return a.price - b.price;
};

const productsReducer = (state: ProductsDto, action: number): ProductsDto => {
	switch (action) {
		case 0:
			return state.sort(ascendingPrice).map((item) => item);
		case 1:
			return state.sort(descendingPrice).map((item) => item);
		default:
			return state;
	}
};

const labels = ['Dal più economico', 'Dal più caro'];

export interface ProductsProps {
	data: NonNullable<GetProductsSlugCategoryQuery['category']>;
}

const Products: React.FC<ProductsProps> = ({ data }) => {
	const { name: categoryName, products } = data;
	const [state, dispatch] = useReducer(productsReducer, products);
	const routes: Breadcrumbs[] = [{ name: categoryName }];
	const hasProducts = products.length > 0;
	const handleButtonGroupClick = (num: number) => {
		dispatch(num);
	};

	return (
		<div className="min-h-[calc(100vh-theme(space.20))]">
			<div className="flex justify-between items-center mt-3">
				<Breadcrumb routes={routes} />
				<div className="flex items-center">
					<span className="pr-1 font-bold text-gray-400">Prezzo:</span>
					<ButtonGroup current={0} handleClick={handleButtonGroupClick} labels={labels} />
				</div>
			</div>

			{hasProducts ? <ProductsGrid data={state} /> : <NoData feature="Products" />}
		</div>
	);
};

export { Products };
