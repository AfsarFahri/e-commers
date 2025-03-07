module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
    },
    container:{
      center: true,
      padding: "1rem",
    },
    extend: {
      fontFamiliy: {
        poppins: " 'Poppins', sans-serif",
        roboto: " 'Roboto', sans-serif",
      },
      colors: {
        primary: "sd3i57"
      }
    },
  },
  variants: {
    extend: {
      display: ['group-hover'],
      visibilty: ['group-hover']
    },
  },
  plugins: [],
}
