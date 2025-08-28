
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				// Minecraft neon colors
				neon: {
					blue: 'hsl(var(--neon-blue))',
					green: 'hsl(var(--neon-green))',
					purple: 'hsl(var(--neon-purple))',
					gold: 'hsl(var(--neon-gold))',
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			fontFamily: {
				pixel: ['Orbitron', 'monospace'],
				mono: ['JetBrains Mono', 'monospace'],
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'cube-spin': {
					'0%': { transform: 'rotateX(0deg) rotateY(0deg)' },
					'100%': { transform: 'rotateX(360deg) rotateY(360deg)' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
					'50%': { transform: 'translateY(-20px) rotate(180deg)' }
				},
				'glow': {
					'0%, 100%': { boxShadow: '0 0 20px hsl(var(--neon-blue) / 0.5)' },
					'50%': { boxShadow: '0 0 40px hsl(var(--neon-blue) / 0.8)' }
				},
				'slide-up': {
					'0%': { opacity: '0', transform: 'translateY(30px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'cube-spin': 'cube-spin 20s linear infinite',
				'cube-3d-spin': 'cube-3d-spin 20s linear infinite',
				'cube-master-spin': 'cube-master-spin 25s linear infinite',
				'cube-hologram': 'cube-hologram 15s linear infinite reverse',
				'cube-float': 'cube-float 8s ease-in-out infinite',
				'spin-slow': 'spin-slow 8s linear infinite',
				'spin-reverse': 'spin-reverse 12s linear infinite',
				'float': 'float 6s ease-in-out infinite',
				'glow': 'glow 2s ease-in-out infinite alternate',
				'slide-up': 'slide-up 0.6s ease-out forwards'
			},
			boxShadow: {
				'neon-blue': '0 0 20px hsl(var(--neon-blue) / 0.5)',
				'neon-green': '0 0 20px hsl(var(--neon-green) / 0.5)',
				'neon-purple': '0 0 20px hsl(var(--neon-purple) / 0.5)',
			},
			backgroundImage: {
				'cube-gradient': 'linear-gradient(135deg, hsl(var(--neon-blue)), hsl(var(--neon-purple)))',
				'hero-gradient': 'linear-gradient(180deg, hsl(220 25% 8%) 0%, hsl(220 35% 12%) 100%)',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
