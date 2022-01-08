const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: [
          '-apple-system',
          'Inter',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'ui-sans-serif',
          'sans-serif',
          'system-ui',
        ],
        serif: [
          'Georgia',
          'Times New Roman',
          'Times',
          'Cambria',
          'ui-serif',
          'serif',
        ],
        mono: [
          'SFMono-Regular',
          'Consolas',
          'Roboto Mono',
          'monospace',
          'ui-monospace',
        ],
      },
      colors: {
        lightest: colors.gray[100],
        lighter: colors.gray[300],
        lightTransp: colors.gray[100] + 'BF',
        darkTransp: '#0F111ABF',
        darker: '#181A28',
        darkest: '#0F111A',
      },
      boxShadow: {
        'top-lg':
          '0 -10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
