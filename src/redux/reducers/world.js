import { 
	TOGGLE_CELL, 
	KILL_CELL, 
	SET_CELL, 
	INVERT_WORLD, 
	NEXT_WORLD, 
	SET_CELL_SIZE, 
	RESIZE_WORLD, 
	RESURRECT_CELL
} from "../actionTypes";

import { 
	WORLD_HEIGHT, 
	WORLD_WIDTH, 
	CELL_SIZE 
} from "initSetings";

// Some Selectors
export const getWorldConf = state => state.world.conf;
export const getWorldCells = state => state.world.cells;

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
		conf: { rows: WORLD_HEIGHT, colls: WORLD_WIDTH, cellSize: CELL_SIZE },
		cells: world //new Array(20).fill(new Array(20).fill(false)),
	});
}

export default function (state = initialState(), action) {
	var r = 0, c = 0;
	switch (action.type) {
		case SET_CELL: {
			const cells = [...state.cells];
			const { row, col } = action.payload;
			cells[row][col] = 1 * action.payload.live;
			return { ...state, cells };
		}
		case TOGGLE_CELL: {
			const cells = [...state.cells];
			var  slive = state.liveCells;
			const { row, col } = action.payload;
			cells[row][col] = cells[row][col] ? 0 : 1;
      slive += cells[row][col] ? 1 : -1;
			return { ...state, liveCells: slive, cells };
		}
		case KILL_CELL: {
			const cells = [...state.cells];
			const { row, col } = action.payload;
			cells[row][col] = 0;
			return { ...state, liveCells: state.liveCells-1, cells };
		}
		case RESURRECT_CELL: {
			const cells = state.cells;
			const { row, col } = action.payload;
			cells[row][col] = 1;
			return { ...state, liveCells: state.liveCells+1, cells };
		}
		case NEXT_WORLD: {
			const cells = state.cells;
			const { rows, colls } = state.conf;
			var living = 0;
			const newCells = [];
			for (r = 0; r < rows; r++) {
				newCells[r] = [];
				for (c = 0; c < colls; c++) {
					newCells[r][c] = cells[r][c];
				}
			}
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
						if ((nb < 2 || nb > 3)) newCells[r][c] = 0;
					if (cells[r][c] === 0)
						if (nb === 3) newCells[r][c] = 1;
					living += newCells[r][c]; 	
				}
			}
			return { ...state, cells: newCells, generation: state.generation+1, liveCells:living };
		}
		case INVERT_WORLD: {
			const cells = [...state.cells];
			var living = 0;
			const newCells = [];
			cells.forEach((row,rkey ) => {
				newCells[rkey] = [];
				cells[rkey].forEach((cell,ckey) => {
					(newCells[rkey]).push(cell ? 0 : 1);
					living += cell ? 0 : 1;
				});
			});
			return { ...state, liveCells: living, cells: newCells };
		}
		case RESIZE_WORLD: {
			const { rows, colls } = action.payload;
			const cellSize = action.payload.cellSize > 0 ? action.payload.cellSize : state.conf.cellSize;
			const newCells = [];
			for (r = 0; r < rows; r++) {
				newCells[r] = [];
				for (c = 0; c < colls; c++) {
					newCells[r][c] = 0;
				}
			}
			for (r = 0; r < state.conf.rows && r < rows; r++) {
				for (c = 0; c < state.conf.colls && c < colls; c++) {
					newCells[r][c] = state.cells[r][c];
				}
			}
			return { conf: { ...action.payload, cellSize }, liveCells: 0, cells: newCells };
		}
		case SET_CELL_SIZE: {
			const newConf = { ...state.conf };
			newConf.cellSize = action.payload;
			return { ...state, conf: newConf }
		}
		default:
			return state;
	}
}
