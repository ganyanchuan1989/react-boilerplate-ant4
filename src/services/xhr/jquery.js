import { errHandler, localMock } from './config';
import { getUserToken } from 'UTIL/commonUtil';
import ReactDOM from 'react-dom';
import React from 'react';

const xhr = ({ url, body = {}, method = 'post', showErr = true, isMask = false }) => {
  const defer = $.Deferred();
  let isMock = localMock && __DEV__;
  $.ajax({
    type: isMock ? 'get' : method,
    url: url,
    contentType: 'application/json;charset=UTF-8',
    data: JSON.stringify({
      reqHead: {
        tranProcess: '',
        tranId: '',
      },
      reqBody: body,
    }),
    beforeSend: (request) => {
      request.setRequestHeader('portToken', getUserToken());
      if (isMask) {
        document.body.className = 'bodyClass';
        let ele = document.getElementById('shadow');
        ReactDOM.render(
          <div
            id="shadowMask"
            style={{
              position: 'absolute',
              top: '0px',
              left: '0px',
              width: '100%',
              height: '100%',
              zIndex: 100,
              background: 'black',
              opacity: 0.4,
            }}
          />,
          ele
        );
      }
    },
    // xhrFields: { // 跨域允许带上 cookie
    //   withCredentials: [域名]
    // },
    // crossDomain: true
  })
    .done((rs) => {
      if (document.getElementById('shadowMask')) {
        document.body.className = '';
        ReactDOM.unmountComponentAtNode(document.getElementById('shadow'));
      }
      let res = typeof rs == 'string' ? JSON.parse(rs) : rs;
      let rspHeader = res.rspHead;
      if (rspHeader.tranSuccess === '1') {
        return defer.resolve(res.rspBody);
      } else {
        if (rspHeader.errorCode === 'NOT_LOGGED_IN_ERROR') {
          let event = document.createEvent('HTMLEvents');
          event.initEvent('isLoginInvalid');
          document.dispatchEvent(event);
        } else if (showErr) {
          errHandler(rspHeader);
        }
        return defer.reject(rspHeader);
      }
    })
    .fail((err) => {
      if (document.getElementById('shadowMask')) {
        document.body.className = '';
        ReactDOM.unmountComponentAtNode(document.getElementById('shadowMask'));
        document.getElementById('shadow').removeChild(document.getElementById('shadowMask'));
      }
      if (showErr) {
        errHandler(err);
      }
      return defer.reject(err);
    });

  return defer.promise();
};

export default xhr;
