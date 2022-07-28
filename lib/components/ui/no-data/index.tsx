import React from 'react';

export interface NoDataProps {
	feature: string;
}

const NoData: React.FC<NoDataProps> = ({ feature }) => {
	return (
		<div className="relative flex justify-center items-center px-6 py-2.5 h-20 p bg-white rounded-lg">
			<p className=" text-gray-400">There are not {feature} yet</p>
		</div>
	);
};

export { NoData };
