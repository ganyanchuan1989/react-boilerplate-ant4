var webpack = require("webpack"),
	path = require("path"),
	config = require("./webpack.base.conf"),
	BrowserSyncPlugin = require("browser-sync-webpack-plugin"),
	ProgressBarPlugin = require("progress-bar-webpack-plugin"),
	SOURCE_MAP = true; // 大多数情况下用不到

const { PUBLIC_PATH } = require("./config");
config.output.publicPath = PUBLIC_PATH;
config.mode = "development";
config.output.filename = "[name].js";
config.output.chunkFilename = "[name].bundle.js";
config.devtool = SOURCE_MAP ? "eval-source-map" : false;

// add hot-reload related code to entry chunk
config.entry.app = [
	// "eventsource-polyfill",
	// "webpack-hot-middleware/client?reload=true",
	...config.entry.app,
	"webpack-hot-middleware/client?reload=true", // 关键点
	"react-hot-loader/patch", // 关键点
	"webpack/hot/only-dev-server" // 关键点
];

// 开发环境下eslint 缓存
config.module.rules.push({
	enforce: "pre",
	test: /\.(js|jsx)$/,
	exclude: /node_modules/,
	loader: "eslint-loader",
	options: {
		cache: true
	}
});

config.plugins.push(
	new ProgressBarPlugin(),
	new webpack.optimize.OccurrenceOrderPlugin(),
	new webpack.HotModuleReplacementPlugin(),
	new BrowserSyncPlugin(
		{
			host: "127.0.0.1",
			port: 9090,
			proxy: `http://127.0.0.1:9000${PUBLIC_PATH}index.html`,
			logConnections: false,
			notify: false
		},
		{
			reload: false
		}
	)
);

module.exports = config;
