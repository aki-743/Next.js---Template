const colors = require('tailwindcss/colors.js');

module.exports = {
  mode: 'jit',
  purge: ['src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  preserveHtmlElements: false,
  important: true,
  theme: {
    screens: {
      sm: { max: '600px' },
      md: { max: '960px' },
      tablet: { max: '1024px' },
    },
    colors: {
      transparent: 'transparent',
      default: '#f5f5f5',
      white: '#fff',
      black: '#000',
      green: colors.green,
      red: 'red',
      warn: 'red',
      main: '#26c6da',
      'main-light': '#6ff9ff',
      'main-dark': '#0095a8',
      'drawer-bg': '#343A40',
      link: '#0366d6',
    },
    fill: {
      white: '#fff',
    },
    fontSize: {
      12: '12px',
      16: '16px',
      24: '24px',
      32: '32px',
      36: '36px',
      48: '48px',
      56: '56px',
      h1: ['48px', 1],
      h2: ['36px', 1.333],
      h3: ['24px', 1],
      h4: ['16px', 1.5],
      h5: ['16px', 1.5],
      h6: ['16px', 1.5],
    },
    width: {
      '95-percent': '95%',
      25: '25px',
      250: '250px',
      400: '400px',
      500: '500px',
      550: '550px',
      full: '100%',
      '1_2': '50%',
    },
    maxWidth: {
      300: '300px',
      500: '500px',
      600: '600px',
      full: '100%',
    },
    minWidth: {
      150: '150px',
    },
    height: {
      4: '4px',
      full: '100%',
      screen: '100vh',
    },
    maxHeight: {
      '60-screen': '60vh',
      full: '100%',
    },
    padding: {
      0: '0px',
      4: '4px',
      8: '8px',
      12: '12px',
      16: '16px',
      24: '24px',
      32: '32px',
      40: '40px',
      48: '48px',
      56: '56px',
    },
    margin: {
      0: '0px',
      4: '4px',
      8: '8px',
      12: '12px',
      16: '16px',
      24: '24px',
      32: '32px',
      40: '40px',
      48: '48px',
      56: '56px',
      auto: 'auto',
    },
    zIndex: {
      10: 10,
      1000: 1000,
    },
    borderRadius: {
      4: '4px',
      full: '9999px',
    },
    extend: {
      backgroundImage: {
        SignUpAndSignInBackground: "url('../../../assets/background/db-RegisterAndLoginBackgroundImage.jpg')",
      },
    },
  },
  variants: {
    opacity: ['disabled', 'hover'],
    cursor: ['disabled', 'hover'],
    textColor: ['responsive', 'hover', 'focus', 'group-hover'],
    textDecoration: ['hover'],
    backgroundColor: ['responsive', 'hover', 'focus', 'group-hover'],
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.flex-100': {
          flex: '0 1 100%',
        },
        '.flex-90': {
          flex: '0 1 90%',
        },
        '.flex-85': {
          flex: '0 1 85%',
        },
        '.flex-80': {
          flex: '0 1 80%',
        },
        '.flex-70': {
          flex: '0 1 70%',
        },
        '.flex-50': {
          flex: '0 1 50%',
        },
        '.flex-45': {
          flex: '0 1 45%',
        },
        '.flex-40': {
          flex: '0 1 40%',
        },
        '.flex-30': {
          flex: '0 1 30%',
        },
        '.flex-20': {
          flex: '0 1 20%',
        },
        '.flex-15': {
          flex: '0 1 15%',
        },
        '.flex-10': {
          flex: '0 1 10%',
        },
      };
      addUtilities(newUtilities, {
        variants: ['responsive', 'hover'],
      });
    },
  ],
};
