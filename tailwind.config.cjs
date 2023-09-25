/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{vue,js,ts}"],
  theme: {
    extend: {
      colors: {
        primary: {
          default: "#633CFF",
          hover: "#BEADFF",
          light: "#EFEBFF",
        },
        grey: {
          default: "#737373",
          hover: "#D9D9D9",
          light: "#FAFAFA",
          dark: "#333333",
        },
        danger: {
          default: "#FF3939",
        },
        skeleton: "#EEEEEE",
      },
      boxShadow: {
        input: "0px 0px 32px 0px rgba(99, 60, 255, 0.25)",
      },
      fontFamily: {
        sans: ["InstrumentSans", "sans-serif"],
        serif: ["InstrumentSans", "serif"],
      },
    },
  },
  plugins: [],
};
