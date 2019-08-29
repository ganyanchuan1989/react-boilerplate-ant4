/* 入口启动文件 */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { LocaleProvider } from 'antd';
import { HashRouter as Router, Route } from 'react-router-dom';
import store from 'STORE';
import BasicLayout from './layouts/BasicLayout';

// import routes from 'ROUTE';
// import xhr from 'SERVICE/xhr/';
// import { saveUserData } from 'UTIL/SessionUtil';
// import { saveSystemParmmData } from 'UTIL/getSystemParamUtil';

/**
 * 下面这货用于检测不必要的重新渲染，详情请看其项目地址：
 * https://github.com/garbles/why-did-you-update
 *
 * 有关性能提升方面的问题
 * 诸如 PureComponent / shouldComponentUpdate / Immutable.js 等
 * 请自行查阅相关资料
 */
if (__DEV__) {
	console.info('[当前环境] 开发环境');
}
if (__PROD__) {
	console.info('[当前环境] 线上环境');
}

// ================================
// 将根组件挂载到 DOM，启动！
// ================================
function loadIndex() {
	// xhr({
	//   url: '/api/v2/getSystemParam',
	//   body: {},
	// }).then(
	//   (re) => {
	//     if (re) {
	//       // saveSystemParmmData(re);
	//     }
	//   },
	//   (err) => {
	//     console.log(err);
	//   }
	// );
	ReactDOM.render(
		<LocaleProvider>
			<Provider store={store}>
				<Router>
					<div>
						<Route path="/" component={BasicLayout} />
					</div>
				</Router>
			</Provider>
		</LocaleProvider>,
		document.getElementById('app')
	);
}

// let userAuthToken = localStorage.getItem('userAuthToken');
// if (userAuthToken) {
//   console.log('检查存在用户令牌，联机进行令牌校验，查询用户信息');
//   xhr({
//     url: '/api/v2/checkUserToken',
//     body: { userAuthToken },
//   }).then(
//     ({ userData, roleList }) => {
//       if (userData && roleList) {
//         console.log(`已登录用户：${userData.userName}(${userData.loginName})`);
//         saveUserData({
//           userData,
//           roleList,
//         });
//       } else {
//         console.log('用户信息不存在');
//       }
//       loadIndex();
//     },
//     (err) => {
//       console.log(err);
//       loadIndex();
//     }
//   );
// } else {
//   loadIndex();
// }

loadIndex();

// === Webpack 处理 assets，取消注释即可进行测试 === //
/* 处理 less / sass */
import 'ASSET/less/normalize.less';
import 'ASSET/less/index.less';

/* 处理 img，小于 10KB 的转为 base64，否则使用 URL */
// import base64 from 'ASSET/img/smaller.png'
// import url from 'ASSET/img/larger.png'

// function appendImgToBody(content) {
//   const img = document.createElement('img')
//   img.src = content
//   document.body.appendChild(img)
// }

// appendImgToBody(base64)
// appendImgToBody(url)

/**
 * 【拓展】
 *  react-redux 的 Provider 中传入的属性
 *  可以让全体组件轻松访问，避免繁琐累赘的层层下传。例子：
 *
 *  class XXX extends Component {
 *    static contextTypes = {
 *      // 组件中需要这样子声明
 *      store: PropTypes.object.isRequired
 *    }
 *    componentDidMount () {
 *      // 之后就可以直接这样用
 *      this.context.store.getState()
 *    }
 *  }
 *
 *  但上面这种官方的做法实在太麻烦，于是我们有更为直接的方式：
 *  import store from 'STORE'
 *  store.getState() // 只读，更改 state 只能通过 dispatch
 */
