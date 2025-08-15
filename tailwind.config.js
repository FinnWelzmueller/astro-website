/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{astro,html,js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        light: "#FAF7F2",
        dark: "#111827",
        accentLight: "#679436",
        accentDark: "#1e3a8a",
        tagLight: "#679436",
        tagDark: "#6b7280",
        buttonLight: "#A5BE00",
        buttonDark: "#1e3a8a",
        cakeChartBackLight: "#FFF9F5",
        cakeChartAccentLight: "#F5EDE6",
        cakeChartFieldsLight: "#F9F6F2"
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
  darkMode: "class",
}