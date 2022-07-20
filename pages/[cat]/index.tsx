import { GetStaticPaths, GetStaticProps } from 'next';
import type { NextPage } from 'next';

import { client, loadFromCms } from '@/graphcms/client';
import {
	GetCategoriesSlugDocument,
	ProductsSlugCategoryDocument,
	ProductsSlugCategoryQuery
} from '@/graphcms/generated/graphql';

export const getStaticPaths: GetStaticPaths = async () => {
	const result = await client.query(GetCategoriesSlugDocument).toPromise();
	const paths = result.data.categories.map((category: { slug: string }) => {
		return {
			params: { cat: category.slug }
		};
	});
	return {
		paths,
		fallback: false // false or 'blocking'
	};
};
export const getStaticProps: GetStaticProps = async (context) => {
	const slug = 'spray'; //context.params;
	return await loadFromCms(ProductsSlugCategoryDocument, {
		slug
	});
};
type ShopPageProps = {
	data: ProductsSlugCategoryQuery | undefined;
};
const Shopd: NextPage<ShopPageProps> = ({ data }) => {
	console.log('shp', data);
	return <h1 className="text-3xl font-bold underline">dddHello world Shop!i</h1>;
};

export default Shopd;
