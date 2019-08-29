let userToken = '';
export function getUserToken(token) {
  let t = localStorage.getItem('userAuthToken');
  return userToken ? userToken : t ? t : '';
  // return userToken;
}

export function checkPlatform() {
  if (/android/i.test(navigator.userAgent)) {
    // 这是Android平台下浏览器
    return 'android';
  }

  if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
     // 这是iOS平台下浏览器
     return 'ios';
  }
}
