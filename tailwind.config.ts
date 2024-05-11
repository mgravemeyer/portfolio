/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		'./src/**/**/*.{html,js,svelte,ts}'
	],
	theme: {
		fontFamily: {
			quickBold: ['Quicksand Bold'],
			quickLight: ['Quicksand Light'],
			quickMedium: ['Quicksand Medium'],
			quickRegular: ['Quicksand Regular'],
			quickSemi: ['Quicksand Semi Bold'],
		},
		extend: {},
	},
	plugins: []
};
