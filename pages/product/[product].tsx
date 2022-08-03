import { GetStaticPaths, GetStaticProps } from 'next';
import type { NextPage } from 'next';

import { client, loadFromCms } from '@/graphcms/client';
import {
	GetProductsSlugDocument,
	GetProductSlugDocument,
	GetProductSlugQuery
} from '@/graphcms/generated/graphql';

import { PRODUCT_WIDTH, PRODUCT_THUMBNAIL } from '../../lib/costants';

import { Product } from '@/components/features/product';

export const getStaticPaths: GetStaticPaths = async () => {
	const result = await client.query(GetProductsSlugDocument).toPromise();
	const paths = result.data.products.map((product: { slug: string }) => {
		return {
			params: { product: product.slug }
		};
	});
	return {
		paths,
		fallback: false
	};
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const slug = params?.product;
	return await loadFromCms(GetProductSlugDocument, {
		slug,
		PRODUCT_WIDTH,
		PRODUCT_THUMBNAIL
	});
};

type ProductPageProps = {
	data: GetProductSlugQuery | null;
};

const ProductPage: NextPage<ProductPageProps> = ({ data }) => {
	return data?.product ? <Product data={data.product} /> : null;
};

export default ProductPage;
