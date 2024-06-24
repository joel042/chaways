/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html"],
  theme: {
    extend: {
      primary: "#ff6363",
      secondary: {
        100: "#e2e2d5",
        200: "#88883",
      }
    },
  },
  plugins: [],
};

