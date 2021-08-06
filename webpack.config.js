const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const OptimizeCssAseetsPlugin = require("optimize-css-assets-webpack-plugin");
const mode = process.env.NODE_ENV || "development";

module.exports = {
  entry: "./src/index.tsx",
  mode: mode,
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./dist",
    historyApiFallback: true,
    port: 9000,
    compress: true,
  },
  target: "web",
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.scss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
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
      favicon: "./src/styles/favicon.ico",
      minify:
        process.env.NODE_ENV === "production"
          ? {
              collapseWhitespace: true,
              removeComments: true,
            }
          : false,
    }),
  ],
  optimization: {
    minimizer:
      mode === "production"
        ? [
            new OptimizeCssAseetsPlugin(),
            new TerserPlugin({
              terserOptions: {
                compress: {
                  drop_console: true,
                  drop_debugger: true,
                },
              },
            }),
          ]
        : [],
  },
};
