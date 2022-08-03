import React from 'react';
import { AiOutlineFrown } from 'react-icons/ai';

export interface CartNoDataProps {
	toggle: () => void;
}
const CartNoData: React.FC<CartNoDataProps> = ({ toggle }) => {
	return (
		<div className="flex flex-col items-start gap-2.5">
			<div className="flex items-center">
				<AiOutlineFrown className="text-brand-300 w-8 h-8" />
				<p className="flex-1 pl-2">Il tuo carrello è vuoto.</p>
			</div>

			<button onClick={toggle} type="button" className="bg-white text-gray-400 font-bold">
				Torna al negozio.
			</button>
		</div>
	);
};

export { CartNoData };
