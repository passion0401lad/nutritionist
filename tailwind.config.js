module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      flex: {
        '1': '1 0 0'
      }
    },
    screens: {
      'sm': '660px',
      // => @media (min-width: 390px) { ... }

      'md': '1440px',
      // => @media (min-width: 1440px) { ... }

      'lg': '1920px',
      // => @media (min-width: 1920px) { ... }

      'xl': '960px',
      // => @media (min-width: 1280px) { ... }

      // '2xl': '1536px',
      // // => @media (min-width: 1536px) { ... }
    },
    fontFamily: {
      'Urbanist': ['Urbanist']
    }
  },
  plugins: [],
};
