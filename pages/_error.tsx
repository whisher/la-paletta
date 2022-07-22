import { NextPageContext } from 'next';

interface ErrorPageProps {
	statusCode: number;
}

const ErrorPage = ({ statusCode }: ErrorPageProps) => {
	return (
		<p>
			{statusCode
				? `Something wrong has happened with error ${statusCode}`
				: 'Something wrong has happened'}
		</p>
	);
};

ErrorPage.getInitialProps = ({ res, err }: NextPageContext) => {
	const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
	return { statusCode };
};

export default Error;
