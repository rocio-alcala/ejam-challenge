/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: { manrope: "Manrope" },
      keyframes: {
        "fade-in": {
          "0%": {
            opacity: "0"
          },
          "100%": {
            opacity: "1"
          }
        },
        "fade-in-top": {
          "0%": {
            opacity: "0",
            transform: "translateY(-50%)"
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0%)"
          }
        },
        "fade-in-bottom": {
          "0%": {
            opacity: "0",
            transform: "translateY(50%)"
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0%)"
          }
        }
      },
      animation: {
        "fade-in": "fade-in 1s ease-in",
        "fade-in-top": "fade-in-top 1.8s",
        "fade-in-bottom": "fade-in-bottom 1.8s"
      }
    }
  },
  plugins: []
};
