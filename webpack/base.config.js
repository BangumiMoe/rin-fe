import path from "path";
import ExtractTextPlugin from "extract-text-webpack-plugin";

export default {
  context: path.resolve("./src"),
  entry: {
    polyfill: [
      "babel-polyfill",
      "whatwg-fetch",
      "intl"
    ],
    vendor: [
      "autobind-decorator",
      "immutable",
      "history",
      "react",
      "react-dom",
      "react-mixin",
      "react-intl",
      "react-router",
      "react-redux",
      "redux",
      "redux-thunk",
      "redux-promise",
      "flux-standard-action"
    ],
    app: "./index"
  },
  output: {
    path: path.resolve("./dist"),
    publicPath: "/",
    filename: "[name].js?[chunkhash:8]",
    chunkFilename: "[name].js?[chunkhash:8]"
  },
  module: {
    loaders: [
      {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract("style", "css!postcss!less?strictMath&strictUnits")
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract("style", "css!postcss")
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel"
      },
      {
        test: /\.json$/,
        loader: "json"
      },
      {
        test: /\.(png|jpg|gif|eot|svg|ttf|woff|woff2)$/,
        loader: "file?name=assets/[name].[ext]?[hash:8]"
      }
    ]
  },
  devServer: {
    contentBase: path.resolve("./dist"),
    historyApiFallback: true
  }
};
