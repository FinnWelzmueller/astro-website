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
        accentLight: "#679436",
        accentDark: "#1e3a8a",
        tagLight: "#679436",
        tagDark: "#6b7280",
        buttonLight: "#A5BE00",
        buttonDark: "#1e3a8a",
        cakeChartBackLight: "#FFE2D1",
        cakeChartAccentLight: "#A5BE00",
        cakeChartFieldsLight: "#468C98"
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
  darkMode: "class",
}