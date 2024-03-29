import { GetStaticProps } from 'next';
import type { NextPage } from 'next';

import { loadFromCms } from '@/graphcms/client';
import { GetCategoriesDocument, GetCategoriesQuery } from '@/graphcms/generated/graphql';

import { Home } from '@/components/features/home';

export const getStaticProps: GetStaticProps = async () => {
	return await loadFromCms(GetCategoriesDocument);
};

type HomePageProps = {
	data: GetCategoriesQuery | null;
};

const HomePage: NextPage<HomePageProps> = ({ data }) => {
	const categories = data?.categories;
	return categories ? <Home data={categories} /> : null;
};

export default HomePage;
