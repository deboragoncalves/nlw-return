module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      /* 
        - Criar cor e classe personalizada no tailwind, criando um novo objeto (bg-brand-500)
        - o md da borda default do tailwind é de 6px
      */
      colors: {
        brand: {
          300: "#996DFF",
          500: "#8257e6"
        }
      },
      borderRadius: {
        md: "4px"
      }
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("tailwind-scrollbar")
  ],
}