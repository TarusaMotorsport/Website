/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'tarusa-green': '#0F5F4B',
        'sponsor-yellow': '#F5FB52',
        'site-bg': '#F0F5F5',
      },
      fontFamily: {
        'gilroy-thin': ['Gilroy-Thin', 'sans-serif'],
        'gilroy-light': ['Gilroy-Light', 'sans-serif'],
        'gilroy-regular': ['Gilroy-Regular', 'sans-serif'],
        'gilroy-medium': ['Gilroy-Medium', 'sans-serif'],
        'gilroy-semibold': ['Gilroy-SemiBold', 'sans-serif'],
        'gilroy-bold': ['Gilroy-Bold', 'sans-serif'],
        'gilroy-black': ['Gilroy-Black', 'sans-serif'],
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.45, 0, 0.55, 1)',
      },
      keyframes: {
        'race-car': {
          '0%': { transform: 'translateX(-100%) translateY(-50%)' },
          '100%': { transform: 'translateX(calc(100vw + 100%)) translateY(-50%)' }
        }
      },
      animation: {
        'race-car': 'race-car 3s cubic-bezier(0.4, 0, 0.2, 1) forwards'
      }
    },
  },
  plugins: [],
} 