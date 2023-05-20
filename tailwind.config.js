/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "primary-font": ["Noto Sans", "sans-serif"],
        "secondary-font": ["Montserrat", "sans-serif"],
      },
      colors: {
        accent: "#3DB46D",
        neutral: "#EB5757",
      },
    },
  },
  plugins: [],
};
