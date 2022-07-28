import React from 'react';

import { GetProductsSlugCategoryQuery } from '@/graphcms/generated/graphql';

export interface ProductVariantColorsProps {
	data: NonNullable<
		GetProductsSlugCategoryQuery['category']
	>['products'][0]['productVariantColors'];
}

const ProductVariantColors: React.FC<ProductVariantColorsProps> = ({ data }) => {
	return (
		<ul className="flex w-full">
			{data.map((color) => {
				return (
					<li
						key={color.hex}
						className="w-6 h-4 shadow-sm"
						style={{ backgroundColor: String(`#${color.hex}`) }}
					></li>
				);
			})}
		</ul>
	);
};

export { ProductVariantColors };
