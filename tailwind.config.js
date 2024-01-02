const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "300px",
    },
    boxShadow:{
       sm:"0px -1px 5.3px 0px #00000024"
    }
  },
  plugins: [],
});
