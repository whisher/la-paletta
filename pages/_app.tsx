import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Provider } from 'urql';
import { client } from '@/graphcms/client';

import { DefaultSeo } from 'next-seo';

import { defaultSeo } from 'next-seo.config';
import { ConfigContextProvider } from '@/hooks/config';
import { Layout } from '@/components/layout';

const LaPaletta = ({ Component, pageProps }: AppProps) => {
	return (
		<Provider value={client}>
			<Layout>
				<DefaultSeo {...defaultSeo} />
				<Component {...pageProps} />
			</Layout>
		</Provider>
	);
};

export default LaPaletta;
