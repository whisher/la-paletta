import { GetStaticPaths, GetStaticProps } from 'next';
import type { NextPage } from 'next';

import { client, loadFromCms } from '@/graphcms/client';
import {
	GetCategoriesSlugDocument,
	ProductsSlugCategoryDocument,
	ProductsSlugCategoryQuery
} from '@/graphcms/generated/graphql';

import { Products } from '@/components/features/products';

export const getStaticPaths: GetStaticPaths = async () => {
	const result = await client.query(GetCategoriesSlugDocument).toPromise();
	const paths = result.data.categories.map((category: { slug: string }) => {
		return {
			params: { category: category.slug }
		};
	});
	return {
		paths,
		fallback: false
	};
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const slug = params?.category;
	return await loadFromCms(ProductsSlugCategoryDocument, {
		slug
	});
};

type ProductsPageProps = {
	data: ProductsSlugCategoryQuery | null;
};

const ProductsPage: NextPage<ProductsPageProps> = ({ data }) => {
	return data?.category ? <Products data={data.category} /> : null;
};

export default ProductsPage;
