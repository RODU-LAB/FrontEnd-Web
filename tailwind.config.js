const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "rodu-medium": "#f9911e",
        "rodu-black": "#212121",
        "rodu-grey": "#777777",
      },
      fontSize: {
        body2: "14px",
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar-hide"),
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        ".button": {
          fontSize: "14px",
          fontWeight: "500",
        },
        ".body1": {
          fontSize: "18px",
        },
        ".body2": {
          fontSize: "14px",
        },
      };

      addUtilities(newUtilities);
    }),
  ],
};
