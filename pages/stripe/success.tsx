import type { NextPage } from 'next';

import { useRouter } from 'next/router';

const StripeSuccessPage: NextPage = () => {
	const router = useRouter();
	console.log(router.query.id);

	return <h1>PIPPO</h1>;
};

export default StripeSuccessPage;
