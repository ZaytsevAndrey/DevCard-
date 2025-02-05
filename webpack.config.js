const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin"); // Мініфікація JS
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin"); // Мініфікація CSS
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); // Вилучення CSS у файл

module.exports = {
  entry: "./src/index.js", // Головний вхідний файл
  output: {
    path: path.resolve(__dirname, "dist"), // Вихідна папка
    filename: "bundle.[contenthash].js", // Унікальне ім'я з хешем для кешування
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Для JavaScript
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.scss$/, // Для SCSS/CSS
        use: [
          MiniCssExtractPlugin.loader, // Вилучення CSS у файл
          "css-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg|ico)$/i, // Для зображень
        type: "asset/resource",
        generator: {
          filename: "images/[name].[contenthash][ext]", // Збереження з хешем
        },
      },
      {
        test: /\.(woff2?|eot|ttf|otf)$/, // Для шрифтів
        type: "asset/resource",
        generator: {
          filename: "fonts/[name].[contenthash][ext]",
        },
      },
      {
        test: /\.pdf$/, // Для PDF-файлів
        type: "asset/resource",
        generator: {
          filename: "documents/[name].[contenthash][ext]", // Збереження з хешем
        },
      },
    ],
  },
  optimization: {
    minimize: true, // Увімкнення мінімізації
    minimizer: [
      new TerserPlugin({ parallel: true }), // Мініфікація JS
      new CssMinimizerPlugin(), // Мініфікація CSS
    ],
    splitChunks: {
      chunks: "all", // Поділ загального коду (наприклад, бібліотеки)
    },
    runtimeChunk: "single", // Вилучення runtime для оптимізації кешування
  },
  plugins: [
    new CleanWebpackPlugin(), // Очищення dist перед білдом
    new HtmlWebpackPlugin({
      template: "./public/index.html", // Шаблон HTML
      filename: "index.html", // Вихідний файл HTML
      favicon: "./public/favicon.ico", // Favicon
      minify: {
        collapseWhitespace: true, // Зменшення HTML
        removeComments: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
      },
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "public"), // Копіювання статичних файлів
          to: "",
          globOptions: {
            ignore: ["**/index.html"], // Ігнорувати index.html (щоб уникнути дублювання)
          },
        },
      ],
    }),
    new MiniCssExtractPlugin({
      filename: "styles/[name].[contenthash].css", // Вилучення CSS у окремий файл
    }),
  ],
  devServer: {
    static: path.resolve(__dirname, "dist"), // Сервер статичних файлів
    port: 8000, // Порт для розробки
    open: true, // Автовідкриття у браузері
    compress: true, // Стиснення файлів
    hot: true, // Гаряче перезавантаження
  },
  resolve: {
    extensions: [".js", ".jsx", ".scss"], // Розширення для імпорту
  },
  mode: "production", // Режим production для оптимізації
};
