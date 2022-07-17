import { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

const Search = () => {
	const [isVisible, setIsVisible] = useState(false);
	const toggleIsVisible = () => {
		setIsVisible((isVisible) => !isVisible);
	};
	return (
		<form
			className={`flex justify-start items-center p-0.5 rounded-full  ${
				isVisible ? 'bg-white border-2 border-white rounded-full' : 'border-2 border-transparent '
			}`}
		>
			<input
				type="text"
				className={`h-8 transition ease-out origin-right flex flex-1 appearance-none border-0 rounded-l-full w-full py-2 px-4 bg-white  focus:outline-none focus:ring-1 focus:ring-gray-100 focus:border-transparent ${
					isVisible ? 'scale-x-100 visible' : 'scale-x-0 invisible'
				}`}
				name="search"
				placeholder="Ricerca"
				aria-label="ricerca"
			/>
			<button
				type="button"
				onClick={toggleIsVisible}
				className={`bg-brand-300 flex justify-center items-center h-10 w-10 rounded-full  ${
					isVisible ? 'border-2 border-transparent' : 'border-2 border-white'
				}`}
			>
				<AiOutlineSearch aria-label="submit ricerca" className="text-white w-8 h-8" />
			</button>
		</form>
	);
};

export { Search };
