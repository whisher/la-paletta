import React from 'react';
import { AiOutlineCar, AiOutlineCreditCard, AiOutlineCustomerService } from 'react-icons/ai';

import { HomeInfoBox } from './box';
export interface HomeInfoProps {
	inView: boolean;
}

const HomeInfo: React.FC<HomeInfoProps> = ({ inView }) => {
	console.log('inView', inView);
	return (
		<div className="grid grid-cols-3 place-items-center gap-x-20">
			<div className={`transition duration-1000 delay-2000 ${inView ? 'scale-100' : 'scale-0'}`}>
				<HomeInfoBox header="Spedizione Gratuita" subheader="su ordini superiori a €199">
					<AiOutlineCar className="text-brand-400 h-16 w-16" />
				</HomeInfoBox>
			</div>
			<div className={`transition duration-1000 delay-2000 ${inView ? 'scale-100' : 'scale-0'}`}>
				<HomeInfoBox
					header="Pagamenti Sicuri"
					subheader="Accettiamo carte di credito, di debito e bonifico bancario."
				>
					<AiOutlineCreditCard className="text-brand-400 h-16 w-16" />
				</HomeInfoBox>
			</div>
			<div className={`transition duration-1000 delay-2000 ${inView ? 'scale-100' : 'scale-0'}`}>
				<HomeInfoBox
					header="Servizio Clienti"
					subheader="Per qualsiasi richiesta non esitare a contattarci. Servizio clienti rapido ed efficiente."
				>
					<AiOutlineCustomerService className="text-brand-400 h-16 w-16" />
				</HomeInfoBox>
			</div>
		</div>
	);
};

export { HomeInfo };
