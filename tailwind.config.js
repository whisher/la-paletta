/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	content: ['./pages/**/*.{js,ts,jsx,tsx}', './lib/components/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			boxShadow: {
				sm: '0px 0px 1px rgba(102, 102, 102, 0.5)'
			},
			borderRadius: {
				xl: '9px',
				lg: '8px'
			},
			colors: {
				black: '#1a1c20',
				brand: {
					100: '#fcf1f1',
					200: '#ffd5cd',
					300: '#9AE66E', // green
					400: '#ff884f', // orange
					500: '#00c2ff', // blue
					600: 'var(--la-paletta-default)'
				},
				gray: {
					300: '#cbd5e1',
					400: '#94a3b8'
				}
			},
			fontFamily: {
				sans: ['Mulish', ...defaultTheme.fontFamily.sans]
			}
		}
	},
	plugins: [
		require('@tailwindcss/forms')({
			strategy: 'class'
		}),
		require('@tailwindcss/typography')
	]
};
