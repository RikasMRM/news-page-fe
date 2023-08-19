/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}", "./!(build|dist|.*)/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "primary": "#23A45A",
        "primary-dark": "#272727",
        "gray": "#767676",
        "secondary": "#F38D2E"
        // "primary-light-default": "#fff",
        // gray: "#101010",
        // "primary-dark-default": "#272727",
        // peachpuff: "#ffd6af",
        // black: "#000",
        // secondary: "#f38d2e",
        // "primary-primary": "#23a45a",
        // "primary-light-divider": "#e1e1e0",
        // "text-gray": "#767676",
        // snow: "#fffcf8",
        // "primary-dark-hover": "#373737",
      },
      fontFamily: {
        inter: "Inter",
        "markazi": "'Markazi Text'",
        "dm-sans": "'DM Sans'",
        montserrat: "Montserrat",
      },
    },
    // fontSize: {
    //   sm: "14px",
    //   base: "16px",
    //   xs: "12px",
    //   "25xl": "44px",
    //   mini: "15px",
    //   mid: "17px",
    //   "3xl": "22px",
    //   "5xl": "24px",
    //   "9xl": "28px",
    //   "17xl": "36px",
    //   "29xl": "48px",
    // },
  },
  corePlugins: {
    preflight: false,
  },
  plugins: [
    require('tailwind-scrollbar-hide')
    // ...
  ]
};
