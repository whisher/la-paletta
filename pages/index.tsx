import { GetStaticProps } from 'next';
import type { NextPage } from 'next';

import { client } from '@/graphcms/client';
import { GetCategoriesDocument, GetCategoriesQuery } from '@/graphcms/generated/schema';

export const getCategories = async (): Promise<GetCategoriesQuery | undefined> => {
	const result = await client.query(GetCategoriesDocument).toPromise();
	return result?.data;
};

export const getStaticProps: GetStaticProps = async () => {
	const data = await getCategories();
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
