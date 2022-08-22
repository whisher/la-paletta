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
					300: 'var(--la-paletta-primary)', // green
					400: 'var(--la-paletta-secondary)', // orange
					500: '#00c2ff' // blue
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
