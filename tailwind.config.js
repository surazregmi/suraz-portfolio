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
      },
      keyframes: {
        scrollCode: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-100%)" },
        },
      },
      colors: {
        primary: "#00FFB3",
        secondary: "#FF00D4",
        dark: "#0F172A",
      },
    },
  },
  plugins: [],
};
