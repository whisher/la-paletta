import { GetStaticProps } from 'next';
import type { NextPage } from 'next';

import { loadFromCms } from '@/graphcms/client';
import { GetCategoriesDocument, GetCategoriesQuery } from '@/graphcms/generated/schema';

import { Home } from '@/components/features/home';

export const getStaticProps: GetStaticProps = async () => {
	return await loadFromCms(GetCategoriesDocument);
};

type HomePageProps = {
	data: GetCategoriesQuery | undefined;
};

const HomePage: NextPage<HomePageProps> = ({ data }) => {
	console.log('me', data);
	return <Home data={data} />;
};

export default HomePage;
