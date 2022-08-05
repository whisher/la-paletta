import React, { ReactNode } from 'react';
import Link from 'next/link';

export interface Page500Props {
	children: ReactNode;
}

const Page500: React.FC<Page500Props> = ({ children }) => {
	return (
		<div className="min-h-[calc(100vh-theme(space.20))] before:content-[''] before:absolute before:w-full before:h-full  before:bg-[url('/images/home-bck.webp')] before:bg-no-repeat before:bg-center before:bg-cover before:blur-[128px] before:opacity-80 before:scale-75 flex justify-center items-center">
			<Link href="/">
				<a>
					<div className="relative h-52 w-52 flex justify-center items-center p-6 bg-white text-2xl text-brand-300 rounded-full">
						{children}
					</div>
				</a>
			</Link>
		</div>
	);
};

export { Page500 };
