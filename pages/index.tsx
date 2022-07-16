import { GetStaticProps } from 'next';
import type { NextPage } from 'next';

import { loadFromCms } from '@/graphcms/client';
import { GetCategoriesDocument, GetCategoriesQuery } from '@/graphcms/generated/schema';

import { Button } from '@/components/ui/button';

export const getStaticProps: GetStaticProps = async () => {
	const data = await loadFromCms(GetCategoriesDocument);
	return {
		props: {
			data
		}
	};
};

type HomeProps = {
	data: GetCategoriesQuery | undefined;
};
const Home: NextPage<HomeProps> = ({ data }) => {
	return (
		<div className="min-h-[calc(100vh-theme(space.20))]  flex justify-center items-center -mx-8 px-8 bg-[url('/images/home-bck.webp')] bg-no-repeat bg-center bg-cover">
			<h1 className="text-3xl font-bold underline">Hello world!</h1>
			<Button>Shop</Button>
		</div>
	);
};

export default Home;
