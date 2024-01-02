<<<<<<< HEAD
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "769px",
      lg: "1024px",
    },
    extend: {},
  },
  plugins: [],
}
=======
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "300px",
    },
    boxShadow: {
      sm: "0px -1px 5.3px 0px #00000024",
    },
  },
  plugins: [],
});
>>>>>>> main
