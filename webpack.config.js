const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|ico|JPG)$/,
        type: 'asset/resource',
      },
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        { from: 'public', to: '' }, // Копіює всі файли з public до dist
      ],
    }),
  ],
  devServer: {
    static: path.resolve(__dirname, 'dist'),
    port: 8080,
    hot: true,
    open: true,
  },
  mode: 'production', // Змінюйте на 'production' для білду
};
