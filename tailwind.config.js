/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{astro,html,js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        light: "#faf0e6",
        dark: "#111827",
        accentLight: "#f97316",
        accentDark: "#1e3a8a"
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
  darkMode: "class",
}