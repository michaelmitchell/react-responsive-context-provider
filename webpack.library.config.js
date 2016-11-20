module.exports = {
  output: {
    path: './lib',
    libraryTarget: 'commonjs2'
  },
  module: {
    loaders: [
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [
      'node_modules',
    ]
  },
};
