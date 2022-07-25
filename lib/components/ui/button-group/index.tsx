import React, { useState } from 'react';
import classNames from 'classNames';
export interface ButtonGroupProps {
	current: number;
	handleClick: (num: number) => void;
	labels: string[];
}
// py-2 px-4 text-sm font-medium  bg-white rounded-l-lg border border-gray-200
const ButtonGroup: React.FC<ButtonGroupProps> = ({ current, labels, handleClick }) => {
	const [active, setActive] = useState<number>(current);
	const handler = (num: number) => {
		setActive(num);
		handleClick(num);
	};
	return (
		<ul className="inline-flex" role="group">
			{labels.map((label, i, { length }) => {
				return (
					<li key={i}>
						<button
							onClick={() => handler(i)}
							type="button"
							className={classNames('py-2 px-4 text-gray-400 bg-white border-gray-300', {
								'border-l border-y rounded-l-lg': i === 0,
								'border-r': length < 3,
								'border-r border-y rounded-r-lg': i + 1 === length,
								border: !(i === 0) && !(i + 1 === length),
								'text-gray-800': active === i
							})}
						>
							{label}
						</button>
					</li>
				);
			})}
		</ul>
	);
};

export { ButtonGroup };
