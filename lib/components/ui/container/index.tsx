import React, { ReactNode } from 'react';

export interface ContainerProps {
	children: ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
	return (
		<div className="min-h-[calc(100vh-theme(space.20))] before:content-[''] before:absolute before:w-full before:h-full  before:bg-[url('/images/home-bck.webp')] before:bg-no-repeat before:bg-center before:bg-cover before:blur-[128px] before:opacity-80 before:scale-75 flex justify-center items-center">
			{children}
		</div>
	);
};

export { Container };
