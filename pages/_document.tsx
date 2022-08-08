import Document, { Html, Head, Main, NextScript } from 'next/document';

class LaPalettaDocument extends Document {
	render() {
		return (
			<Html lang="it">
				<Head>
					<link rel="preconnect" href="https://fonts.googleapis.com" />
					<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
					<link
						href="https://fonts.googleapis.com/css2?family=Mulish:wght@400;600&display=swap"
						rel="stylesheet"
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default LaPalettaDocument;
