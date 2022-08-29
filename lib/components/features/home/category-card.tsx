import React from 'react';
import Link from 'next/link';

import { GetCategoriesQuery } from '@/graphcms/generated/graphql';
import { Button } from '@/components/ui/button';
import { routes } from '../../../costants';

export interface CategoryCardProps {
	data: GetCategoriesQuery['categories'][0];
}

const CategoryCard: React.FC<CategoryCardProps> = ({ data }) => {
	const { products } = routes;
	const { description, name, slug } = data;
	const href = `${products}/${slug}`;
	return (
		<Link href={href}>
			<a>
				<article className={`flex flex-col h-80 w-80 px-8 py-12 bg-white rounded-lg`}>
					<h2 className="text-4xl uppercase font-bold">{name}</h2>
					<h3 className="flex-1 pt-3 text-gray-600">{description}</h3>
					<div className="ml-auto">
						<Button>Vedi tutti i prodotti</Button>
					</div>
				</article>
			</a>
		</Link>
	);
};

export { CategoryCard };
