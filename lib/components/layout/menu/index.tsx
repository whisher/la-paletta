import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { route_chi_siamo } from '../../../costants';

const Menu: React.FC = () => {
	const router = useRouter();
	const common =
		'h-[30px] flex items-center leading-4 px-[9px] shadow-sm rounded-xl uppercase tracking-tight backdrop-blur-2xl transition ease-in-out duration-300';
	const isActiveLink = (path: string): string => {
		if (router.pathname === path) {
			return `${common} bg-black/90 text-white`;
		}
		return `${common} bg-white/90`;
	};
	return (
		<ul className="flex">
			<li>
				<Link href="/">
					<a className={isActiveLink('/')}>Home</a>
				</Link>
			</li>
			<li>
				<Link href={route_chi_siamo}>
					<a className={isActiveLink(route_chi_siamo)}>Chi Siamo</a>
				</Link>
			</li>
		</ul>
	);
};

export { Menu };
