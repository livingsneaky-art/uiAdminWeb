/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white1: "#fff",
        black: "#000",
        gainsboro: {
          "100": "#e5e5e5",
          "200": "#dbe5eb",
          "300": "#d8d9db",
          "400": "#d9d9d9",
        },
        midnightblue: "#2e2376",
        mediumaquamarine: {
          "100": "#16c098",
          "200": "#0bb88f",
          "300": "rgba(22, 192, 152, 0.38)",
        },
        mediumseagreen: "#00b087",
        seagreen: "#008767",
        mediumblue: "rgba(25, 55, 215, 0.38)",
        mediumslateblue: "#425ff7",
        whitesmoke: {
          "100": "#f5f5f5",
          "200": "#eee",
        },
        darkslategray: {
          "100": "#404b52",
          "200": "#3d3c42",
          "300": "#1f384c",
          "400": "#273240",
          "500": "#292d32",
        },
        blueviolet: "#5932ea",
        gray: {
          "100": "#7e7e7e",
          "200": "#131516",
          "300": "#121212",
        },
        ghostwhite: "#f9fbff",
        silver: {
          "100": "#b5b7c0",
          "200": "rgba(197, 189, 189, 0.04)",
        },
        pink: "#ffc5c5",
        red: "#df0404",
        lightgray: "#c8cbd9",
        "black-lighter": "#dde1eb",
        dodgerblue: "#0098ff",
        gold: {
          "100": "#f4ec45",
          "200": "rgba(224, 194, 37, 0.38)",
        },
        darkgoldenrod: "#c4a740",
        white: "#fcfcff",
        steelblue: "#2e86ab",
        darkblue: {
          "100": "#0b0087",
          "200": "rgba(11, 0, 135, 0.38)",
        },
        lavender: "#e2e0f9",
        "text-dark-main": "#2b2f42",
        lightsteelblue: "#c7ceff",
        royalblue: "#5a6acf",
        cornflowerblue: "#8593ed",
        skyblue: "#2fbfde",
        slateblue: "#6463d6",
        orange: "#f99c30",
        slategray: "#737b8b",
        crimson: "#f2383a",
      },
      spacing: {},
      fontFamily: {
        lato: "Lato",
        poppins: "Poppins",
        inter: "Inter",
        roboto: "Roboto",
      },
      borderRadius: {
        "3xs": "10px",
        "11xl": "30px",
        "8xs": "5px",
        "31xl": "50px",
        "195xl": "214px",
        "13xl": "32px",
      },
    },
    fontSize: {
      sm: "14px",
      "3xs": "10px",
      xl: "20px",
      xs: "12px",
      "3xl": "22px",
      "2xs": "11px",
      "5xl": "24px",
      base: "16px",
      "5xs": "8px",
      "13xl": "32px",
      smi: "13px",
      "8xs": "5px",
      "xl-8": "20.8px",
      "smi-7": "12.7px",
      "14xl-8": "33.8px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
