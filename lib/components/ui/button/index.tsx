import React, { ReactNode } from 'react';

export interface ButtonProps {
	children: ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
	return (
		<button
			className="inline-flex after:content-[''] after:absolute after:left-0 after:top-0 after:w-full after:h-full after:scale-x-0 hover:after:scale-x-100  after:bg-gradient-to-r after:from-black/20 after:to-white/40 relative after:origin-left after:rounded-lg after:transition after:duration-300 bg-gradient-to-l hover:bg-gradient-to-r from-brand-400 to-brand-300 px-5 py-2.5 rounded-lg text-white text-sm uppercase"
			{...props}
		>
			{children}
		</button>
	);
};

export { Button };
