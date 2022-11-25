/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'Text-green': '#6BAF71',
        'Black': '#000000',
        'LightMode': '#bdfdc5',
        'cardBoderGreen': '#05540D',
        'LightGreen': '#AEE2B2',
        'BgLightGreen': '#023507',
        'BgDarkGreen': '#000B01',
        'DarkTextColor': '#6BAF71',
        'LightText': '#012F05',
        'InputBackgroundLight':'#D8F2DB',
      },
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
      }
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
  },
  plugins: [],
}
