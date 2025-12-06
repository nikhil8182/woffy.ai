/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          red: '#ef4444', // Adjust based on "on" red preference
          dark: '#111827',
          light: '#f3f4f6',
        }
      }
    },
  },
  plugins: [],
}

