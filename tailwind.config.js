/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				newblack: '#28232B',
				subtitle: '#0000008c',
			},
		},
	},
	plugins: [],
}
