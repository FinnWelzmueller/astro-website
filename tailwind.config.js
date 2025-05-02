/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        light: "#faf0e6",
        dark: "#111827",
      }
    },
  },
  plugins: [],
  darkMode: "class",
}