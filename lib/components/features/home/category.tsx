import React from 'react';
import Link from 'next/link';

import { GetCategoriesQuery } from '@/graphcms/generated/schema';
import { Button } from '@/components/ui/button';

export interface CategoryProps {
	data: GetCategoriesQuery['categories'][0];
}
const Category: React.FC<CategoryProps> = ({ data }) => {
	const { description, name, slug } = data;
	return (
		<Link href={`/${slug}`}>
			<a>
				<article className={`flex flex-col h-80 w-80 px-4 py-6 bg-white rounded-lg`}>
					<h2 className="text-3xl uppercase font-bold">{name}</h2>
					<h3 className="flex-1 pt-3 text-gray-600">{description}</h3>
					<div className="ml-auto">
						<Button>Vedi tutti i prodotti</Button>
					</div>
				</article>
			</a>
		</Link>
	);
};

export { Category };
