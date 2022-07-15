import React from 'react';
import { useInView } from 'react-intersection-observer';

import { Brand } from '../brand';
import { Menu } from '../menu';
import { Nav } from '../nav';
import { Search } from '../search';
import { Sidebar } from '../cart';

const Header: React.FC = () => {
	// bg-cover bg-[url('/images/header-bck.png')] bg-no-repeat bg-right-top
	const { ref, inView } = useInView({
		/* Optional options */
		threshold: 0.1
	});
	return (
		<>
			<header ref={ref} className="bg-brand-300">
				<div className="container mx-auto flex justify-between items-center h-[70px]">
					<Brand />
					<div className="flex-1 flex justify-center items-center">
						<Menu />
					</div>
					<div className="flex justify-between items-center">
						<Search />
						<Sidebar />
					</div>
				</div>
			</header>
			<Nav isHeaderVisible={inView} />
		</>
	);
};

export { Header };
