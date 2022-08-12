import { createClient, OperationContext } from 'urql';
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
	query: DocumentNode,
	variables?: Variables,
	context?: Partial<OperationContext>
): Promise<{
	props: { data: Data | null };
}> {
	try {
		const result = await client.query(query, variables, context).toPromise();
		if (result.error && !result.data) {
			return {
				props: {
					data: null
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
				data: null
			}
		};
	}
}

export { client };
