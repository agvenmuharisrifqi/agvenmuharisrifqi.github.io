module.exports = {
  content: [
    "./dist/**/*.{html, js}",
    "./index.html",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        sm: '2rem',
        lg: '4rem',
        xl: '7rem',
      },
    },
    screens: {
      'xs': '340px',
      // => @media (min-width: 340px) { ... }
      'sm': '640px',
      // => @media (min-width: 640px) { ... }
      'md': '768px',
      // => @media (min-width: 768px) { ... }
      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }
      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }
      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    colors: {
      'primary': '#CCF3EE',
      'link': '#4D77FF',
      'dark': '#0E185F',
      'red': '#dc2626',
      'white': '#FFFFFF',
      'black': '#000000',
      'gray': '#9ca3af',
    },
  },
  plugins: [],
}