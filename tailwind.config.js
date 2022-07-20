/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	content: ['./pages/**/*.{js,ts,jsx,tsx}', './lib/components/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				black: '#1a1c20',
				brand: {
					100: '#fcf1f1',
					200: '#ffd5cd',
					300: '#9AE66E', // green
					400: '#ff884f', // orange
					500: '#00c2ff' // blue
				},
				gray: {
					300: '#cbd5e1',
					400: '#94a3b8'
				}
			},
			fontFamily: {
				sans: ['Space Grotesk', ...defaultTheme.fontFamily.sans]
			}
		}
	},
	plugins: []
};
