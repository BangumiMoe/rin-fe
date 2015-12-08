import base from "./base.config";
import path from "path";
import webpack from "webpack";
import cssnano from "cssnano";
import autoprefixer from "autoprefixer";
import ExtractTextPlugin from "extract-text-webpack-plugin";
import HTMLWebpackPlugin from "html-webpack-plugin";

const chunks = [
  "manifest",
  "polyfill",
  "vendor",
  "app"
];

export default {
  ...base,
  debug: false,
  plugins: [
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("production")
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.optimize.CommonsChunkPlugin({
      names: ["vendor", "polyfill", "manifest"],
      minChunks: Infinity
    }),
    new ExtractTextPlugin("[name].css?[contenthash:8]", {
      allChunks: true
    }),
    new HTMLWebpackPlugin({
      filename: "index.html",
      title: "Bangumi.moe",
      chunksSortMode: function(a, b) {
        return chunks.indexOf(a.names[0]) - chunks.indexOf(b.names[0]);
      },
      minify: {
        collapseWhitespace: true
      },
      template: path.resolve("./src/template/index.html")
    })
  ],
  postcss: function() {
    return [
      autoprefixer({
        browsers: ["last 2 version", "> 1%", "IE >= 9"]
      }),
      cssnano()
    ];
  }
};
