import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Provider } from 'urql';
import { client } from '@/graphcms/client';
import { Main } from '@/components/layout';

const LaPaletta = ({ Component, pageProps }: AppProps) => {
	return (
		<Provider value={client}>
			<Main>
				<Component {...pageProps} />
			</Main>
		</Provider>
	);
};

export default LaPaletta;
