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

const initialState = () => {
	var world = [];
	for (var r = 0; r < WORLD_HEIGHT; r++) {
		world[r] = [];
		for (var c = 0; c < WORLD_WIDTH; c++) {
			world[r][c] = 0;//(r === c);
		}
	}

	return ({
		conf: { rows: WORLD_HEIGHT, cols: WORLD_WIDTH, cellSize: CELL_SIZE },
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
			const { row, col } = action.payload;
			cells[row][col] = cells[row][col] ? 0 : 1;
			return { ...state, cells };
		}
		case KILL_CELL: {
			const cells = [...state.cells];
			const { row, col } = action.payload;
			cells[row][col] = 0;
			return { ...state, cells };
		}
		case RESURRECT_CELL: {
			const cells = state.cells;
			const { row, col } = action.payload;
			cells[row][col] = 1;
			return { ...state, cells };
		}
		case NEXT_WORLD: {
			const cells = state.cells;
			const { rows, cols } = state.conf;

			const newCells = [];
			for (r = 0; r < rows; r++) {
				newCells[r] = [];
				for (c = 0; c < cols; c++) {
					newCells[r][c] = cells[r][c];
				}
			}
			for (r = 0; r < rows; r++) {
				const rprev = (r - 1) < 0 ? rows - 1 : r - 1;
				const rnext = (r + 1) === rows ? 0 : r + 1;
				for (c = 0; c < cols; c++) {
					const cprev = (c - 1) < 0 ? cols - 1 : c - 1;
					const cnext = (c + 1) === cols ? 0 : c + 1;

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
				}
			}
			return { ...state, cells: newCells };
		}
		case INVERT_WORLD: {
			const cells = [...state.cells];
			const { rows, cols } = state.conf;

			const newCells = [];
			for (r = 0; r < rows; r++) {
				newCells[r] = [];
				for (c = 0; c < cols; c++) {
					newCells[r][c] = cells[r][c];
				}
			}

			for (r = 0; r < rows; r++) {
				for (c = 0; c < cols; c++) {
					newCells[r][c] = cells[r][c] ? 0 : 1;
				}
			}
			return { ...state, cells: newCells };
		}
		case RESIZE_WORLD: {
			const { rows, cols } = action.payload;
			const cellSize = 
						action.payload.cellSize > 0 ? action.payload.cellSize : state.conf.cellSize;
			const newCells = [];
			for (r = 0; r < rows; r++) {
				newCells[r] = [];
				for (c = 0; c < cols; c++) {
					newCells[r][c] = 0;
				}
			}

			for (r = 0; r < state.conf.rows && r < rows; r++) {
				for (c = 0; c < state.conf.cols && c < cols; c++) {
					newCells[r][c] = state.cells[r][c];
				}
			}
			return { conf: { ...action.payload, cellSize }, cells: newCells };
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
