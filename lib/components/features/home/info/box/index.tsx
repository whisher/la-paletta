import React, { ReactNode } from 'react';

export interface HomeInfoBoxProps {
	children: ReactNode;
	header: string;
	subheader: string;
}

const HomeInfoBox: React.FC<HomeInfoBoxProps> = ({ children, header, subheader }) => {
	return (
		<div className="flex flex-col gap-y-3 px-6">
			<div className="flex justify-center">{children}</div>
			<h3 className="text-center text-xl uppercase font-bold text-black/90">{header}</h3>
			<h4 className="text-center text-base text-black/70">{subheader}</h4>
		</div>
	);
};

export { HomeInfoBox };
