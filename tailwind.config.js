/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#371c84",
        secondary: "#8b1f80",
        "blue": "#4c45fc",
        "sky": "#3CD4F5",
        "gray": "#6A6A6A",
        "green": "#75DE73"
      },
    },
    screens: {
      "xs": "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    fontFamily: {
      inter: ["Inter", ...defaultTheme.fontFamily.sans],
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "16px",
        sm: "16px",
        lg: "12px",
        xl: "12px",
        "2xl": "12px",
      },
      screens: {
        "2xl": "1280px"
      }
    },
  },
  plugins: [],
}