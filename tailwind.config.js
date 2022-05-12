module.exports = {
  content: ["./src/**/*.{vue,js,ts,jsx,tsx}", "./index.html"],
  theme: {
    extend: {
      backgroundImage: {
        "main-cover": "url('@/assets/main-cover.jpeg')",
        "autumn-texture": "url('@/assets/textures/autumn.png')",
        "prewedding": "url('@/assets/prewedding.jpg')",
        "bubble-texture": "url('@/assets/textures/bubble.png')"
      },
      fontSize: {
        'xxs': '.65rem'
      }
    },
  },
  plugins: [],
}
