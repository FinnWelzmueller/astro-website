/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{astro,html,js,jsx,ts,tsx}"],
    theme: {
      extend: {
        colors: {
          light: "#f5f5f5",
          dark: "#0a0a0a",
        },
      },
    },
    plugins: [],
    darkMode: "class",
  }
  