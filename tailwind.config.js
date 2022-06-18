module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        light : " rgba(229, 229, 229, 0.13)",
        active : " #E5E5E59E"
      },
      fontWeight: {
        light : "300"
      },
      container : {
        padding : '10px'
      }
    },
  },
  plugins: [],
}
