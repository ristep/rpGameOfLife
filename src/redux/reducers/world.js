import produce from "immer";
import {
	TOGGLE_CELL,
	KILL_CELL,
	SET_CELL,
	INVERT_WORLD,
	NEXT_WORLD,
	SET_CELL_SIZE,
	RESIZE_WORLD,
	RESURRECT_CELL,
	SET_INTERVAL,
	START_WORLD,
	STOP_WORLD,
	SET_CELL_TIPE
} from "../actionTypes";

import {
	WORLD_HEIGHT,
	WORLD_WIDTH,
	CELL_SIZE
} from "initSetings";

const initialState = () => {
	var world = [];
	for (var r = 0; r < WORLD_HEIGHT; r++) {
		world[r] = [];
		for (var c = 0; c < WORLD_WIDTH; c++) {
			world[r][c] = 0;//(r === c);
		}
	}
	return ({
		generation: 0,
		liveCells: 0,
		interval: 50,
		delay: null,
		conf: {
			rows: WORLD_HEIGHT,
			colls: WORLD_WIDTH,
			cellSize: CELL_SIZE,
			cellTipe: 'image', // square
		},
		cells: world //new Array(20).fill(new Array(20).fill(false)),
	});
}

export default (state = initialState(), action) =>
	produce(state, draft => {
		var r = 0, c = 0;
		switch (action.type) {
			case SET_CELL_TIPE: {
				draft.conf.cellTipe = action.payload;
				break;
			}
			case START_WORLD: {
				draft.delay = state.interval;
				break;
			}
			case STOP_WORLD: {
				draft.delay = null;
				break;
			}
			case SET_INTERVAL: {
				draft.interval = action.payload;
				draft.delay = action.payload;
				break;
			}
			case SET_CELL: {
				const { row, col } = action.payload;
				draft.cells[row][col] = 1 * action.payload.live;
				break;
			}
			case TOGGLE_CELL: {
				var slive = state.liveCells;
				const { row, col } = action.payload;
				draft.cells[row][col] = draft.cells[row][col] ? 0 : 1;
				slive += draft.cells[row][col] ? 1 : -1;
				draft.liveCells = slive;
				break;
			}
			case KILL_CELL: {
				const { row, col } = action.payload;
				draft.cells[row][col] = 0;
				draft.liveCells = state.liveCells - 1;
				break;
			}
			case RESURRECT_CELL: {
				const { row, col } = action.payload;
				draft.cells[row][col] = 1;
				draft.liveCells = state.liveCells + 1;
				break;
			}
			case NEXT_WORLD: {
				const cells = state.cells;
				const { rows, colls } = state.conf;
				var living = 0;

				for (r = 0; r < rows; r++) {
					const rprev = (r - 1) < 0 ? rows - 1 : r - 1;
					const rnext = (r + 1) === rows ? 0 : r + 1;
					for (c = 0; c < colls; c++) {
						const cprev = (c - 1) < 0 ? colls - 1 : c - 1;
						const cnext = (c + 1) === colls ? 0 : c + 1;

						var nb =
							cells[rprev][cprev] +
							cells[rprev][c] +
							cells[rprev][cnext] +

							cells[r][cprev] +
							cells[r][cnext] +

							cells[rnext][cprev] +
							cells[rnext][c] +
							cells[rnext][cnext];

						if (cells[r][c] === 1)
							if ((nb < 2 || nb > 3)) draft.cells[r][c] = 0;
						if (cells[r][c] === 0)
							if (nb === 3) draft.cells[r][c] = 1;
						living += draft.cells[r][c];
					}
				}
				draft.generation = state.generation + 1;
				draft.liveCells = living;
				break;
			}
			case INVERT_WORLD: {
				living = 0;
				draft.cells.forEach((row, rkey) => {
					draft.cells[rkey].forEach((cell, ckey) => {
						draft.cells[rkey][ckey] = cell ? 0 : 1;
						living += cell ? 0 : 1;
					});
				});
				draft.liveCells = living;
				break;
			}
			case RESIZE_WORLD: {
				const { rows, colls } = action.payload;
				const cellSize = action.payload.cellSize > 0 ? action.payload.cellSize : state.conf.cellSize;
				
				draft.cells = [];
				for (r = 0; r < rows; r++) {
					draft.cells[r] = [];
					for (c = 0; c < colls; c++) {
						draft.cells[r][c] = 0;
					}
				}
				for (r = 0; r < state.conf.rows && r < rows; r++) {
					for (c = 0; c < state.conf.colls && c < colls; c++) {
						draft.cells[r][c] = state.cells[r][c];
					}
				}
				draft.conf.cellSize = cellSize;
				draft.conf.colls = colls;
				draft.conf.rows = rows;
				draft.liveCells = 0; 
				break;
			}
			case SET_CELL_SIZE: {
				draft.conf.cellSize = action.payload;
				break;
			}
			default:
				return draft;
		}
	});
