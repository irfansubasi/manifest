/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      transitionDuration: {
        9000: '9000ms',
      },
      fontFamily: {
        'IvyMode-Regular': ['IvyMode-Regular', 'sans-serif'],
        'IvyMode-SemiBold': ['IvyMode-SemiBold', 'sans-serif'],
        'IvyMode-Bold': ['IvyMode-Bold', 'sans-serif'],
      },
    },
  },
  important: true,
  plugins: [],
};
