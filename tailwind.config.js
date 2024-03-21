const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'], // update this with the path to your files
  theme: {
    extend: {
      colors: {
        ...colors, // include Tailwind's default colors
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      fontFamily: {
        sans: ['Graphik', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
        mono: ['Menlo', 'monospace'],
      },
    },
  },
}