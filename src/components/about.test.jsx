import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import store from '../redux/store';
import AboutDialog from './about';
import { render } from  "@testing-library/react";

describe('With React Testing Library', () => {
	var initialState = store.getState();
	const mockStore = configureStore();
	initialState = {...initialState, uiState: { ...initialState.uiState, aboutDialogState: true } };
	// console.log( initialState );
	let testStore = mockStore(initialState);

it('renders without crashing', () => {
	const div = document.createElement('div');
	const result = render(
		<Provider store={store}>
			<AboutDialog />
		</Provider>, div);
	// console.log(result.type);	
	expect(result.type).toBe(undefined);
	ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing', () => {
	const div = document.createElement('div');
	const result = render(
		<Provider store={testStore}>
			<AboutDialog />
		</Provider>, div);
	console.log(result.type);	
	expect(result.type).not.toBeNull()
	ReactDOM.unmountComponentAtNode(div);
});

});
