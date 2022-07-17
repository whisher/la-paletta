import React from 'react';

import { GetCategoriesQuery } from '@/graphcms/generated/schema';

export interface CategoryProps {
	data: GetCategoriesQuery['categories'][0];
}
const Category: React.FC<CategoryProps> = ({ data }) => {
	const { name } = data;
	const i = 100;
	return (
		<div
			className={`flex justify-center items-center h-40 w-32 rounded-lg border-brand-${i} border-2`}
		>
			<h2 className="uppercase text-white">{name}</h2>
		</div>
	);
};

export { Category };
