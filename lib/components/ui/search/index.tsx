import React, { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

const Search: React.FC = () => {
	const [isVisible, setIsVisible] = useState(false);
	const toggleIsVisible = () => {
		setIsVisible((isVisible) => !isVisible);
	};
	return (
		<form
			className={`relative flex items-center rounded-full h-full  ${
				isVisible ? 'bg-white border-2 border-white' : 'bg-inherit'
			}`}
		>
			<input
				type="text"
				className={`border-0 bg-white rounded-full outline-0 text-lg py-1.5 px-3 transition origin-top-right caret-black ${
					isVisible ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'
				}`}
				name="search"
				placeholder="Ricerca"
				aria-label="ricerca"
			/>
			<button
				type="button"
				onClick={toggleIsVisible}
				className={`absolute right-0 p-1 bg-brand-300 rounded-full ${
					isVisible ? 'border-0' : 'border-2 border-white'
				}`}
			>
				<AiOutlineSearch aria-label="submit ricerca" className="text-white h-8 w-8" />
			</button>
		</form>
	);
};

export { Search };
