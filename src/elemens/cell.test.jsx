import React from 'react';
import ReactDOM from 'react-dom';
import { useDispatch, Provider } from 'react-redux';
import store from '../redux/store';
import Cell from './cell';
import { toggleCell } from 'redux/actions';

describe('With React Testing Library', () => {
	
it('renders without crashing for 10,10', () => {
	const div = document.createElement('div');
	ReactDOM.render(
		<Provider store={store}>
			<Cell cord={{ row:10, col:10 }} />
		</Provider>, div);
	ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing for 0,0', () => {
	const div = document.createElement('div');
	ReactDOM.render(
		<Provider store={store}>
			<Cell cord={{ row:0, col:0 }} />
		</Provider>, div);
	ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing for 5,5 as an Apple', () => {
	const div = document.createElement('div');
	ReactDOM.render(
		<Provider store={{...store, conf:{ cellTipe:'image'}}} >
			<Cell cord={{ row:5, col:5 }} />
		</Provider>, div);
	ReactDOM.unmountComponentAtNode(div);
});

});