const path  = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	watchOptions: {
    ignored: /node_modules/,
    poll: true
  },
  resolve: {
	  extensions: ['*', '.js', '.jsx', '.ts', '.tsx']
	},
  module: {
    rules: [
    	{
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react",
              "@babel/preset-typescript",
            ],
          },
        },
      },
      {
        test: /\.(woff(2)?|ttf|eot|otf|svg|png|jpe?g|gif)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'dist/',
              esModule: false,
            }
          }
        ]
      },
      {
        test: /\.?(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.(scss|css)$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.html$/,
        exclude: [/node_modules/, require.resolve('./index.html')],
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]'
          },
        },
      },
    ]
  },
  entry: path.join(__dirname, "index.js"),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    publicPath: '/'
  },
  // devServer: {
  //   historyApiFallback: true,
  // },
  plugins: [
  	new HtmlWebpackPlugin({
      template: path.join(__dirname, "/index.html"),
    }),
		new MiniCssExtractPlugin(),
  ]
}