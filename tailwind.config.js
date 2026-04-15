/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#5d5fef",
        "bg-sidebar": "#ffffff",
        "bg-main": "#f8f9ff",
        "text-main": "#05004e",
        "text-muted": "#737791",
        "card-sales-bg": "#ffe2e5",
        "card-order-bg": "#fff4de",
        "card-sold-bg": "#dcfce7",
        "card-customer-bg": "#f3e8ff",
        "stat-pink": "#fa5a7d",
        "stat-orange": "#ff947a",
        "stat-green": "#3cd856",
        "stat-purple": "#bf83ff",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
}
