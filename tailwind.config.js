/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: { animation: {
      'bounce-slow': 'bounce 3s linear infinite',
    }},
  },
  plugins: [],
}

