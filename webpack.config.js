/*
 * @Date: 2021-08-02 14:48:11
 * @LastEditors: xiongzeluo
 * @LastEditTime: 2022-04-13 14:32:12
 * @FilePath: /generationNovel/Users/luoxiongze/code/duellinks-maybe-cards/webpack.config.js
 */
const webpack = require("webpack");
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: "development",
  entry: {
    index: path.resolve(__dirname, "./src/index.js"),
  },
  output: {
    path: path.resolve(__dirname + "dist"),
    filename: "app.bundle.js",
  },
  target: "web",
  devServer: {
    inline: true,
    open: true,
    port: 3430,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
    extensions: ['.jsx', '.js', '.ts', '.tsx'],
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        //打包公共模块
        commons: {
          chunks: "initial", //initial表示提取入口文件的公共部分
          minChunks: 2, //表示提取公共部分最少的文件数
          minSize: 0, //表示提取公共部分最小的大小
          name: "commons", //提取出来的文件命名
        },
      },
    },
  },
  plugins: [
    new HtmlWebpackPlugin({ // 每个HtmlWebpackPlugin都会单独打包出一个htm文件
      filename: 'index.html',
      template: 'index.html',
      chunks: ['commons', 'index'],
      inject: 'true',
      hash: true,
      minify: {
          // collapseWhitespace: true, // 是否启用压缩
          removeComments: true, // 是否移除注释
          removeAttributeQuotes: true, // 移除属性的引号
      }
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|mjs|jsx|ts|tsx)$/,
        include: path.join(__dirname, "/src"),
        exclude: path.resolve(__dirname, "node_modules"),
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"],
            },
          },
        ],
      },
      {
        test: /\.xml$/,
        loader: "xml-loader",
      },

      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: "../",
            },
          },
          "css-loader",
        ],
      },
      {
        test: /\.(sass|scss)$/,
        use: [
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(css|less)$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" },
          {
            loader: "less-loader",
            options: {
              lessOptions: {
                javascriptEnabled: true,
              },
            },
          },
        ],
      },
      {
        test: /\.(png|jpg|jpeg|gif|icon|webp)$/,
        loader: "url-loader",
        options: {
          limit: 16384,
          name: "images/[name].[hash:5].[ext]",
        },
      },
      {
        test: /\.txt$/,
        loader: "text-loader",
      },
    ],
  },
  node: {
    __filename: true,
    __dirname: true,
  },
};
