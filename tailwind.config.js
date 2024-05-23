/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom-blue': '0 0 10px rgba(31, 66, 135, .3)',
      },
    },
  },
  plugins: [require("daisyui")],
}

