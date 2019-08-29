/**
 * 检查登录
 */
export function checkLogin() {
  // if (!checkUserLogin()) {
  //   message.error('用户未登录，无法访问该页面');
  //   return false;
  // }
  // return true;
  return true;
}

export function checkRole(roleCode) {
  return function(nextState, replace, next) {
    // if (!checkUserLogin()) {
    //   message.error('用户未登录，无法访问该页面');
    //   history.replace('/');
    // } else if (!checkUserHasRole(roleCode)) {
    //   message.error('用户无权限访问该页面');
    //   history.replace('/');
    // } else {
    //   return next();
    // }
    return next();
  };
}
