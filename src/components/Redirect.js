import React from 'react';
import queryString from 'query-string';
/**
 * 设计初衷：
 *   replaceState 的 API 被废弃
 *   且要恢复原状很麻烦的情况下
 *   宁可重新进入该组件
 *   但 this.props.history.replace(当前路径) 是无效的
 *   因为 React 能判断出当前组件可复用
 *   因此只能跳转到别的路径之后再跳回来
 *
 * 使用方法：（当前路径为 /foo）
 * 在 JSX 中：<Link to="/redirect?dest=/foo">重载本页</Link>
 * 在 JS 中：this.props.history.replace('/redirect?dest=/foo')
 */
class Redirect extends React.Component {
  componentWillMount() {
    this.props.history.replace( // 可以直接通过 props 获取 router
      queryString.parse(this.props.location.search).dest
    );
  }

  render () {
    // 非实体组件需显式返回 null
    return null;
  }
}

export default Redirect;
