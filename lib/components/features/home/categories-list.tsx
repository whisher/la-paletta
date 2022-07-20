import React from 'react';

import { GetCategoriesQuery } from '@/graphcms/generated/schema';
import { Category } from './category';

export interface CategoriesListProps {
	data: GetCategoriesQuery['categories'];
}
const CategoriesList: React.FC<CategoriesListProps> = ({ data }) => {
	return (
		<section className="relative w-full grid grid-cols-3  place-items-center gap-16">
			{data.map((category) => (
				<Category key={category.slug} data={category} />
			))}
		</section>
	);
};

export { CategoriesList };
