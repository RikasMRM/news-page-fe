/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}", "./!(build|dist|.*)/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "primary": {
          DEFAULT: "#23A45A",
          50: '#96E9B9',
          100: '#85E5AE',
          200: '#64DE98',
          300: '#42D781',
          400: '#2AC66C',
          500: '#23A45A',
          600: '#197641',
          700: '#0F4827',
          800: '#05190E',
          dark: '#272727'
        },

        "gray": {
          DEFAULT: "#767676",
          light: "#E1E1E0",
          dark: "#cbcbcb"
        },
        "secondary": {
          DEFAULT: "#F38D2E",
          50: '#FFFCF8',
          100: '#FCE1C8',
          200: '#FACCA2',
          300: '#F7B77B',
          400: '#F5A255',
          500: '#F38D2E',
          600: '#DC710D',
          700: '#A7560A',
          800: '#723A07',
        },
        "black": {
          DEFAULT: "#000000",
          footer: "#101010"
        }
      },
      fontFamily: {
        inter: "Inter",
        "markazi": "'Markazi Text'",
        "dm-sans": "'DM Sans'",
        montserrat: "Montserrat",
      },
      fontSize: {
        "2xs": "0.5rem"
      },
      borderRadius: {
        3: '3px',
        4: '4px',
        5: "5px"
      }
    },
  },
  corePlugins: {
    preflight: true,
  },
  plugins: [
    require('tailwind-scrollbar-hide')
    // ...
  ]
};
