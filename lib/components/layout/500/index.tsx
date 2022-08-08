import React, { ReactNode } from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/container';

export interface Page500Props {
	children: ReactNode;
}

const Page500: React.FC<Page500Props> = ({ children }) => {
	return (
		<Container>
			<Link href="/">
				<a>
					<div className="relative h-52 w-52 flex justify-center items-center p-6 bg-white text-2xl text-brand-300 rounded-full">
						{children}
					</div>
				</a>
			</Link>
		</Container>
	);
};

export { Page500 };
