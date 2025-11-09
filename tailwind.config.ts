import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f3f6f8',
          100: '#e6ecf0',
          200: '#ccd9e1',
          300: '#a8bfce',
          400: '#7a9cb4',
          500: '#5a7c98',
          600: '#456380',
          700: '#385069',
          800: '#2d4255',
          900: '#102533', // Dark navy - main brand color
          DEFAULT: '#102533',
        },
        secondary: {
          50: '#fef9f3',
          100: '#fdf3e7',
          200: '#fbe7cf',
          300: '#f8d8b0',
          400: '#f3c388',
          500: '#dcb172', // Gold - main brand accent
          600: '#c59a5d',
          700: '#a8804a',
          800: '#8a6939',
          900: '#6f5429',
          DEFAULT: '#dcb172',
        },
        brand: {
          navy: '#102533',
          gold: '#dcb172',
          white: '#ffffff',
        },
      },
    },
  },
  plugins: [],
};

export default config;
