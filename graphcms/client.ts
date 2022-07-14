import { createClient } from 'urql';

const client = createClient({
	url: String(process.env.NEXT_PUBLIC_GRAPHCMS_URL),
	fetchOptions: () => {
		return {
			headers: { Authorization: `Bearer ${process.env.NEXT_PUBLIC_GRAPHCMS_TOKEN}` }
		};
	}
});

export { client };
