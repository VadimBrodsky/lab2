const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const { ANALYZE } = process.env

module.exports = {
  exportPathMap: function() {
    return {
      '/': { page: '/' },
      '/about': { page: '/about' },
      '/p/hello-nextjs': { page: '/post', query: { title: 'Hello Next' } },
      '/p/winter-is-coming': { page: '/post', query: { title: 'Winter is Coming' } },
      '/p/another-one': { page: '/post', query: { title: 'Another One' } },
      '/p/exporting-pages': { page: '/post', query: { title: "Learn to Export HTML Pages"  } },
    };
  },

  webpack: function (config) {
    if (ANALYZE) {
      config.plugins.push(new BundleAnalyzerPlugin({
        analyzerMode: 'server',
        analyzerPort: 8888,
        openAnalyzer: true
      }));
    }

    return config;
  }
};

