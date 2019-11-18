import { ADD_CELL, TOGGLE_CELL, KILL_CELL, RESURRECT_CELL, SET_CELL } from "../actionTypes";

const initialState = () => {
	var world = new Array(); 
	for(var r = 0; r < 20; r++) {
		world[r] = new Array();
		for (var c = 0; c < 20; c++){
			world[r][c] = false;
		 }
	 }

	return ({
		conf: { rows: 20, cols: 20 },
		cells: world //new Array(20).fill(new Array(20).fill(false)),
	});
}

export default function (state = initialState(), action) {
	switch (action.type) {
		case ADD_CELL: {
			// under construction
			return { state	}
		}
		case SET_CELL: {
			const cells = state.cells;
			const { row, col } = action.payload;
			cells[row][col] = action.payload.live; 
			return { ...state, cells };
		}	
		case TOGGLE_CELL: {
			const cells = state.cells;
			const { row, col } = action.payload;
			cells[row][col] = !cells[row][col]; 
			return { ...state, cells };
		}
		case KILL_CELL: {
			const cells = state.cells;
			const { row, col } = action.payload;
			cells[row][col] = false; 
			return { ...state, cells };
		}	
		case RESURRECT_CELL: {
			const cells = state.cells;
			const { row, col } = action.payload;
			cells[row][col] = true; 
			return { ...state, cells };
		}	
		default:
			return state;
	}
}
