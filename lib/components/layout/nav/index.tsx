import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { routes } from '../../../costants';

const Nav: React.FC = () => {
	const router = useRouter();
	const { about } = routes;
	const common =
		'h-[30px] flex items-center leading-4 px-[9px] shadow-sm rounded-xl uppercase tracking-tight backdrop-blur-2xl transition ease-in-out duration-300';
	const isActiveLink = (path: string): string => {
		if (router.pathname === path) {
			return `${common} bg-black/90 text-white`;
		}
		return `${common} bg-white/90`;
	};
	return (
		<nav>
			<ul className="flex gap-x-4">
				<li>
					<Link href="/">
						<a className={isActiveLink('/')}>Home</a>
					</Link>
				</li>
				<li>
					<Link href={about}>
						<a className={isActiveLink(about)}>Chi Siamo</a>
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export { Nav };
