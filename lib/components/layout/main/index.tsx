import React, { ReactNode } from 'react';
import { Footer } from '../footer';
import { Header } from '../header';

export interface MainProps {
	children: ReactNode;
}
const Main: React.FC<MainProps> = ({ children }) => {
	return (
		<>
			<Header />
			<main className="px-8 text-black">{children}</main>
			<Footer />
		</>
	);
};

export { Main };
