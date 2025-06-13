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
        accentDark: "#1e3a8a",
        tagLight: "#f3f4f6",
        tagDark: "#6b7280",
        buttonLight: "#f97316",
        buttonDark: "#1e3a8a"
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
  darkMode: "class",
}