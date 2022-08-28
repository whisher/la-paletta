import type { GetServerSideProps } from 'next';
import { client } from '@/graphcms/client';
import {
	GetCategoriesProductsSlugDocument,
	GetCategoriesProductsSlugQuery
} from '@/graphcms/generated/graphql';
function generateSiteMap(baseUrl: string, data: GetCategoriesProductsSlugQuery) {
	const { categories } = data;
	return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <!--We manually set the two URLs we know already-->
     <url>
       <loc>https://jsonplaceholder.typicode.com</loc>
     </url>
     <url>
       <loc>https://jsonplaceholder.typicode.com/guide</loc>
     </url>
     <url>
           <loc>${`${baseUrl}`}</loc>
       </url>
       <url>
           <loc>${`${baseUrl}/chi-siamo`}</loc>
       </url>
     ${categories
				.map(({ slug }) => {
					return `
       <url>
           <loc>${`${baseUrl}/${slug}`}</loc>
       </url>
     `;
				})
				.join('')}
     ${categories
				.map(({ slug, products }) => {
					return products
						.map(({ slug: slugProd }) => {
							return `
       <url>
           <loc>${`${baseUrl}/${slug}/${slugProd}`}</loc>
       </url>`;
						})
						.join('');
				})
				.join('')}
   </urlset>
 `;
}
export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
	res.setHeader('Content-Type', 'text/xml');
	const host = req.headers.host;
	const protocol = host?.includes('localhost') ? 'http://' : 'https://';
	const baseUrl = `${protocol}${host}`;
	const result = await client.query(GetCategoriesProductsSlugDocument).toPromise();
	const sitemap = generateSiteMap(baseUrl, result.data);
	res.write(sitemap);
	res.end();

	return {
		props: {}
	};
};

const SiteMap = async () => {};

export default SiteMap;
