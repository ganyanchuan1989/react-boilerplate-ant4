import React from 'react';
import Bundle from './Bundle';
import { Icon } from 'antd';

const Loading = () => (
	<div style={{ textAlign: 'center', fontSize: 'large', padding: '20px' }}>
		<Icon type="circle-o-notch fa-spin" /> Loading...
	</div>
);

const lazyLoad = (loadComponent) => (props) => (
	<Bundle load={loadComponent}>
		{(Comp) => (Comp ? <Comp {...props} /> : <Loading />)}
	</Bundle>
);

export default lazyLoad;
