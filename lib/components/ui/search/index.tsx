import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';

import { AiOutlineLoading3Quarters, AiOutlineSearch } from 'react-icons/ai';

const Search: React.FC = () => {
	const router = useRouter();
	const { register, handleSubmit } = useForm();

	const onSubmit = handleSubmit((data) => {
		if (data.search) {
			router.push({ pathname: '/search', query: { name_contains: data.search } });
		}
	});
	const [isVisible, setIsVisible] = useState(false);

	const toggleIsVisible = () => {
		setIsVisible((isVisible) => !isVisible);
	};
	return (
		<form
			onSubmit={onSubmit}
			className={`relative flex items-center rounded-full h-full  ${
				isVisible ? 'bg-white border-2 border-white' : 'bg-inherit'
			}`}
			noValidate
		>
			<input
				className={`outline-0 border-0 bg-white rounded-full text-lg py-1.5 px-3 transition origin-top-right caret-black ${
					isVisible ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'
				}`}
				placeholder="Ricerca"
				type="search"
				{...register('search', { required: true })}
			/>

			<button
				type="submit"
				onClick={toggleIsVisible}
				className={`absolute right-0 p-1 bg-white rounded-full ${
					isVisible ? 'border-0' : 'border-2 border-white'
				}`}
			>
				<AiOutlineSearch aria-label="submit ricerca" className="text-brand-300 h-8 w-8" />
			</button>
		</form>
	);
};

export { Search };
