import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        playfair: ['Playfair Display', 'serif'],
        dm: ['DM Sans', 'sans-serif'],
        cormorant: ['Cormorant Garamond', 'serif'],
      },
      colors: {
        navy: {
          DEFAULT: '#1a2d4a',
          light: '#2c5f8a',
        },
        sky: {
          brand: '#5ba4cf',
          light: '#aac4e0',
        },
        cream: '#f7f3ef',
        mist: '#edf3f8',
      },
      animation: {
        'float-orb': 'floatOrb 8s ease-in-out infinite',
        'bottle-float': 'bottleFloat 6s ease-in-out infinite',
        'scroll-bounce': 'scrollBounce 2s ease-in-out infinite',
        'hero-fade': 'heroFadeIn 1s ease forwards',
      },
      keyframes: {
        floatOrb: {
          '0%, 100%': { transform: 'translateY(0px) scale(1)' },
          '50%': { transform: 'translateY(-20px) scale(1.05)' },
        },
        bottleFloat: {
          '0%, 100%': { transform: 'translateY(-50%) translateX(0)' },
          '50%': { transform: 'translateY(-53%) translateX(-8px)' },
        },
        scrollBounce: {
          '0%, 100%': { transform: 'translateX(-50%) translateY(0)' },
          '50%': { transform: 'translateX(-50%) translateY(6px)' },
        },
        heroFadeIn: {
          from: { opacity: '0', transform: 'translateY(40px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
