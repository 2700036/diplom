const webpack = require('webpack');
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); 
const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebpackMd5Hash = require("webpack-md5-hash");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const isDev = process.env.NODE_ENV === "development";

module.exports = {
  entry: {
    main: "./src/pages/index.js",
    about: "./src/pages/about.js",
    analytics: "./src/pages/analytics.js"
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "./scripts/[name].[chunkhash].js"
  },
  module: {
    rules: [
      {
        
        test: /\.js$/, 
        use: { loader: "babel-loader" }, 
        exclude: /node_modules/ 
      },
      {
        test: /\.css$/i,
        use: [
          (isDev ? "style-loader" : {loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../',
            }}),
          "css-loader",
          "postcss-loader"
        ]
      },
      {
        test: /\.(png|jpg|gif|ico|svg)$/,
        use: [
          "file-loader?name=./images/[name].[ext]", 
          {
            loader: "image-webpack-loader",
            options: {
              bypassOnDebug: true,
              disable: true,
            }
          }
        ]
      },
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        loader: 'file-loader?name=./vendor/[name].[ext]'
    }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "./styles/[name].[contenthash].css",
    }),
    new HtmlWebpackPlugin({
      filename: "index.html", 
      template: "./src/index.html", 
      inject: false, 
      hash: true 
    }),
    new HtmlWebpackPlugin({
      filename: "about.html",
      template: "./src/about.html", 
      inject: false, 
      hash: true 
    }),
    new HtmlWebpackPlugin({
      filename: "analytics.html", 
      template: "./src/analytics.html", 
      inject: false, 
      hash: true 
    }),
    new webpack.DefinePlugin({
      NODE_ENV: JSON.stringify(process.env.NODE_ENV)
    }),
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.css$/g,
      cssProcessor: require('cssnano'),
      cssProcessorPluginOptions: {
              preset: ['default'],
      },
      canPrint: true
}),
    new WebpackMd5Hash()
  ]
};
