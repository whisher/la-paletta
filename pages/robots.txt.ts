import type { GetServerSideProps } from 'next';

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
	res.setHeader('Content-Type', 'text/plain');
	const host = req.headers.host;
	const protocol = host?.includes('localhost') ? 'http://' : 'https://';
	const sitemap = `${protocol}${host}/sitemap.xml`;

	const body = `
User-agent: *
Allow: /
Sitemap: ${sitemap}`;
	res.write(body);
	res.end();

	return {
		props: {}
	};
};

const Robots = async () => {};

export default Robots;
