import React from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

export interface CounterProps {
	cid: string;
	value: number;
	size: 'lg' | 'sm';
	handlerMinus: (cid: string) => void;
	handlerPlus: (cid: string) => void;
}

const Counter: React.FC<CounterProps> = ({ cid, value, size, handlerMinus, handlerPlus }) => {
	const py = size === 'lg' ? 'py-2' : 'py-1';
	const px = size === 'lg' ? 'px-4' : 'px-2';
	const wh = size === 'lg' ? 'w-6 h-6' : 'w-4 h-4';
	const font = size === 'lg' ? 'text-xl' : 'text-base';
	const bl = size === 'lg' ? 'rounded-l-none' : '';
	return (
		<div
			className={`flex justify-between items-center border rounded-lg ${bl}  border-gray-300`}
			aria-label="minus"
		>
			<button className={`${py} ${px} bg-white border-0`} onClick={() => handlerMinus(cid)}>
				<AiOutlineMinus className={`text-gray-400 ${wh}`} />
			</button>
			<span
				className={`flex-1 ${py} text-center ${font} font-bold text-gray-400 bg-white border-x border-gray-300`}
			>
				{value}
			</span>
			<button
				className={`${py} ${px} bg-white border-0 rounded-lg`}
				onClick={() => handlerPlus(cid)}
				aria-label="plus"
			>
				<AiOutlinePlus className={`text-gray-400 ${wh}`} />
			</button>
		</div>
	);
};

export { Counter };
