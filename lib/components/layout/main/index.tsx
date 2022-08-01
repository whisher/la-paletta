import React, { ReactNode, CSSProperties } from 'react';
import { Footer } from '../footer';
import { Header } from '../header';

export interface ThemeCSS extends CSSProperties {
	'--la-paletta-default': string;
}
export interface MainProps {
	children: ReactNode;
}
const Main: React.FC<MainProps> = ({ children }) => {
	const theme = true;
	/*const [theme, setTheme] = useState(false);
	useEffect(() => {
		setTimeout(() => {
			setTheme(true);
			console.log('pippo');
		}, 2000);
	}, [theme]);*/
	return (
		<div
			style={
				{
					'--la-paletta-default': theme ? '#22c55e' : '#9e2d95'
				} as ThemeCSS
			}
		>
			<Header />
			<main className="px-8 text-black">{children}</main>
			<Footer />
		</div>
	);
};

export { Main };
