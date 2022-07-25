import { GetStaticPaths, GetStaticProps } from 'next';
import type { NextPage } from 'next';

import { client, loadFromCms } from '@/graphcms/client';
import {
	GetProductsSlugDocument,
	GetProductSlugDocument,
	GetProductSlugQuery
} from '@/graphcms/generated/graphql';

import { Product } from '@/components/features/product';

export const getStaticPaths: GetStaticPaths = async () => {
	const result = await client.query(GetProductsSlugDocument).toPromise();

	const paths = result.data.products.map(
		(product: { categories: { slug: string }[]; slug: string }) => {
			return {
				params: { category: product.categories[0].slug, product: product.slug }
			};
		}
	);
	return {
		paths,
		fallback: false
	};
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const slug = params?.product;
	return await loadFromCms(GetProductSlugDocument, {
		slug
	});
};

type ProductPageProps = {
	data: GetProductSlugQuery | null;
};

const ProductPage: NextPage<ProductPageProps> = ({ data }) => {
	return data?.product ? <Product data={data.product} /> : null;
};

export default ProductPage;
