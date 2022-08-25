import React from 'react';

import { GetDoneOrderProductQuery } from '@/graphcms/generated/graphql';

export interface StripeSuccessCustomerProps {
	data: NonNullable<GetDoneOrderProductQuery['orders']['0']['customer']>;
}

const StripeSuccessCustomer: React.FC<StripeSuccessCustomerProps> = ({ data }) => {
	const { address, city, district, pcode, firstname, lastname } = data;
	const fullname = `${firstname} ${lastname}`;
	const place = `${pcode} ${district} ${city}`;
	return (
		<>
			<h2 className="mb-3 uppercase font-bold text-black/70">Destinatario:</h2>
			<div className="shadow-sm rounded-t-md">
				<ul className="flex flex-col gap-y-3 px-6 py-10">
					<li>
						<span className="uppercase font-bold text-black/70">{fullname}</span>
					</li>
					<li>
						<span className="uppercase font-bold text-black/70">{address}</span>
					</li>
					<li>
						<span className="uppercase font-bold text-black/70">{place}</span>
					</li>
				</ul>
			</div>
		</>
	);
};

export { StripeSuccessCustomer };
