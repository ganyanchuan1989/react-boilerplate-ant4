
// 当前环境
const env = process.env.NODE_ENV.trim();

module.exports = {
  CONTEXT_PATH: '/HelloWorld/', // 服务器上下文根目录，只在生产环境有效
  PUBLIC_PATH:  env === 'development' ? '/': './', // 静态资源目录
  SERVER_URL: '/',  // 服务器地址 
  DEV_MASK: true, // 开发模式请求是否采用MOCK
};