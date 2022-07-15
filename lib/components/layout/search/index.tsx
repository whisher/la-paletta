import { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

const Search = () => {
	const [isVisible, setIsVisible] = useState(false);
	const toggleIsVisible = () => {
		setIsVisible((isVisible) => !isVisible);
	};
	return (
		<form
			className={`overflow-hidden flex justify-start items-center p-0.5 rounded-full  mix-blend-lighten  ${
				isVisible ? 'border-2 border-white rounded-full' : 'border-2 border-transparent '
			}`}
		>
			<input
				type="text"
				className={`h-8 transition ease-out origin-right flex flex-1 appearance-none border-0 rounded-l-full w-full py-2 px-4 bg-white  focus:outline-none focus:ring-1 focus:ring-gray-100 focus:border-transparent ${
					isVisible ? 'scale-x-100 scale-y-100' : 'scale-x-0'
				}`}
				name="search"
				placeholder="Ricerca"
			/>
			<button
				type="button"
				onClick={toggleIsVisible}
				className={`flex justify-center items-center h-10 w-10 rounded-full ${
					isVisible ? 'border-2 border-transparent' : 'border-2 border-white'
				}`}
			>
				<AiOutlineSearch className="text-white w-8 h-8" />
			</button>
		</form>
	);
};

export { Search };
