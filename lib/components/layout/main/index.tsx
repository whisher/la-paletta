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
			<main className="container mx-auto text-black min-h-[calc(100vh-100px)] bg-red-100">
				{children}
			</main>
			<Footer />
		</>
	);
};

export { Main };
