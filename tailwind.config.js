module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gelap: {
          primary: "#333333",
          secondary: "#4F4F4F",
          third: "#828282",
        },
        terang: {
          primary: "#FFFFFF",
          secondary: "#F2F2F2",
          third: "#E0E0E0",
        },
      },
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
