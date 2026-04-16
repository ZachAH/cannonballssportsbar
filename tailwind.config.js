/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'kelly-green': '#00A300',
        'matte-black': '#0a0a0a',
        'charcoal': '#121212',
      },
      fontFamily: {
        heading: ['Oswald', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'neon-green': '0 0 15px 2px rgba(0, 163, 0, 0.5)',
        'neon-green-glow': '0 0 25px 5px rgba(0, 163, 0, 0.7)',
      }
    },
  },
  plugins: [],
}
