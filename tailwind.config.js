/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-green': '#38a847',
        'dark-green': '#38a847',
        'deep-bg': '#0d1710',
        'field-green': '#162318',
        'card-bg': '#1a2e1f',
        'cream': '#e8c59e',
        'wood': '#c4894f',
        // Legacy aliases kept for any leftover usage
        'kelly-green': '#38a847',
        'matte-black': '#0a100b',
        'charcoal': '#0d1710',
      },
      fontFamily: {
        heading: ['Oswald', 'sans-serif'],
        script: ['Satisfy', 'cursive'],
        body: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'glow-green': '0 0 20px 3px rgba(56, 168, 71, 0.45)',
        'glow-green-lg': '0 0 35px 8px rgba(56, 168, 71, 0.6)',
        'neon-green': '0 0 15px 2px rgba(56, 168, 71, 0.5)',
        'neon-green-glow': '0 0 25px 5px rgba(56, 168, 71, 0.7)',
      }
    },
  },
  plugins: [],
}
