const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#03a9f4",
        dark: "#111827",
        light: "#fafafa"

      },
    },

  },
  plugins: [],
});