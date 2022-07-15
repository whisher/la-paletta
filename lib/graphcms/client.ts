import { createClient, OperationContext } from 'urql';
import type { TypedDocumentNode } from '@graphql-typed-document-node/core';
import type { DocumentNode } from 'graphql';

const client = createClient({
	url: String(process.env.NEXT_PUBLIC_GRAPHCMS_URL),
	fetchOptions: () => {
		return {
			headers: { Authorization: `Bearer ${process.env.NEXT_PUBLIC_GRAPHCMS_TOKEN}` }
		};
	}
});

export async function loadFromCms<
	Data = Map<string, unknown>,
	Variables extends object = Record<string, unknown>
>(
	query: DocumentNode | TypedDocumentNode<Data, Variables> | string,
	variables?: Variables,
	context?: Partial<OperationContext>
): Promise<{
	props: { data: Data | undefined };
}> {
	try {
		const result = await client.query(query, variables, context).toPromise();
		if (!result) {
			return {
				props: {
					data: undefined
				}
			};
		}
		return {
			props: {
				data: result.data
			}
		};
	} catch (error) {
		return {
			props: {
				data: undefined
			}
		};
	}
}

export { client };
