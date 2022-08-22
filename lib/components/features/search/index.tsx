import React, { useReducer } from 'react';

import { GetSearchQuery } from '@/graphcms/generated/graphql';
import { Breadcrumbs, Breadcrumb } from '@/components/ui/breadcrumbs';
import { NoData } from '@/components/ui/no-data';
import { SearchGrid } from './search-grid';

export interface SearchProps {
	data: NonNullable<GetSearchQuery>['products'];
	query: string;
}

const Search: React.FC<SearchProps> = ({ data, query }) => {
	const routes: Breadcrumbs[] = [{ name: `Search:${query}` }];
	const hasProducts = data.length > 0;

	return (
		<div className="min-h-[calc(100vh-theme(space.20))]">
			<div className="flex justify-between items-center mt-3">
				<Breadcrumb routes={routes} />
			</div>

			{hasProducts ? <SearchGrid data={data} /> : <NoData feature="Products" />}
		</div>
	);
};

export { Search };
