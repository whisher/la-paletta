import type { NextPage } from 'next';

import { useRouter } from 'next/router';
import { useGetDoneOrderProductQuery } from '@/graphcms/generated/graphql';
const StripeSuccessPage: NextPage = () => {
	const router = useRouter();
	const [result] = useGetDoneOrderProductQuery({
		variables: { id: String(router.query.id) }
	});
	const { data, fetching, error } = result;

	if (fetching) return <p>Loading...</p>;
	if (error) return <p>Oh no... {error.message}</p>;
	console.log('result', result);

	return <h1>PIPPO</h1>;
};

export default StripeSuccessPage;
