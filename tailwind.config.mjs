/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			screens: {
				'max-sm': { 'max': '780px' }, // For screens up to 640px wide
			},
		},
	},
	plugins: [],
}
