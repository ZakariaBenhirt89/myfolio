module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ['./src/**/*.js', './src/**/*.jsx', './src/**/*.ts', './src/**/*.tsx'],
  darkMode : 'class' , 
  theme: {
    extend: {
      screens: {
        xs: '480px',
      },
    },
  },
  variants: {},
  plugins: [],
};
