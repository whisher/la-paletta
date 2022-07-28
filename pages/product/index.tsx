import { GetStaticPaths, GetStaticProps } from 'next';
import type { NextPage } from 'next';

import { client, loadFromCms } from '@/graphcms/client';
import {
	GetCategoriesProductsSlugDocument,
	GetProductsSlugDocument,
	GetProductSlugDocument,
	GetProductSlugQuery
} from '@/graphcms/generated/graphql';

import { PRODUCT } from '../../lib/costants';

import { Product } from '@/components/features/product';
//
export const getStaticPaths: GetStaticPaths = async () => {
	const result2 = await client.query(GetCategoriesProductsSlugDocument).toPromise();
	const p: any = [];
	/*const paths2 = result2.data.categories.map((category: { slug: string; products:{slug:string}[] }) => {
		return {
			params: { category: category.slug, product: product.slug }
		};
	});*/
	result2.data.categories.forEach((category: { slug: string; products: { slug: string }[] }) =>
		category.products.forEach((product) => {
			p.push({ params: { category: category.slug, product: product.slug } });
		})
	);

	console.log('p', p);
	const result = await client.query(GetProductsSlugDocument).toPromise();

	const paths = result.data.products.map(
		(product: { categories: { slug: string }[]; slug: string }) => {
			return {
				params: { category: product.categories[0].slug, product: product.slug }
			};
		}
	);
	console.log('paths', paths);
	return {
		paths: p,
		fallback: false
	};
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const slug = params?.product;
	return await loadFromCms(GetProductSlugDocument, {
		slug,
		PRODUCT
	});
};

type ProductPageProps = {
	data: GetProductSlugQuery | null;
};

const ProductPage: NextPage<ProductPageProps> = ({ data }) => {
	return data?.product ? <Product data={data.product} /> : null;
};

export default ProductPage;

/*

*/
