import React from 'react';

import { GetCategoriesQuery } from '@/graphcms/generated/graphql';
import { CategoryCard } from './category-card';

export interface CategoriesGridProps {
	data: GetCategoriesQuery['categories'];
}
const CategoriesGrid: React.FC<CategoriesGridProps> = ({ data }) => {
	return (
		<section className="relative w-full grid grid-cols-3  place-items-center gap-16">
			{data.map((category) => (
				<CategoryCard key={category.id} data={category} />
			))}
		</section>
	);
};

export { CategoriesGrid };
