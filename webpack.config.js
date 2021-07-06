const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.tsx",
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./dist",
    historyApiFallback: true,
  },
  target: "web",
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(csv|tsv)$/i,
        use: ["csv-loader"],
      },
      {
        test: /\.(ts|tsx)$/i,
        use: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.(csv|tsv)$/i,
        use: ["csv-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".jsx"],
    alias: {
      root: __dirname,
      src: path.resolve(__dirname, "src"),
    },
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "my project",
      template: path.join(__dirname, "./public/index.html"),
    }),
  ],
};
