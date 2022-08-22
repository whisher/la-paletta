import React, { ReactNode, CSSProperties } from 'react';
import { themes, useThemeStore } from '@/hooks/theme';
import { Footer } from '../footer';
import { Header } from '../header';

export interface ThemeCSS extends CSSProperties {
	'--la-paletta-primary': string;
	'--la-paletta-secondary': string;
}
export interface MainProps {
	children: ReactNode;
}
const Main: React.FC<MainProps> = ({ children }) => {
	const { theme, toggle } = useThemeStore();
	const toggleTheme = () => {
		toggle();
	};
	const current = themes[theme];
	return (
		<div
			style={
				{
					'--la-paletta-primary': current.primary,
					'--la-paletta-secondary': current.secondary
				} as ThemeCSS
			}
		>
			<Header toggleTheme={toggleTheme} />
			<main className="px-8 text-black">{children}</main>
			<Footer />
		</div>
	);
};

export { Main };
