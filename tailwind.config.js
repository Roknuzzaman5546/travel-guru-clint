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
        'custom-red': '-2px 9px 20px 0 rgba(0, 0, 0, 0.2)',
      },
    },
  },
  plugins: [require("daisyui")],
}

