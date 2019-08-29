const fs = require('fs'),
  path = require('path'),
  webpack = require('webpack'),
  ProgressPlugin = require('webpack/lib/ProgressPlugin'),
  BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin,
  config = require('./webpack.prod.conf');

const argvs = process.argv.splice(2);

if(argvs && argvs[0] === 'analyzer') {
  // 分析
  config.plugins.push(new BundleAnalyzerPlugin()); 
}

const commonPath = require('./CommonPath');

var complier = webpack(config, function(err, stats) {
  // show build info to console
  console.log(stats.toString({ chunks: false, color: true }));

  // save build info to file
  fs.writeFile(
    path.join(commonPath.dist, '__build_info__'),
    stats.toString({ color: false })
  );
});

// 输出进度信息 
complier.apply(new ProgressPlugin(function(percentage, msg){
  // console.log(percentage * 100 + '%', msg);
}));
