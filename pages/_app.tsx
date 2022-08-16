import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Provider } from 'urql';
import { client } from '@/graphcms/client';

import { ConfigContextProvider } from '@/hooks/config';
import { Layout } from '@/components/layout';

const LaPaletta = ({ Component, pageProps }: AppProps) => {
	return (
		<Provider value={client}>
			<ConfigContextProvider>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</ConfigContextProvider>
		</Provider>
	);
};

export default LaPaletta;
