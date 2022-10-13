/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
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
    container: {
      center: true,
      screens: {
        DEFAULT: "730px",
        tab: "573px",
        mob: "327px",
      },
    },
  },
  plugins: [],
};
