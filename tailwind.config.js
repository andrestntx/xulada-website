module.exports = {
  purge: [],
  theme: {
    extend: {
      fontSize: {
        "1.8xl": "1.4em",
        "2.5xl": "1.75rem",
        "3.5xl": "2.1rem",
        "4.5xl": "2.5rem",
        "7xl": "5rem",
        "8xl": "5.4rem",
      },
      opacity: {
        "90": "0.9",
        "95": "0.95",
      },
      colors: {
        xulada: {
          "red-intense": "#ed2f59",
          "blue-covid": "#37516c",
          black: "#000000",
          gray: "#f6f6f6",
          violete: "#a2358f",
          "violete-intese": "#550046",
          purple: "#a43692",
          "purple-dark": "#703466",
          terracota: "#ed2f59",
        },
      },
      borderWidth: {
        "3": "3px",
      },
      height: {
        "26": "7rem",
      },
      backgroundImage: () => ({
        "covid-family": "url('/assets/couch_family_area.png')",
      }),
    },
  },
  variants: {},
  plugins: [],
};
