module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'wiggle': 'wiggle 0.5s ease-in-out infinite',
      },
      keyframes: {
        wiggle: {
          '0%': { transform: 'rotate(-2deg)' },
          '50%': { transform: 'rotate(2deg)' },
          '100%': { transform: 'rotate(-2deg)' },
        }
      },
      fontFamily: {
        Teko:['Teko']
      },
    },
  },
  plugins: [],
}