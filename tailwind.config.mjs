/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Brand Colors - Robin Gartenbau
        primary: {
          DEFAULT: '#6fa822',
          50: '#f4f9e8',
          100: '#e5f2cc',
          200: '#cce599',
          300: '#b3d866',
          400: '#8fc230',
          500: '#6fa822', // Original Brand Color
          600: '#5a8a1c',
          700: '#456b15',
          800: '#304d0f',
          900: '#1b2e09',
        },
        secondary: {
          DEFAULT: '#3e4444',
          50: '#f5f5f5',
          100: '#e5e6e6',
          200: '#cbcdcd',
          300: '#a8abac',
          400: '#7d8383',
          500: '#3e4444', // Original Brand Color
          600: '#363b3b',
          700: '#2d3232',
          800: '#242828',
          900: '#1a1d1d',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
