/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["sans-serif"],
      },
      animation: {
        moveCode: "scrollCode 30s linear infinite",
        burst: "burst 0.4s ease-out",
        "spin-slow": "spin 5s linear infinite",
      },
      keyframes: {
        scrollCode: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-100%)" },
        },
        burst: {
          "0%": { transform: "scale(1)", opacity: "0.5" },
          "50%": { transform: "scale(2)", opacity: "0.2" },
          "100%": { transform: "scale(1)", opacity: "0" },
        },
      },
      colors: {
        primary: "#00FFB3",
        secondary: "#FF00D4",
        dark: "#0F172A",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
