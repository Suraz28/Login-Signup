/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "login-signup": "url('/public/Images/login-signup.jpg')",
      },
    },
  },
  plugins: [],
};
