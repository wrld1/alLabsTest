/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      xs: ["12px", "16px"],
      xsL: ["16px", "16px"],
      sm: ["14px", "20px"],
      smL: ["16px", "23px"],
      base: ["16px", "25px"],
      baseL: ["18px", "24px"],
      lg: ["20px", "25px"],
      lgL: ["24px", "30px"],
      xl: ["24px", "32px"],
      xlL: ["28px", "34px"],
    },
    screens: {
      xs: { min: "400px", max: "639px" },
    },
  },
  plugins: [],
};
