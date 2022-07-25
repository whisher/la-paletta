import React from 'react';
import Link from 'next/link';

import { SITE_TITLE } from '../../../costants';

const Brand: React.FC = () => {
	return (
		<h1>
			<Link href="/">
				<a className="block">
					<figure role="group">
						<img src="/images/logo.webp" alt={SITE_TITLE} width="60" height="60" />
					</figure>
				</a>
			</Link>
		</h1>
	);
};

export { Brand };
