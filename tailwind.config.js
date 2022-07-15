/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./pages/**/*.{js,ts,jsx,tsx}', './lib/components/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				black: '#1a1c20',
				brand: {
					100: '#fcf1f1',
					200: '#ffd5cd',
					300: '#f9813a'
				},
				gray: {
					300: '#cbd5e1',
					400: '#94a3b8'
				}
			}
		}
	},
	plugins: []
};
