import { message } from 'antd';
// 此处配置 根访问路径 以及 全局错误处理
// 更多配置请根据业务逻辑自行实现

// 后端 API 地址，最好以 http(s):// 打头
export const localMock = false;
export const errHandler = (e) => {
	if (e && e.errorMessage) {
		message.error(e.errorMessage);
	} else {
		message.error('[ XHR:Failed ] 详情请看控制台');
	}
	console.error(e);
};
