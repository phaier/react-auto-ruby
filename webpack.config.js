const webpack = require('webpack');
const path = require('path');

module.exports = (env, argv) => {
  const enabledSourceMap = argv.mode !== 'production';

  return [
    {
      entry: {
        index: './lib/example/index.tsx',
      },
      devtool: 'source-map',
      output: {
        path: path.join(__dirname, './docs/js'),
        filename: '[name].js',
      },
      target: ['web'],
      module: {
        rules: [
          {
            test: /\.tsx?$/,
            use: 'ts-loader',
          },
        ],
      },
      plugins: [
        new webpack.WatchIgnorePlugin({
          paths: [/\.js$/, /\.d\.ts$/],
        }),
      ],

      externals: {
        react: 'React',
        'react-dom': 'ReactDOM',
      },
      resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json'],
        plugins: [],
      },
    },
  ];
};
