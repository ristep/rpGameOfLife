import reducer, { initialState } from './world';
import * as types from '../actionTypes';
import { setCellTipe, startWorld } from 'redux/actions';

const initState = initialState();

describe('world reducer', () => {
	it('should return the initial state', () => {
		expect(reducer(undefined, {})).toEqual(initState);
	});

	it('should set cellType', () => {
		expect( reducer( undefined, {  type: types.SET_CELL_TIPE, payload:'alabama'}))
			.toEqual({...initState, conf: { ...initState.conf, cellTipe:'alabama'} })
	});

	it('should setCellType action', () => {
		expect( reducer( undefined, setCellTipe('negotino')) )
			.toEqual({...initState, conf: { ...initState.conf, cellTipe:'negotino'} })
	});

	it('should start startWorld action', () => {
		expect( reducer( undefined, startWorld()) )
			.toEqual({...initState, delay: initState.interval })
	});

	it('action STOP_WORLD should stop the world', () => {
		expect( reducer( {...initState, delay: 200 }, { type: types.STOP_WORLD }) )
			.toEqual({...initState, delay: null })
	});

	it('action SET_INTERVAL should set interval and start', () => {
		expect( reducer( undefined, { type: types.SET_INTERVAL, payload:300 }) )
			.toEqual({...initState, interval: 300, delay:300 })
	});

	it('action SET_CEL should set cell life or dead', () => {
		const newState = initState;
		newState.cells[5][10] = 10;
		expect( reducer( undefined, { type: types.SET_CELL, payload: { row: 5, col: 10, live: 10 } }) )
			.toEqual(newState)
	});

	it('action TOGGLE_CELL should toggle cell state', () => {
		const newState = initState;
		const cell = { row: 5, col: 10 };
		newState.cells[cell.row][cell.col] = 1;
		newState.liveCells += 1 ;
		expect( reducer( undefined, { type: types.TOGGLE_CELL, payload: cell }) )
			.toEqual(newState)
	});

	it('action KILL_CELL should set cell state to 0', () => {
		const initState = initialState();
		const destState = initialState();
		const cell = { row: 5, col: 7 };
		initState.cells[cell.row][cell.col] = 1;
		initState.liveCells = 1 ;
		expect( reducer( initState, { type: types.KILL_CELL, payload: cell }) )
			.toEqual(destState)
	});
	
	it('action RESURRECT_CELL should set cell to zombie state', () => {
		const destState = initialState();
		const cell = { row: 5, col: 7 };
		destState.cells[cell.row][cell.col] = 1;
		destState.liveCells = 1 ;
		expect( reducer( undefined, { type: types.RESURRECT_CELL, payload: cell }) )
			.toEqual(destState)
	});

	// NEXT_WORLD Tests should be multiple and will be written some point in future

	it('action INVERT_WORLD should toggle all cells state', () => {
		const draft = initialState();
		var living = 0;
		draft.cells.forEach((row, rkey) => {
			draft.cells[rkey].forEach((cell, ckey) => {
				draft.cells[rkey][ckey] = cell ? 0 : 1;
					living += cell ? 0 : 1;
			});
		});
		draft.liveCells = living;
		expect( reducer( undefined, { type: types.INVERT_WORLD }) )
			.toEqual(draft)
	});

	
})