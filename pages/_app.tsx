import '../styles/globals.css';
import type { AppProps } from 'next/app';

import { Main } from '@/components/layout';

const LaPaletta = ({ Component, pageProps }: AppProps) => {
	return (
		
			<Main>
				<Component {...pageProps} />
			</Main>
		
	);
};

export default LaPaletta;
