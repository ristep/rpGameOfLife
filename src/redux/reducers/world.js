import { ADD_CELL, TOGGLE_CELL, KILL_CELL, RESURRECT_CELL, SET_CELL, INVERT_WORLD, NEXT_WORLD } from "../actionTypes";
import { WORLD_HEIGHT, WORLD_WIDTH } from "setings";

const initialState = () => {
	var world = new Array();
	for (var r = 0; r < WORLD_HEIGHT + 2; r++) {
		world[r] = new Array();
		for (var c = 0; c < WORLD_WIDTH + 2; c++) {
			world[r][c] = 0;//(r === c);
		}
	}

	return ({
		conf: { rows: WORLD_HEIGHT, cols: WORLD_WIDTH },
		cells: world //new Array(20).fill(new Array(20).fill(false)),
	});
}

export default function (state = initialState(), action) {
	var r,c;
	switch (action.type) {
		case ADD_CELL: {
			// under construction
			return { state }
		}
		case SET_CELL: {
			const cells = [ ...state.cells];
			const { row, col } = action.payload;
			cells[row][col] = 1 * action.payload.live;
			return { ...state, cells };
		}
		case TOGGLE_CELL: {
			const cells = [ ...state.cells];
			const { row, col } = action.payload;
			cells[row][col] = cells[row][col] ? 0 : 1;
			return { ...state, cells };
		}
		case KILL_CELL: {
			const cells = [ ...state.cells];
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

			const newCells = new Array();
			for ( r = 0; r < rows+2; r++){ 
				newCells[r] = new Array();
				for ( c = 0; c < cols+2; c++) {
					newCells[r][c] = cells[r][c];
				}
			}
			for ( r = 1; r <= rows; r++) {
				for ( c = 1; c <= cols; c++) {
					var nb = 
						cells[r - 1][c - 1] + 
						cells[r - 1][c    ] + 
						cells[r - 1][c + 1] +
						
						cells[r][c - 1] + 
						cells[r][c + 1] +
						
						cells[r + 1][c - 1] + 
						cells[r + 1][c    ] + 
						cells[r + 1][c + 1];

					if (cells[r][c]===1) 
						if ((nb < 2 || nb > 3 )) newCells[r][c] = 0;						
					if (cells[r][c]===0) 
						if (nb === 3) newCells[r][c] = 1;
				}
			}
			return { ...state, cells:newCells };
		}
		case INVERT_WORLD: {
			const cells = state.cells;
			const { rows, cols } = state.conf;

			const newCells = new Array();
			for ( r = 0; r < rows+2; r++){ 
				newCells[r] = new Array();
				for ( c = 0; c < cols+2; c++) {
					newCells[r][c] = cells[r][c];
				}
			}

			for ( r = 1; r <= rows; r++) {
				for ( c = 1; c <= cols; c++) {
					newCells[r][c] = cells[r][c] ? 0 : 1;
				}
			}
			return { ...state, cells:newCells };
		}
		default:
			return state;
	}
}
