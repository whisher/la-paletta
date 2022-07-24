import React, { useState } from 'react';

import { ProductsSlugCategoryQuery } from '@/graphcms/generated/graphql';
import { Breadcrumbs, Breadcrumb } from '@/components/ui/breadcrumbs';
import { ButtonGroup } from '@/components/ui/button-group';
import { ProductsList } from './products-list';

type ProductsDto = NonNullable<ProductsSlugCategoryQuery['category']>['products'];

const descendingPrice = (a: ProductsDto[0], b: ProductsDto[0]) => {
	return b.price - a.price;
};

const ascendingPrice = (a: ProductsDto[0], b: ProductsDto[0]) => {
	return a.price - b.price;
};

export interface HomeProps {
	data: NonNullable<ProductsSlugCategoryQuery['category']>;
}

const Products: React.FC<HomeProps> = ({ data }) => {
	const { products } = data;
	const [items, setItems] = useState<ProductsDto>(products);
	const { name } = products[0];
	const routes: Breadcrumbs[] = [{ name }];
	const labels = ['Dal più economico', 'Dal più caro'];
	const handleButtonGroupClick = (num: number) => {
		num > 0
			? setItems((items) => items.sort(descendingPrice).map((item) => item))
			: setItems((items) => items.sort(ascendingPrice).map((item) => item));
	};
	return (
		<div className="min-h-[calc(100vh-theme(space.20))]">
			<div className="flex justify-between items-center mt-3">
				<Breadcrumb routes={routes} />
				<div className="flex items-center">
					<span className="pr-1 font-bold">Prezzo:</span>
					<ButtonGroup current={0} handleClick={handleButtonGroupClick} labels={labels} />
				</div>
			</div>

			<ProductsList data={items} />
		</div>
	);
};

export { Products };
