import { useState } from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
const Sidebar = () => {
	const [showSidebar, setShowSidebar] = useState(false);

	return (
		<>
			{showSidebar ? (
				<button
					className="flex text-4xl text-red-600 items-center cursor-pointer fixed right-10 top-6 z-50"
					onClick={() => setShowSidebar(!showSidebar)}
				>
					x
				</button>
			) : (
				<button
					className="flex justify-center items-center p-1 rounded-full bg-white border-2 border-white"
					onClick={() => setShowSidebar(!showSidebar)}
				>
					<AiOutlineShoppingCart className="text-brand-300 w-8 h-8" />
				</button>
			)}

			<div
				className={`top-0 right-0 w-[100vw] before:content-[''] before:absolute before:w-full before:h-full before:opacity-70 before:bg-blue-600 fixed h-full z-40 ease-in-out duration-300 flex justify-end ${
					showSidebar ? 'translate-x-0 ' : 'translate-x-full'
				}`}
			>
				<div className="w-[300px] h-full bg-white relative">
					<h3 className="mt-20 text-4xl font-semibold text-red-800">I am a sidebarrr</h3>
				</div>
			</div>
		</>
	);
};

export { Sidebar };
