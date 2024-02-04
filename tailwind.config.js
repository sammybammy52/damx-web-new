/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#8D2726',
        'secondary': '#268D3B',
        'tetiary': '#FCFF53',
        'sorta-green': '#000F19',
        'sorta-blue': '#113C59'
        
      },
    },
  },
  plugins: [],
}