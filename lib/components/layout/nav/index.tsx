import React from 'react';

import { Brand } from '../brand';
import { Menu } from '../menu';

export interface NavProps {
	isHeaderVisible: boolean;
}
const Nav: React.FC<NavProps> = ({ isHeaderVisible }) => {
	return (
		<nav className="sticky top-0 h-[70px] bg-gradient-to-r from-brand-300 to-brand-200 flex ">
			<div
				className={`transition-transform ${
					isHeaderVisible ? 'opacity-0 -translate-y-full' : 'opacity-100  translate-y-0'
				}`}
			>
				<Brand />
			</div>
			<Menu />
		</nav>
	);
};

export { Nav };
