import React from 'react';
import { useInView } from 'react-intersection-observer';
import { GetCategoriesQuery } from '@/graphcms/generated/graphql';
import { Container } from '@/components/ui/container';
import { NoData } from '@/components/ui/no-data';
import { CategoriesGrid } from './categories-grid';
export interface HomeProps {
	data: GetCategoriesQuery['categories'];
}
const Home: React.FC<HomeProps> = ({ data }) => {
	const { ref, inView } = useInView({
		threshold: 0
	});
	const hasCategories = data.length > 0;
	return (
		<>
			<Container>
				{hasCategories ? <CategoriesGrid data={data} /> : <NoData feature="Category" />}
			</Container>
			<div ref={ref} className="h-screen">
				<div
					className={`h-40 w-40 bg-black transition duration-1000 delay-1000 ${
						inView ? 'scale-100' : 'scale-0'
					}`}
				></div>
			</div>
		</>
	);
};

export { Home };
