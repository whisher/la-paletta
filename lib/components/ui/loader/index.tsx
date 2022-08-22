import React from 'react';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

export interface LoaderProps {}

const Loader: React.FC<LoaderProps> = () => {
	return (
		<div className="flex justify-center items-center">
			<AiOutlineLoading3Quarters
				aria-label="Loading...."
				className="animate-spin text-brand-300 h-20 w-20"
			/>
		</div>
	);
};

export { Loader };
