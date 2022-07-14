import { useInView } from 'react-intersection-observer';
import { Brand } from '../brand';
import { Nav } from '../nav';
import { MarketSearch } from '@/components/market/search';
import { Sidebar } from '@/components/market/cart';
const Header = () => {
	const { ref, inView } = useInView({
		/* Optional options */
		threshold: 0.1
	});
	return (
		<>
			<header
				ref={ref}
				className="flex justify-between items-center h-[70px] bg-cover bg-[url('/images/header-bck.png')] bg-no-repeat bg-right-top"
			>
				<Brand />
				<div>
					<MarketSearch />
				</div>
				<div>
					<Sidebar />
				</div>
			</header>
			<Nav isHeaderVisible={inView} />
		</>
	);
};

export { Header };
