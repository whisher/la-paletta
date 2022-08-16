import type { NextPage } from 'next';

import { useRouter } from 'next/router';
import { useGetDoneOrderProductQuery } from '@/graphcms/generated/graphql';
import { Alert } from '@/components/ui/alert';
import { Loader } from '@/components/ui/loader';
import { StripeSuccess } from '@/components/features/stripe/success';

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

	return data ? <StripeSuccess data={data.orders[0]} /> : null;
};

export default StripeSuccessPage;
