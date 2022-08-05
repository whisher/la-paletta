import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/container';

const Page404: React.FC = () => {
	return (
		<Container>
			<Link href="/">
				<a>
					<div className="relative h-36 w-36 flex justify-center items-center bg-white text-3xl text-brand-300 rounded-full">
						404
					</div>
				</a>
			</Link>
		</Container>
	);
};

export { Page404 };
