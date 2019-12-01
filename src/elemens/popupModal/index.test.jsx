import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from '../../redux/store';
import PopupModal from '.';

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(
		<Provider store={store}>
			<PopupModal />
		</Provider>, div);
	ReactDOM.unmountComponentAtNode(div);
});
