module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: { lg: "1440px" },
    colors: {
      orange: "hsl(26, 100%, 55%)",
      "pale-orange": "hsl(25, 100%, 94%)",
      "very-dark-blue": "hsl(220, 13%, 13%)",
      "dark-grayish-blue": "hsl(219, 9%, 45%)",
      "grayish-blue": "hsl(220, 14%, 75%)",
      "light-grayish-blue": "hsl(223, 64%, 98%)",
    },
    fontFamily: {
      kumbh: ["Kumbh Sans", "ui-sans-serif"],
    },
    fontSize: {
      body: "16px",
    },
    extend: {},
  },
  plugins: [],
};
