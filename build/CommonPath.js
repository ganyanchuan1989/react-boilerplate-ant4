const path = require('path');
const { CONTEXT_PATH } = require('./config');

// 项目根目录
const rootPath = path.resolve(__dirname, '..');
// 开发源码目录
const src = path.join(rootPath, 'src');
// 配置
const build = path.join(rootPath, 'build');
// 当前环境
const env = process.env.NODE_ENV.trim();

var commonPath = {
  rootPath: rootPath,
  dist: path.join(rootPath, 'dist', CONTEXT_PATH), // build 后输出目录
  indexHTML: path.join(src, 'index.html'), // 入口基页
  staticDir: path.join(rootPath, 'static'), // 无需处理的静态资源目录,
  mockDir: path.join(rootPath, 'mock'), // mock 数据目录
  build: build, // 配置相关
};

module.exports = {
  rootPath,
  src,
  env,
  ...commonPath,
};
