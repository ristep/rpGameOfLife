import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from '../redux/store';
import Logo from './logo';

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(
		<Provider store={store}>
			<Logo />
		</Provider>, div);
	ReactDOM.unmountComponentAtNode(div);
});
