/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        bodyFont: 'Poppins',
        titleFont: 'Nunito Sans',
      },
      colors: {
        skin: {
          highlight: '#F55B15',
          base: '#5F5940',
          prime_blue: '#82C7C3',
          prime_purple: '#917492',
          prime_yellow: '#DCB32F',
          bright_yellow: '#ffe700',
        },
      },
    },
  },
  plugins: [],
};
