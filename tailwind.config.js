module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-img': "url('/Hero.jpg')",
      },
      height: {
        '600': '600px',
        '400': '400px',
      },
      minHeight: {
        '600': '600px',
        '400': '400px',
      }
    },
  },
  plugins: [],
}