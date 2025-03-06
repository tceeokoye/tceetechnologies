const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // 'montserrat': 'Montserrat',
        poppins: ["var(--font-poppins)", ...fontFamily.sans],
      },
      screens: {
        'size1': '690px',
        'size2': '1200px',
        'size4': '1300px',
      },
      boxShadow: {
        "custom-shadow": " 2px 2px 2px 0px #ACC2C7",
        "custom-shadow2": " 0px 7px 7px 0px #030303",
      },
      fontSize: {
        fs1: "0.6rem",
      },
      colors: {
        primary: "#03262e",
        primary1: "#ACC2C7",
        secondary: "#030303",
        color1: "#561C24",
        cartonColor: '#D9CFA6'
      },
      width: {
        piw: "62rem",
        piw1: "34.2rem",
        boxw1: "5rem",
      },
      backgroundColor: {
        'transparent': 'transparent',
        'black-50': 'rgba(0, 0, 0, 0.5)', // Adjust the opacity value as needed
      },
      keyframes: {
        "zoom-out": {
          "0%": { transform: "scale(0.0000000000000001)" },
          "100%": { transform: "scale(1)" },
        },
        slideLeft: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-340px)" },
        },
        slideFromTop: {
          "0%": { transform: "translateY(100%)" },
          "100%": { transform: "translateY(96px)" },
        },
        slideFromBottom: {
          "0%": { transform: "translateY(30rem)" },
          "100%": { transform: "translateY(-28rem)" },
        },
        slideFromLeft: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(42rem)" },
        },
        marquee: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        slideLeftRight: {
          '0%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
      animation: {
        "zoom-out": "zoom-out 2s",
        "slide-left": "slideLeft 1s ease-out 0.5s forwards",
        "slideFromTop": "slideFromTop 1s ease-out 0.1ms forwards",
        "slideFromBottom": "slideFromBottom 1s ease-out 0.1ms forwards",
        "slideFromLeft": "slideFromLeft 1s ease-out 0.1ms forwards",
        marquee: "marquee 25s linear infinite",
        slideLeftRight: 'slideLeftRight 30s linear infinite',
        
      },
    },
  },
  plugins: [
    
  ],
};
