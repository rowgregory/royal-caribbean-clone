/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "secondary-header": "#0c214d",
      },
      height: {
        24: "24px",
      },
      fontFamily: {
        kapra: ["Kapra Regular", "sans-serif"],
        "kapra-condensed": ["Kapra-Condensed", "sans-serif"],
      },
      backgroundImage: {
        landing_jumbotron: "url('/landing_jumbotron.jpeg')",
        signin: "url('/signin-bg.jpeg')",
        createAccount: "url('/create-account-bg.jpeg')",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        searchCruiseWidget: "0 0.0625rem 1rem 0 rgba(0,0,0,0.24)",
      },
      screens: {
        "md-lg": "1000px",
      },
    },
  },
  plugins: [],
};
