import React, { useState, useEffect } from 'react';
import classNames from 'classNames';
import { Brand } from '../brand';
import { Nav } from '../nav';

import { Search } from '@/components/ui/search';
import { Sidebar } from '@/components/ui/cart';

const Header: React.FC = () => {
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
		`sticky top-0 z-50 h-20 origin-top flex justify-between items-center px-8 transition duration-500`,
		{ 'bg-brand-300/70 scale-y-90': isScrolled, 'bg-brand-300 scale-y-100': !isScrolled }
	);
	return (
		<header className={classes}>
			<Brand />
			<Nav />
			<ul className="flex justify-between items-center gap-x-4">
				<li>
					<Search />
				</li>

				<li>
					<Sidebar />
				</li>
			</ul>
		</header>
	);
};

export { Header };
