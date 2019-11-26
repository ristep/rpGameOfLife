import {
  TOGGLE_CELL,
  KILL_CELL,
  RESURRECT_CELL,
  SET_CELL,
  INVERT_WORLD,
  NEXT_WORLD,
  SET_CELL_SIZE,
  RESIZE_WORLD,
	CLOSE_SETTINGS_DIALOG,
	OPEN_SETTINGS_DIALOG,
	STOP_WORLD,
	START_WORLD,
	SET_INTERVAL,
	SET_CELL_TIPE,
	CLOSE_ABOUT_DIALOG,
	OPEN_ABOUT_DIALOG
} from "./actionTypes";

// World mechanics actions 
export const toggleCell = payload => ({ type: TOGGLE_CELL, payload });
export const killCell = payload => ({ type: KILL_CELL, payload });
export const resurrectCell = payload => ({ type: RESURRECT_CELL, payload });
export const setCell = payload => ({ type: SET_CELL, payload });
export const invertWorld = () => ({ type: INVERT_WORLD });
export const nextWorld = () => ({ type: NEXT_WORLD });
export const resizeWorld = payload => ({ type: RESIZE_WORLD, payload });
export function setInter(payload) { return{ type: SET_INTERVAL, payload } };
export const startWorld = () => ({ type: START_WORLD });
export const stopWorld =  () => ({ type: STOP_WORLD });

export const setCellSize = payload => ({ type: SET_CELL_SIZE, payload });
export const setCellTipe = payload => ({type: SET_CELL_TIPE, payload});

// UI Actions
export const openSettingsDialog = () => ({type: OPEN_SETTINGS_DIALOG});
export const closeSettingsDialog = () => ({type: CLOSE_SETTINGS_DIALOG});

export const openAboutDialog = () => ({type: OPEN_ABOUT_DIALOG});
export const closeAboutDialog = () => ({type: CLOSE_ABOUT_DIALOG});