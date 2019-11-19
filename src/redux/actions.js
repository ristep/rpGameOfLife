import { ADD_CELL, TOGGLE_CELL, KILL_CELL, RESURRECT_CELL, SET_CELL, INVERT_WORLD, NEXT_WORLD } from "./actionTypes";

export const addCell =  payload => ({ type: ADD_CELL,  payload });

export const toggleCell = (payload) => ({ type: TOGGLE_CELL,  payload });

export const killCell = (payload) => ({ type: KILL_CELL, 	payload  });

export const resurrectCell = (payload) => ({ type: RESURRECT_CELL, 	payload  });

export const setCell = (payload) => ({ type: SET_CELL, 	payload  });

export const invertWorld = () => ({ type: INVERT_WORLD });

export const nextWorld = () => ({ type: NEXT_WORLD });
