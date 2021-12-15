const { school2ndGrade } = require('./lib/school-2nd-grade');

module.exports = {
  reactStrictMode: true,
  async rewrites() {
    return school2ndGrade.map(({ href }) => ({
      source: '/school/2nd-grade/' + href,
      destination: href.includes('.')
        ? '/school/2nd-grade/' + href
        : `/school/2nd-grade/${href}.html`,
    }));
  },
};
