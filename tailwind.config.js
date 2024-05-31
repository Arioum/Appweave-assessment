/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    screens: {
      '2xl': { max: '1159px' },

      xl: { max: '968px' },

      lg: { max: '767px' },

      md: { max: '600px' },

      sm: { max: '468px' },

      ssm: { max: '339px' },
    },
    fontFamily: {
      primary: ['Inter'],
      secondary: ['Manrope'],
    },
  },
  plugins: [],
};
