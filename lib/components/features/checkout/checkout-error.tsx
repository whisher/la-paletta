import React, { ReactNode } from 'react';

export interface CheckoutErrorProps {
	children: ReactNode;
}

const CheckoutError: React.FC<CheckoutErrorProps> = ({ children }) => {
	return <span className="block py-0.5 text-sm text-red-500">{children}</span>;
};

export { CheckoutError };
