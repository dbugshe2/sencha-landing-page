import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./client/index.html", "./client/src/**/*.{js,jsx,ts,tsx}"],
  theme: {
  	extend: {
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			badgeIcon: 'hsl(var(--badge-icon))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))',
  				border: 'hsl(var(--card-border) / <alpha-value>)'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))',
  				border: 'hsl(var(--popover-border) / <alpha-value>)'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))',
  				border: 'var(--primary-border)'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))',
  				border: 'var(--secondary-border)'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))',
  				border: 'var(--muted-border)'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))',
  				border: 'var(--accent-border)'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))',
  				border: 'var(--destructive-border)'
  			},
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))',
  				'1': 'hsl(var(--chart-1) / <alpha-value>)',
  				'2': 'hsl(var(--chart-2) / <alpha-value>)',
  				'3': 'hsl(var(--chart-3) / <alpha-value>)',
  				'4': 'hsl(var(--chart-4) / <alpha-value>)',
  				'5': 'hsl(var(--chart-5) / <alpha-value>)'
  			},
  			sidebar: {
  				ring: 'hsl(var(--sidebar-ring) / <alpha-value>)',
  				DEFAULT: 'hsl(var(--sidebar) / <alpha-value>)',
  				foreground: 'hsl(var(--sidebar-foreground) / <alpha-value>)',
  				border: 'hsl(var(--sidebar-border) / <alpha-value>)'
  			},
  			'sidebar-primary': {
  				DEFAULT: 'hsl(var(--sidebar-primary) / <alpha-value>)',
  				foreground: 'hsl(var(--sidebar-primary-foreground) / <alpha-value>)',
  				border: 'var(--sidebar-primary-border)'
  			},
  			'sidebar-accent': {
  				DEFAULT: 'hsl(var(--sidebar-accent) / <alpha-value>)',
  				foreground: 'hsl(var(--sidebar-accent-foreground) / <alpha-value>)',
  				border: 'var(--sidebar-accent-border)'
  			},
  			'oak-green': 'hsl(142, 45%, 25%)',
  			turfGreen: {
				50: 'hsl(var(--turf-green-50))',
				100: 'hsl(var(--turf-green-100))',
				200: 'hsl(var(--turf-green-200))',
				300: 'hsl(var(--turf-green-300))',
				400: 'hsl(var(--turf-green-400))',
				500: 'hsl(var(--turf-green-500))',
				600: 'hsl(var(--turf-green-600))',
				700: 'hsl(var(--turf-green-700))',
				800: 'hsl(var(--turf-green-800))',
				900: 'hsl(var(--turf-green-900))',
				950: 'hsl(var(--turf-green-950))'
			},
			carrotOrange: {
				50: 'hsl(var(--carrot-orange-50))',
				100: 'hsl(var(--carrot-orange-100))',
				200: 'hsl(var(--carrot-orange-200))',
				300: 'hsl(var(--carrot-orange-300))',
				400: 'hsl(var(--carrot-orange-400))',
				500: 'hsl(var(--carrot-orange-500))',
				600: 'hsl(var(--carrot-orange-600))',
				700: 'hsl(var(--carrot-orange-700))',
				800: 'hsl(var(--carrot-orange-800))',
				900: 'hsl(var(--carrot-orange-900))',
				950: 'hsl(var(--carrot-orange-950))'
			},
			pearlAqua: {
				50: 'hsl(var(--pearl-aqua-50))',
				100: 'hsl(var(--pearl-aqua-100))',
				200: 'hsl(var(--pearl-aqua-200))',
				300: 'hsl(var(--pearl-aqua-300))',
				400: 'hsl(var(--pearl-aqua-400))',
				500: 'hsl(var(--pearl-aqua-500))',
				600: 'hsl(var(--pearl-aqua-600))',
				700: 'hsl(var(--pearl-aqua-700))',
				800: 'hsl(var(--pearl-aqua-800))',
				900: 'hsl(var(--pearl-aqua-900))',
				950: 'hsl(var(--pearl-aqua-950))'
			},
			darkKhaki: {
				50: 'hsl(var(--dark-khaki-50))',
				100: 'hsl(var(--dark-khaki-100))',
				200: 'hsl(var(--dark-khaki-200))',
				300: 'hsl(var(--dark-khaki-300))',
				400: 'hsl(var(--dark-khaki-400))',
				500: 'hsl(var(--dark-khaki-500))',
				600: 'hsl(var(--dark-khaki-600))',
				700: 'hsl(var(--dark-khaki-700))',
				800: 'hsl(var(--dark-khaki-800))',
				900: 'hsl(var(--dark-khaki-900))',
				950: 'hsl(var(--dark-khaki-950))'
			},
			jetBlack: {
				50: 'hsl(var(--jet-black-50))',
				100: 'hsl(var(--jet-black-100))',
				200: 'hsl(var(--jet-black-200))',
				300: 'hsl(var(--jet-black-300))',
				400: 'hsl(var(--jet-black-400))',
				500: 'hsl(var(--jet-black-500))',
				600: 'hsl(var(--jet-black-600))',
				700: 'hsl(var(--jet-black-700))',
				800: 'hsl(var(--jet-black-800))',
				900: 'hsl(var(--jet-black-900))',
				950: 'hsl(var(--jet-black-950))'
			},
  			status: {
  				online: 'rgb(34 197 94)',
  				away: 'rgb(245 158 11)',
  				busy: 'rgb(239 68 68)',
  				offline: 'rgb(156 163 175)'
  			}
  		},
  		fontFamily: {
  			sans: [
  				'var(--font-sans)'
  			],
  			serif: [
  				'var(--font-serif)'
  			],
  			mono: [
  				'var(--font-mono)'
  			],
  			display: [
  				'var(--font-display)'
  			],
  			body: [
  				'var(--font-body)'
  			]
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
} satisfies Config;
