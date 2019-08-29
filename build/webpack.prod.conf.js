const webpack = require("webpack"),
	config = require("./webpack.base.conf"),
	CopyWebpackPlugin = require("copy-webpack-plugin"),
	CleanWebpackPlugin = require("clean-webpack-plugin"),
	ProgressBarPlugin = require("progress-bar-webpack-plugin"),
	path = require("path"),
	SOURCE_MAP = false;

// const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const commonPath = require("./CommonPath");

config.mode = "production";
config.output.filename = "[name].[chunkhash:6].js";
config.output.chunkFilename = "[name].[chunkhash:6].js";
config.devtool = SOURCE_MAP ? "source-map" : false;

// 生产环境不需要缓存eslint
config.module.rules.push({
	enforce: "pre",
	test: /\.(js|jsx)$/,
	exclude: /node_modules/,
	loader: "eslint-loader"
});

// webpack4 new attribute
config.optimization = {
	minimize: true,
	// minimizer: [
	//     new UglifyJsPlugin({
	//         cache: true,
	//         parallel: true,
	//         uglifyOptions: {
	//             warnings: false
	//         }
	//     }),
	//     // new OptimizeCSSAssetsPlugin({}),
	// ],
	// runtimeChunk: 'single',
	splitChunks: {
		chunks: "async",
		minSize: 30000,
		minChunks: 3,
		maxAsyncRequests: 5,
		maxInitialRequests: 3,
		automaticNameDelimiter: "~",
		name: true,
		cacheGroups: {
			vendors: {
				name: "vendors",
				test: /[\\/]node_modules[\\/]/,
				// chunks: 'all',
				priority: 0
			},
			default: {
				minChunks: 3,
				priority: -20,
				reuseExistingChunk: true
			}
			// styles: {
			//   name: 'styles',
			//   test: /\.(css|less|sacc)$/,
			//   chunks: 'all',
			//   enforce: true,
			// },
		}
	}
};

config.plugins.push(
	new ProgressBarPlugin(),
	// new MiniCssExtractPlugin({
	//   filename: '[name].css',
	//   chunkFilename: '[name].[hash:6].css',
	// }),
	new CleanWebpackPlugin("dist", {
		root: commonPath.rootPath,
		verbose: false
	}),
	new CopyWebpackPlugin([
		// 复制高度静态资源
		{
			context: commonPath.staticDir,
			from: "**/*",
			ignore: ["*.md"]
		}
	]),
	new webpack.optimize.MinChunkSizePlugin({
		minChunkSize: 30000
	})
);

module.exports = config;
