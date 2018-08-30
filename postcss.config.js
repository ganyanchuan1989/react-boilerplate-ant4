const autoprefixer = require("autoprefixer");

module.exports = {
  parser: "postcss-less", // 采用less语法解析css文件，支持行内注释：'//'
  plugins: [      
    autoprefixer({  
      browsers: [ 
          '>1%',                  // 全球使用率大于1%的浏览器类型          
          'last 4 versions',      // 每个浏览器最新的4个版本
          'Firefox ESR',          // firefox 最新版本
          'not ie < 8',           // 排除 IE8之前的版本
      ],
      // flexbox: 'no-2009',
    }),
  ]
}