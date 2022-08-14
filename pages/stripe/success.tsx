import type { NextPage } from 'next';

import { useRouter } from 'next/router';
import { useGetDoneOrderProductQuery } from '@/graphcms/generated/graphql';
import { Alert } from '@/components/ui/alert';
import { Loader } from '@/components/ui/loader';

const StripeSuccessPage: NextPage = () => {
	const router = useRouter();
	const [result] = useGetDoneOrderProductQuery({
		variables: { id: String(router.query.id) }
	});
	const { data, fetching, error } = result;

	if (fetching) {
		return <Loader />;
	}
	if (error) {
		return <Alert />;
	}
	console.log('result', result);

	return <h1>PIPPO</h1>;
};

export default StripeSuccessPage;
