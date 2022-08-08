import { NextPageContext } from 'next';
import { Page500 } from '@/components/layout/500';

interface ErrorPageProps {
	statusCode: number;
}

const ErrorPage = ({ statusCode }: ErrorPageProps) => {
	return (
		<Page500>
			{statusCode ? `An error ${statusCode} occurred on server` : 'An error occurred on client'}
		</Page500>
	);
};

ErrorPage.getInitialProps = ({ res, err }: NextPageContext) => {
	const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
	return { statusCode };
};

export default ErrorPage;
