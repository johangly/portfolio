const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'neon': '0 0 10px 1px #0496FFcc',
      },
    },
    colors: {
      ...colors,
      'primary': '#0496FF',
      'white': '#fff',
      'black': '#333',
      'fullBlack': '#000',
      'gray': '#F2F2F2',
      'separatorColor':'#D7D7D7',
      'purple':'#3D2ED3',
      'lightOrange':'#EE964B',
      'orange':'#F95738',
      'yellow':'#F4D35E',
      'darkBlue':'#0D3B66',
      'darkGray':'#3A363D',
    },
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
      roboto: ['Roboto', 'sans-serif'],
    },
  },
  plugins: [],
}
