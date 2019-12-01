import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from '../redux/store';
import TopBanner from './topBanner';

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(
		<Provider store={store}>
			<TopBanner>This is the top Banner off an popup</TopBanner> />
		</Provider>, div);
	ReactDOM.unmountComponentAtNode(div);
});
