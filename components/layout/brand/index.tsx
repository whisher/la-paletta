import Image from 'next/image';
import Link from 'next/link';

import { SITE_TITLE } from '../../../costants';

const Brand = () => {
	return (
		<h1>
			<Link href="/">
				<a>
					<Image src="/images/logo.png" alt={SITE_TITLE} width={70} height={70} />
				</a>
			</Link>
		</h1>
	);
};

export { Brand };
