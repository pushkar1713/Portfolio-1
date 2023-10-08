/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    fontFamily: {
      portfont: ["Be Vietnam Pro"],
    },
    colors: {
      grey: "#e7e7e7",
      blue500: "#2151cc",
      blue100: "#486cc7",
      white: "#FFFFFF",
    },
    extend: {
      boxshadow: {
        "3xl": "3px 3px 10px 0pc rgba(0, 0, 0, 0.3)",
      },
      keyframes: {
        scaleImage: {
          "0%": { filter: "grayscale(0)", transform: "scale(1)" },

          "50%": {
            filter: "grayscale(1)",
            transform: "scale(1.1)",
            boxShadow: "3px 3px 10px 0px rgba(0, 0, 0, 0.3)",
          },

          "100%": { transform: "scale(1)", filter: "grayscale(0)" },
        },
        dots: {
          "0%": { transform: "translateY(0px)" },

          "50%": {
            transform: "translateY(-15px)",
          },

          "100%": { transform: "translateY(0px)" },
        },
        cube: {
          "0%": { transform: "rotateY(0deg)" },

          "50%": {
            transform: "rotateY(180deg)",
          },

          "100%": {
            transform: "rotateY(360deg)",
          },
        },
        circle: {
          "50%": {
            left: "5%",
            bottom: "10%",
          },
        },
        zig: {
          "50%": {
            left: "5%",
            top: "2%",
          },
        },
        plus: {
          "50%": {
            left: "48%",
            top: "3%",
          },
        },
        blob: {
          "50%": {
            left: "46%",
            top: "54%",
          },
        },
      },
      animation: {
        image: "scaleImage 5s linear infinite",
        dots: "dots 5s linear infinite",
        cube: "cube 3s linear infinite",
        circle: "circle 6s linear infinite",
        zig: "zig 5s ease-in infinite",
        plus: "plus 5s ease-in infinite",
        blob: "blob 3s linear infinite",
      },
    },
  },
  plugins: [],
};
