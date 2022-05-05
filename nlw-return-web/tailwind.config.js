module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      // Criar cor e classe personalizada no tailwind, criando um novo objeto (bg-brand-500)
      colors: {
        brand: {
          500: '#8257e6'
        }
      }
    },
  },
  plugins: [],
}