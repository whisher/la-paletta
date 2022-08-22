import React from 'react';
import { AiOutlineBgColors } from 'react-icons/ai';

export interface ThemeProps {
	toggleTheme: () => void;
}
const Theme: React.FC<ThemeProps> = ({ toggleTheme }) => {
	return (
		<button type="button" onClick={toggleTheme} className="bg-white rounded-full">
			<AiOutlineBgColors aria-label="change theme" className="text-brand-300 h-6 w-6" />
		</button>
	);
};

export { Theme };
