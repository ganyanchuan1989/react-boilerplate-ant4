import xhr from './xhr/';
import { SERVER_URL } from 'CONFIG';

/**
 * 对应后端涉及到用户认证的 API
 */
class UserService {
	/**
	 * @param  {Object} userData
	 * @return {Promise}
	 */
	login(userData) {
		return xhr({
			method: 'post',
			url: `${SERVER_URL}api/v2/loginController`,
			body: userData,
			showErr: false,
		});
	}

	logout() {
		return xhr({ url: `${SERVER_URL}api/v2/logoutController` });
	}
}

// 实例化后再导出
export default new UserService();
