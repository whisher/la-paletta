import React, { ReactNode } from 'react';

export interface FooterHeaderProps {
	children: ReactNode;
}

const FooterHeader: React.FC<FooterHeaderProps> = ({ children }) => {
	return (
		<div className="before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-full before:h-0.5 before:bg-white relative w-full rounded-lg text-center bg-black text-sm uppercase">
			<span className="px-6 relative bg-black text-white">{children}</span>
		</div>
	);
};

export { FooterHeader };
