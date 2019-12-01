import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from '../redux/store';
import AboutDialog from './about';

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(
		<Provider store={store}>
			<AboutDialog />
		</Provider>, div);
	ReactDOM.unmountComponentAtNode(div);
});
