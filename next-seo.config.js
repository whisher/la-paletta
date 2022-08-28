const description =
	'La Paletts graffiti shop Distributore italiano Solana Cans Negozio di bombolette spray, prodotti per i graffiti, markers, streetwear e Fineart';
const title = 'La Paletta graffiti shop e distribuzione bombolette spray solana cans';
const url = 'https://la-paletta.it';

const seo = {
	title,
	titleTemplate: '%s | La Paletta',
	description,
	openGraph: {
		description,
		title,
		type: 'website',
		url
	},
	twitter: {
		handle: '@ilwebdifabio',
		site: '@ilwebdifabio'
	}
};

export { seo as defaultSeo, url as defaultUrl };
