import { GetStaticProps } from 'next';
import type { NextPage } from 'next';

import { loadFromCms } from '@/graphcms/client';
import { GetCategoriesDocument, GetCategoriesQuery } from '@/graphcms/generated/schema';

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
	console.log('data', data);
	return <h1 className="text-3xl font-bold underline">Hello world!</h1>;
};

export default Home;
