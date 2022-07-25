import React from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

export interface CounterProps {
	value: number;
}

const Counter: React.FC<CounterProps> = ({ value }) => {
	return (
		<div className="flex justify-between items-center">
			<button className="py-2 px-4 bg-white border rounded-tl-lg rounded-bl-lg border-gray-300">
				<AiOutlineMinus className="text-gray-400 w-6 h-6" />
			</button>
			<span className="flex-1 py-2 text-center text-xl font-bold text-gray-400 bg-white border-y border-gray-300">
				{value}
			</span>
			<button className="py-2 px-4 bg-white border rounded-tr-lg rounded-br-lg border-gray-300">
				<AiOutlinePlus className="text-gray-400 w-6 h-6" />
			</button>
		</div>
	);
};

export { Counter };
