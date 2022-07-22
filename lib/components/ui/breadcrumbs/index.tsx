import React from 'react';
import Link from 'next/link';
import { AiOutlineHome } from 'react-icons/ai';

import { Separator } from './separator';

export interface Breadcrumbs {
	name: string;
	href?: string;
}
export interface BreadcrumbsProps {
	routes: Breadcrumbs[];
}
const Breadcrumb: React.FC<BreadcrumbsProps> = ({ routes }) => {
	return (
		<nav className="flex mt-3" aria-label="Breadcrumb">
			<ol className="flex items-center h-8 overflow-hidden rounded-r-xl bg-brand-400/10">
				<li className="inline-flex items-center -mr-2">
					<Link href="/">
						<a className="inline-flex items-center">
							<AiOutlineHome className="text-gray-300 w-8 h-8" />
							<span className="pl-2 text-base font-bold text-gray-400">Home</span>
						</a>
					</Link>
				</li>
				{routes.map((route) => {
					return route.href ? (
						<li key={route.name} className="inline-flex items-center -mr-2">
							<Separator />
							<Link href={route.href}>
								<a className="pl-3 text-base font-bold text-gray-400">{route.name}</a>
							</Link>
						</li>
					) : (
						<li className="inline-flex items-center">
							<Separator />
							<span className="px-3 text-base font-bold text-gray-400">{route.name}</span>
						</li>
					);
				})}
			</ol>
		</nav>
	);
};

export { Breadcrumb };
