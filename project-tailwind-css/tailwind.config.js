/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    spacing: {
      1: "8px",
      2: "12px",
      3: "16px",
      4: "24px",
      5: "32px",
      6: "48px",
    },

    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },


    fontSize: {
      sm: '0.8rem',
      base: '30px',
      xl: '40px',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
    },


    extend: {
    

      colors: {
        narangi: "#FFA500",

        rand: {
          100: "#B37400",
          200: "#fff1bf",
        },
      },
    },
  },
  plugins: [],
};
