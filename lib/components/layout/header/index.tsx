import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import { Brand } from '../brand';
import { Nav } from '../nav';

import { Cart } from '@/components/ui/cart';
import { Search } from '@/components/ui/search';
import { Theme } from '@/components/ui/theme';

export interface HeaderProps {
	toggleTheme: () => void;
}
const Header: React.FC<HeaderProps> = ({ toggleTheme }) => {
	const [isScrolled, setIsScrolled] = useState(false);
	useEffect(() => {
		const onScroll = () => {
			const scrollHeight = Math.ceil(window.scrollY / 50) * 50;
			scrollHeight > 50 ? setIsScrolled(true) : setIsScrolled(false);
		};
		window.addEventListener('scroll', onScroll, false);
		return () => window.removeEventListener('scroll', onScroll);
	}, []);
	const classes = classNames(
		`sticky top-0 z-50 origin-top h-20 flex justify-between items-center px-8 bg-brand-300 transition duration-500`,
		{ 'border-b-8 border-white/50': isScrolled, 'border-b-8 border-brand-300': !isScrolled }
	);
	return (
		<header className={classes}>
			<Brand />

			<Nav />
			<ul className="flex justify-between items-center gap-x-4">
				<li>
					<Theme toggleTheme={toggleTheme} />
				</li>
				<li>
					<Search />
				</li>

				<li>
					<Cart />
				</li>
			</ul>
		</header>
	);
};

export { Header };
