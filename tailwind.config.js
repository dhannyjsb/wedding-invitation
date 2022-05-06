module.exports = {
  content: ["./src/**/*.{vue,js,ts,jsx,tsx}", "./index.html"],
  theme: {
    extend: {
      backgroundImage: {
        "main-cover": "url('@/assets/main-cover.jpeg')",
        "texture": "url('@/assets/texture.png')",
        "prewedding": "url('@/assets/prewedding.jpg')"
      }
    },
  },
  plugins: [],
}
