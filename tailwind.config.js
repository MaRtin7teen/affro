/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
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
        // Dark Mode specifics
        "dark-bg": "#0B0C11",
        "dark-sidebar": "#16171D",
        "dark-card": "#1E1F26",
        "dark-text": "#E8E9EB",
        "dark-muted": "#96A5B8",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      boxShadow: {
        'premium': '0 8px 30px rgba(0,0,0,0.04)',
        'premium-dark': '0 8px 30px rgba(0,0,0,0.4)',
      }
    },
  },
  plugins: [],
}
