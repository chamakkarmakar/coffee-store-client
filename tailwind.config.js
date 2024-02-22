/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'coffee1': '#0E0504',
      'coffee2': '#4B1F0E',
      'coffee3': '#794028',
      'coffee4': '#BE7656',
      'coffee5': '#EFC3A4',
      "white": '#ffffff'
    }
  },
  plugins: [],
}