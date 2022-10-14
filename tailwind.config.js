/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    screens: {
      laptop: { min: "769px" },
      tablet: { max: "768px" },
      mobile: { max: "375px" },
    },
    container: {
      center: true,
      screens: {
        DEFAULT: "730px",
      },
    },
    colors: {
      secondary: "#0079FF",
      main: "#FEFEFE",
      bgColor: "#F6F8FF",
      text: "#4B6A9B",
      title: "#2B3442",
      date: "#697C9A",
      dMain: "#1E2A47",
      dBg: "#141D2F",
      dText: "#FFFFFF",
    },
    fontSize: {
      sm: ["13px", "20px"],
      base: ["16px", "24px"],
      lg: ["22px", "33px"],
      xl: ["26px", "38px"],
    },
  },

  plugins: [],
};
