import React from 'react';

import { GetCategoriesQuery } from '@/graphcms/generated/schema';
import { Category } from './category';

export interface CategoriesListProps {
	data: GetCategoriesQuery['categories'];
}
const CategoriesList: React.FC<CategoriesListProps> = ({ data }) => {
	return (
		<div className="grid grid-cols-3 gap-4">
			{data.map((category) => (
				<Category key={category.slug} data={category} />
			))}
		</div>
	);
};

export { CategoriesList };
