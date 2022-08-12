import type { GetServerSideProps, NextPage } from 'next';

import { getCookie } from 'cookies-next';
import { COOKIE_CHECKOUT } from '../lib/costants';
import { Checkout } from '@/components/features/checkout';

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
	const hasCookie = getCookie(COOKIE_CHECKOUT, { req });
	if (!hasCookie) {
		return {
			redirect: {
				destination: '/',
				permanent: false
			}
		};
	}
	return {
		props: {}
	};
};

const CheckoutPage: NextPage = () => {
	return <Checkout />;
};

export default CheckoutPage;
