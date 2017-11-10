const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: ['babel-polyfill', './src/index.jsx'],
	output: {
		filename: 'js/bundle.[hash].js',
		path: path.resolve(__dirname, 'build')
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				include: [
					path.resolve(__dirname, 'src')
				],
				use: [
					{loader: 'babel-loader'}
				]
			},
			{
				test: /\.scss$/,
				include: [
					path.resolve(__dirname, 'styles'),
				],
				use: ExtractTextPlugin.extract({
	        fallback: 'style-loader',
	        use: [
	          {loader: 'css-loader'},
	          {loader: 'sass-loader'}
	        ]
		    })
			}
		]
	},
    plugins: [
        new ExtractTextPlugin({
	        filename: 'css/styles.[contenthash].css',
	        disable: process.env.npm_lifecycle_event === 'start'
        }),
        new HtmlWebpackPlugin({
          template: 'index.ejs'
        })
    ],
	devServer: {
		port: 2048,
	}
};
