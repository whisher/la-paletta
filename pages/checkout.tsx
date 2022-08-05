import type { GetServerSideProps, NextPage } from 'next';

import { getCookie } from 'cookies-next';
import { COOKIE_CHECKOUT } from '../lib/costants';
import { Button } from '@/components/ui/button';

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
	res.statusCode = 500;
	throw new Error('oooo');
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
		props: {} // will be passed to the page component as props
	};
};

const CheckoutPage: NextPage = () => {
	return (
		<div className="h-screen flex justify-center items-center">
			<Button>buy</Button>
		</div>
	);
};

export default CheckoutPage;
