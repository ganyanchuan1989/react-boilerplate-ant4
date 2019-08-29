const autoprefixer = require("autoprefixer");

module.exports = {
	parser: "postcss-less", // 采用Less语法解析，支持行内注释语法：'//'
	plugins: [
		autoprefixer({
			browsers: [
				">1%", // 全球大于1%的浏览器类型
				"last 4 versions", // 所有浏览器类型的最新4个版本
				"Firefox ESR", // Firefox 最新版本
				"not ie < 8" // 排除IE 8 以前的版本。
			]
		})
	]
};
