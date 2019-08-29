const path = require("path"),
	webpack = require("webpack"),
	os = require("os"),
	HtmlWebpackPlugin = require("html-webpack-plugin"),
	HappyPack = require("happypack");

const commonPath = require("./CommonPath");
const { src, env, build } = commonPath;

var happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length });

// const antdTheme = {
//   '@icon-url': '"/antd/iconFont-3/iconfont"'
// };

module.exports = {
	entry: {
		app: ["@babel/polyfill", path.join(src, "app.js")]
	},
	output: {
		path: path.join(commonPath.dist)
	},
	resolve: {
		modules: [src, "node_modules"],
		extensions: [".js", ".jsx"],
		alias: {
			// ================================
			// 自定义路径别名
			// ================================
			ASSET: path.join(src, "assets"),
			COMPONENT: path.join(src, "components"),
			ACTION: path.join(src, "redux/actions"),
			REDUCER: path.join(src, "redux/reducers"),
			STORE: path.join(src, "redux/store"),
			ROUTE: path.join(src, "routes"),
			SERVICE: path.join(src, "services"),
			UTIL: path.join(src, "utils"),
			HOC: path.join(src, "utils/HoC"),
			MIXIN: path.join(src, "utils/mixins"),
			VIEW: path.join(src, "views"),
			CONFIG: path.join(build, "config")
		}
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				use: "happypack/loader?id=babel",
				include: src,
				exclude: /node_modules/
			},
			{
				test: /\.html$/,
				loader: "html-loader"
			},
			{
				test: /\.(png|jpe?g|gif)$/,
				loader: "url-loader",
				query: {
					limit: 10240, // 10KB 以下使用 base64
					name: "img/[name]-[hash:6].[ext]"
				}
			},
			{
				test: /\.(woff2?|eot|ttf|otf)(\?v=[\d\.]+)?$/,
				loader:
					"url-loader?limit=10240&name=fonts/[name]-[hash:6].[ext]"
			},
			{
				test: /\.(svg)$/,
				loader: "svg-sprite-loader"
			},
			{
				test: /\.css$/,
				use: [{ loader: "style-loader" }, { loader: "css-loader" }]
			},
			{
				test: /\.less$/,
				include: [/src/],
				use: [
					{ loader: "style-loader" },
					{
						loader: "css-loader",
						options: {
							modules: true,
							localIdentName:
								"[name]-[path]_[local]_[hash:base64:5]"
						}
					},
					{ loader: "postcss-loader" }, // 注意顺序，这个要在less-loader 之前
					{ loader: "less-loader" }
				]
			},
			{
				test: /\.less$/,
				include: [/node_modules/],
				use: [
					{ loader: "style-loader" },
					{
						loader: "css-loader",
						options: {
							importLoaders: 1
							// modules: true,
							// localIndexName:"[name]__[local]___[hash:base64:5]"
						}
					},
					{
						loader: "less-loader",
						options: { javascriptEnabled: true } // modifyVars: antdTheme
					}
				]
			}
		]
	},
	plugins: [
		new webpack.DefinePlugin({
			// 'process.env': {
			//   // 这是给 React / Redux 打包用的
			//   NODE_ENV: JSON.stringify('production'),
			// },
			// ================================
			// 配置开发全局常量
			// ================================
			__DEV__: env === "development",
			__PROD__: env === "production"
		}),
		new HappyPack({
			id: "babel", // 上面loader?后面指定的id
			loaders: ["babel-loader?cacheDirectory"], // 实际匹配处理的loader
			// 如何处理.js文件，和rules里的配置相同
			threadPool: happyThreadPool,
			// cache: true // 已被弃用
			verbose: true
			// loaders: [{
			//     loader: 'babel-loader',
			//     query: {
			//         presets: [
			//             "env", "stage-0"
			//         ]
			//     }
			// }]
		}),

		new HtmlWebpackPlugin({
			filename: "index.html",
			template: path.resolve(__dirname, "../src/index.html"),
			chunksSortMode: "none"
		}),
		// moment 动态加载locale
		new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /zh-cn|en/)
	]
};
