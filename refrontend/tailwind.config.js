/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FD6F2F',
          orange: '#FD6F2F',
        },
        peach: {
          light: '#FFEAD1',
        },
        green: {
          soft: '#DCE4B8',
          dark: '#515739',
          deep: '#2F3E2E',
        },
        beige: {
          sand: '#E6D5C3',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
