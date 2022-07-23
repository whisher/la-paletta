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
			<ol className="flex items-center h-8 pl-2 pr-3 overflow-hidden rounded-r-xl">
				<li className="inline-flex items-center -mr-2">
					<Link href="/">
						<a className="inline-flex items-center">
							<AiOutlineHome className="text-gray-300 w-6 h-6" />
						</a>
					</Link>
				</li>
				{routes.map((route) => {
					return route.href ? (
						<li key={route.name} className="inline-flex items-center -mr-2">
							<Separator />
							<Link href={route.href}>
								<a className="pl-3 text-sm font-bold  text-gray-400">{route.name}</a>
							</Link>
						</li>
					) : (
						<li key={route.name} className="inline-flex items-center">
							<Separator />
							<span className="pl-3 text-sm font-bold text-gray-400">{route.name}</span>
						</li>
					);
				})}
			</ol>
		</nav>
	);
};

export { Breadcrumb };
