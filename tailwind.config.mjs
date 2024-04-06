/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
		fontFamily: {
			sans: ['ProductSans', 'ui-sans-serif', 'system-ui'],
			// Optionally, add other font families here
		},
	},
	plugins: [],
}