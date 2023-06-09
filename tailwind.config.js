/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        notez: {
          yellow: {
            100: "#FFEB3A",
            200: "#FFEB00",
          },
          grey: {
            100: "#9F9F9F",
            200: "#DBDBDB",
          },
        },
      },
    },
  },
  plugins: [],
};
