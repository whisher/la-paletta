import React from 'react';
import { useInView } from 'react-intersection-observer';
import { GetCategoriesQuery } from '@/graphcms/generated/graphql';
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
			<div className="min-h-[calc(100vh-theme(space.20))] before:content-[''] before:absolute before:w-full before:h-full  before:bg-[url('/images/home-bck.webp')] before:bg-no-repeat before:bg-center before:bg-cover before:blur-[128px] before:opacity-80 before:scale-75 flex justify-center items-center px-8">
				{hasCategories ? <CategoriesGrid data={data} /> : <NoData feature="Category" />}
			</div>
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
