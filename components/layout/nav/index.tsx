import React from 'react';
import { Brand } from '../brand';

export interface NavProps {
	isHeaderVisible: boolean;
}
const Nav: React.FC<NavProps> = ({ isHeaderVisible }) => {
	return (
		<nav className="sticky top-0 h-[70px] bg-gradient-to-r from-orange-500 to-orange-100 flex ">
			<div
				className={`transition-transform ${
					isHeaderVisible ? 'opacity-0 -translate-y-full' : 'opacity-100  translate-y-0'
				}`}
			>
				<Brand />
			</div>
			Nav {`Header inside viewport ${isHeaderVisible}.`}
		</nav>
	);
};

export { Nav };
