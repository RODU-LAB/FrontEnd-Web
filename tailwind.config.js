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
        "super-light-grey": "#f8f9fd",
      },
      fontSize: {
        body2: "14px",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        fadeInUp: "fadeInUp 1s ease-out forwards",
      },
    },
    screens: {
      mobile: "490px",
      tablet: "640px",
      laptop: "1024px",
      desktop: "1280px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      "2xl": "1536px",

      "lg-home": "1090px",
      "md-home": "960px",

      "max-tablet": { max: "640px" },
      "max-lg-home": { max: "1089px" },
      "max-md-home": { max: "959px" },
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
