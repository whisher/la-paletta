/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				black: '#0a0a0a',
				gray: {
					300: '#cbd5e1',
					400: '#94a3b8'
				}
			}
		}
	},
	plugins: []
};
