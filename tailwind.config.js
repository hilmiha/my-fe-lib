/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: [
		"./src/**/*.{js,jsx,ts,tsx}",
	],
	theme: {
		extend: {
			colors:{
				base:{
					'background-top':'#FFFFFF',
					'background-mid':'#F8FAFC',
					'white':'#FFFFFF',
					'black':'#000000'

				},
				baseDark:{
					'background-top':'#050F21',
					'background-mid':'#101828',
					'white':'#FFFFFF',
					'black':'#000000'

				},
				primary:{
					100:'#F3F1FF',
					200:'#DDD6FE',
					300:'#C3B5FD',
					400:'#A48AFB',
					500:'#875BF7',
					600:'#7839EE',
					700:'#6927DA',
					800:'#5720B7',
					900:'#330E72',
				},
				grays:{
					100:'#F8FAFC',
					200:'#EAECF0',
					300:'#D0D5DD',
					400:'#98A2B3',
					500:'#667085',
					600:'#475467',
					700:'#344054',
					800:'#1D2939',
					900:'#101828',
				},
				success:{
					100:'#E1FBEA',
					200:'#AAF0C4',
					300:'#73E2A3',
					400:'#3CCB7F',
					500:'#16B364',
					600:'#099250',
					700:'#087443',
					800:'#095C37',
					900:'#03482A',
				},
				warning:{
					100:'#FFF6DB',
					200:'#FEDF89',
					300:'#FEC84B',
					400:'#FDB022',
					500:'#F79009',
					600:'#DC6803',
					700:'#B54708',
					800:'#93370D',
					900:'#652104',
				},
				danger:{
					100:'#FFEEED',
					200:'#FECDCA',
					300:'#FDA29B',
					400:'#F97066',
					500:'#F04438',
					600:'#D92D20',
					700:'#B42318',
					800:'#912018',
					900:'#601409',
				},
				

			}
		},
	},
	plugins: [],
}
