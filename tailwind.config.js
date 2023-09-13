/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#5e5e5e",
        container: "#f8f8f8",
        background: "#ededed",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        analogue: ["Analogue", "sans"],
        creattion: ["Creattion", "sans-serif"],
      },
    },
  },
  plugins: [],
};
