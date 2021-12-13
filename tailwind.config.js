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
        lightTransp: colors.gray[100] + '50',
        darkTransp: '#0F111A80',
        darker: '#181A28',
        darkest: '#0F111A',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
