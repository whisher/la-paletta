import React from 'react';
import Link from 'next/link';

const Page404: React.FC = () => {
	return (
		<div className="min-h-[calc(100vh-theme(space.20))] before:content-[''] before:absolute before:w-full before:h-full  before:bg-[url('/images/home-bck.webp')] before:bg-no-repeat before:bg-center before:bg-cover before:blur-[128px] before:opacity-80 before:scale-75 flex justify-center items-center">
			<Link href="/">
				<a>
					<div className="relative h-36 w-36 flex justify-center items-center bg-white text-3xl text-brand-300 rounded-full">
						404
					</div>
				</a>
			</Link>
		</div>
	);
};

export { Page404 };
