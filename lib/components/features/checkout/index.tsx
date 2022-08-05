import React from 'react';

import { CheckoutForm } from './checkout-form';

const Checkout: React.FC = () => {
	return (
		<div className="flex gap-10 mt-3">
			<div className="w-8/12">
				<CheckoutForm />
			</div>
			<div className="w-4/12 bg-red-400">
				<h1>Pippo</h1>
			</div>
		</div>
	);
};

export { Checkout };
