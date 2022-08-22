import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useGetSearchQuery } from '@/graphcms/generated/graphql';
import { Alert } from '@/components/ui/alert';
import { Loader } from '@/components/ui/loader';
import { Search } from '@/components/features/search';
const SearchPage: NextPage = () => {
	const router = useRouter();
	const search = String(router.query.name_contains);
	const [result] = useGetSearchQuery({
		variables: { search }
	});
	const { data, fetching, error } = result;

	if (fetching) {
		return <Loader />;
	}
	if (error) {
		return <Alert />;
	}
	console.log(data);
	return data ? <Search data={data.products} query={search} /> : null;
};

export default SearchPage;
