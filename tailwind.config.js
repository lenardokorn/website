module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
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
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
