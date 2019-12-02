import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from '../redux/store';
import Cell from './cell';
import configureStore from 'redux-mock-store'
//import { render } from 'react-testing-library'

describe('With React Testing Library', () => {
	var initialState = store.getState();
	const mockStore = configureStore();
	const cells = [[ 0,0,0,1 ],[ 1,0,0,0 ],[ 0,1,0,0 ],[ 0,0,1,0 ]];  
	initialState = {...initialState, world:{ ...initialState.world, conf: { rows: 4, colls: 4, cellSize: 12, cellTipe: 'image' }, cells:cells} };
	// console.log( initialState );
	let testStore,wrapper;
	testStore = mockStore(initialState);
	
it('renders without crashing for 0,0', () => {
	const div = document.createElement('div');
	ReactDOM.render(
		<Provider store={testStore}>
			<Cell cord={{ row:0, col:0 }} />
		</Provider>, div);
	ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing for 2,0', () => {
	const div = document.createElement('div');
	ReactDOM.render(
		<Provider store={testStore}>
			<Cell cord={{ row:2, col:0 }} />
		</Provider>, div);
	ReactDOM.unmountComponentAtNode(div);
});
 
it('renders without crashing for 5,5 as an Apple', () => {
	const div = document.createElement('div');
	ReactDOM.render(
		<Provider store={testStore} >
			<Cell cord={{ row:1, col:3 }} />
		</Provider>, div);
	ReactDOM.unmountComponentAtNode(div);
});

});