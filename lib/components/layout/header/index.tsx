import React, { useState, useEffect } from 'react';

import { Brand } from '../brand';
import { Nav } from '../nav';

import { Search } from '../search';
import { Sidebar } from '../cart';

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

	return (
		<header
			className={`sticky top-0 z-50 h-20 flex justify-between items-center px-8 transition duration-500  ${
				isScrolled ? 'bg-brand-300/70' : 'bg-brand-300'
			}`}
		>
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
