const path = require('path');

module.exports = ({ stage, actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '../src/')
      }
    }
  });
};
