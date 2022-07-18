import React from 'react';
import { useInView } from 'react-intersection-observer';

import { GetCategoriesQuery } from '@/graphcms/generated/schema';
import { CategoriesList } from './categories-list';
export interface HomeProps {
	data: GetCategoriesQuery | undefined;
}
const Home: React.FC<HomeProps> = ({ data }) => {
	const categories = data?.categories;
	const { ref, inView, entry } = useInView({
		/* Optional options */
		threshold: 0
	});
	return (
		<>
			<div className="min-h-[calc(100vh-theme(space.20))]  flex justify-center items-center before:content-[''] before:absolute before:w-full before:h-full  before:bg-[url('/images/home2-bck.jpg')] before:bg-no-repeat before:bg-center before:bg-cover before:blur-3xl px-8">
				<div className="relative mx-auto bg-white">
					{categories ? <CategoriesList data={categories} /> : null}
				</div>
			</div>
			<div className="one"></div>
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
