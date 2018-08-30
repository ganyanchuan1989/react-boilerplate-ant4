const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const OpenBrowserPlugin = require("open-browser-webpack-plugin");
const es3ifyPlugin = require('es3ify-webpack-plugin');

const antdTheme = {
	'@icon-url': '"/antd/iconfont/iconfont"'
}

const config = {
	entry: [
		"babel-polyfill",
		"webpack-hot-middleware/client?reload=true",
		"react-hot-loader/patch",
		"webpack/hot/only-dev-server",
		"./src/index.jsx"
	],
	devtool: "eval-source-map",
	devServer: {
		contentBase: "./dist",
		hot: true,
		port: 3000
	},
	output: {
		filename: "[name].bundle.js",
		path: path.resolve(__dirname, "dist"),
		chunkFilename: "[name].bundle.js"
		// sourceMapFilename: '[name].js.map',
	},
	resolve: {
		extensions: [".js", ".jsx"],
		alias: {
			"react-resize-svg": path.resolve(__dirname, "./src/index.js")
		}
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: "babel-loader",
			},
			{
				test: /\.less$/,
				include: [/src/],
				use: [
					{loader: 'style-loader'},
						{
								loader: require.resolve('css-loader'),
								options: {
										modules: true,
										localIndexName:"[name]__[local]___[hash:base64:5]"
								},
						},
						{loader: 'postcss-loader'},
						{loader: 'less-loader'},
				],
			},
			{
				test: /\.less$/,
				include: [/node_modules/],
				use: [
						{loader: 'style-loader'},
						{
								loader: require.resolve('css-loader'),
								options: {
									importLoaders: 1
										// modules: true,
										// localIndexName:"[name]__[local]___[hash:base64:5]"
								},
						},
						{loader: 'less-loader', options: {javascriptEanbled: true, modifyVars: antdTheme}},
				],
			},
			{
				test: /\.(eot|woff|woff2|svg|ttf|png|jpg|jpeg)$/,
				use: [
					{
						loader: "url-loader",
						options: {
							limit: 20, // 20K
							fallback: "file-loader", // default
							name: "[path][name]-[hash:8].[ext]",
							// publicPath: 'assets/',
							outputPath: "./imgs/",
							useRelativePath: false // true : outputPath 失效
						}
					}
				]
			}
		]
	},

	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new HtmlWebpackPlugin({
			filename: "index.html",
			template: "./template/index_dev.html",
			title: "react-boilerplate-dev",
			// chunks: ['app'], //指定要加入的entry实例,
			inject: "body"
		}),
		new OpenBrowserPlugin({ url: "http://localhost:3000/" }),
		new es3ifyPlugin(),
	]
};

module.exports = config;
