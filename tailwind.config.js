/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        jockey: ["Jockey One", "Arial", "Sans-Serif"],
        josefin: ["Josefin Slab", "Arial", "Sans-Serif"],
      },
      colors: {
        lightBlue: "#7DA2C3",
        navigationBg: "#6771A7",
        darkBlue: "#23629D",
      },
      perspective: {
        1000: "1000px",
      },
    },
  },
  plugins: [],
};
