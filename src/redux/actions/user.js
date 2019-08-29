import userService from 'SERVICE/userService';

// ================================
// Action Type
// ================================
const LOG_IN = 'LOG_IN';
const LOG_OUT = 'LOG_OUT';

const login = (loginName, password, userAuthToken) => (dispatch) => {
  console.log('login');
  userService
    .login({
      loginName: loginName,
      password: password,
      userAuthToken: userAuthToken,
    })
    .then(
      (res) => {
        console.log('login success');
        // 登录成功
        dispatch({
          type: LOG_IN,
          payload: res,
          loginName,
          password,
        });
      },
      (err) => {
        console.log('err:', err);
        // dispatch(loginFailed(err));
      }
    );
};

const logout = (token) => (dispatch) => {
  userService.logout().then(() => {
    // 登录失败
    dispatch({
      type: LOG_OUT,
    });
  });
};

/* default 导出所有 Actions Creator */
export {
  login,
  logout,
};

// ================================
// Action handlers for Reducer
// 本来更新 state 是 Reducer 的责任
// 但要把 ActionType 导出又引入实在太麻烦
// 且在 Reducer 中写 switch-case 实在太不优雅
// 故在此直接给出处理逻辑
// ================================
export const ACTION_HANDLERS = {
  // [LOG_IN]: (state, {payload}){}
  [LOG_IN]: (state, { payload }) => ({ ...state, ...payload }), // payload is userData
  [LOG_OUT]: (state, { payload }) => ({ ...state, isLoginSuccess: false }),
};
