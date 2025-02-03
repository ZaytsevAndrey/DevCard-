const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: "./src/index.js", // Головний вхідний файл
  output: {
    path: path.resolve(__dirname, "dist"), // Вихідна папка
    filename: "bundle.js", // Вихідний JavaScript
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
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|jpe?g|gif|svg|ico)$/i, // Для зображень
        type: "asset/resource",
        generator: {
          filename: "images/[name][ext]", // Збереження структури зображень
        },
      },
      {
        test: /\.(woff2?|eot|ttf|otf)$/, // Для шрифтів
        type: "asset/resource",
        generator: {
          filename: "fonts/[name][ext]",
        },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(), // Очищення dist перед білдом
    new HtmlWebpackPlugin({
      template: "./public/index.html", // Шаблон HTML
      filename: "index.html", // Вихідний файл HTML
      favicon: "./public/favicon.ico", // Favicon
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "public"), // Копіювання статичних файлів
          to: "", // Вихідна папка
          globOptions: {
            ignore: ["**/index.html"], // Ігнорувати index.html (щоб уникнути дублювання)
          },
        },
      ],
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
  mode: "development", // Режим (можна змінити на "production")
};
