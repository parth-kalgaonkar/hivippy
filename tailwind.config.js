/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./index.html',
		'./src/**/*.{vue,js}'
	],
	theme: {
		extend: {
			spacing: {
				'1/12': '8.3333333%',
				'1/6': '16.6666667%',
				'1/3': '33.3333333%',
				'5/12': '41.6666664%',
				'5/6': '83.3333333%'
			},
		},
	},
}

