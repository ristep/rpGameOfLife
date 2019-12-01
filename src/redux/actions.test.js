import * as actions from './actions';
import { TOGGLE_CELL, KILL_CELL, RESURRECT_CELL, SET_CELL, INVERT_WORLD, NEXT_WORLD, RESIZE_WORLD, SET_INTERVAL, START_WORLD, STOP_WORLD, SET_CELL_SIZE, SET_CELL_TIPE, OPEN_SETTINGS_DIALOG, CLOSE_SETTINGS_DIALOG, OPEN_ABOUT_DIALOG, CLOSE_ABOUT_DIALOG, OPEN_CLEAR_ALERT, CLOSE_CLEAR_ALERT } from './actionTypes';

// some pointless action creator tests :D
describe('actions', () => {
	const cord = { row:20, coll:9 };
  it('should create an action to toggleCell state', () => {
    const expectedAction = { type: TOGGLE_CELL, payload: { row:20, coll:9 } };
    expect(actions.toggleCell(cord)).toEqual(expectedAction);
	})
	it('should create an action to KILL_CELL state', () => {
    const expectedAction = { type: KILL_CELL, payload: { row:20, coll:9 } };
    expect(actions.killCell(cord)).toEqual(expectedAction);
	})
	it('should create an action to resurrectCell state', () => {
    const expectedAction = { type: RESURRECT_CELL, payload: cord };
    expect(actions.resurrectCell(cord)).toEqual(expectedAction);
	})
	it('should create an action to setCell state', () => {
    const expectedAction = { type: SET_CELL, payload: cord };
    expect(actions.setCell(cord)).toEqual(expectedAction);
	})
	it('should create an action to invertWorld state', () => {
    const expectedAction = { type: INVERT_WORLD };
    expect(actions.invertWorld()).toEqual(expectedAction);
	})
	it('should create an action to nextWorld state', () => {
    const expectedAction = { type: NEXT_WORLD };
    expect(actions.nextWorld()).toEqual(expectedAction);
	})
	it('should create an action to resizeWorld state', () => {
    const expectedAction = { type: RESIZE_WORLD, payload: {rows:20 , colls:40} };
    expect(actions.resizeWorld({rows:20 , colls:40})).toEqual(expectedAction);
	})
	it('should create an action to setInter state', () => {
    const expectedAction = { type: SET_INTERVAL, payload: 200 };
    expect(actions.setInter(200)).toEqual(expectedAction);
	})
	it('should create an action to startWorld state', () => {
    const expectedAction = { type: START_WORLD };
    expect(actions.startWorld()).toEqual(expectedAction);
	})
	it('should create an action to stopWorld state', () => {
    const expectedAction = { type: STOP_WORLD };
    expect(actions.stopWorld()).toEqual(expectedAction);
	})
	it('should create an action to setCellSize state', () => {
    const expectedAction = { type: SET_CELL_SIZE, payload: 22 };
    expect(actions.setCellSize(22)).toEqual(expectedAction);
	})
	it('should create an action to setCellTipe state', () => {
    const expectedAction = { type: SET_CELL_TIPE, payload: "CatleFish" };
    expect(actions.setCellTipe("CatleFish")).toEqual(expectedAction);
	})
	it('should create an action to openSettingsDialog state', () => {
    const expectedAction = { type: OPEN_SETTINGS_DIALOG };
    expect(actions.openSettingsDialog()).toEqual(expectedAction);
	})
	it('should create an action to closeSettingsDialog state', () => {
    const expectedAction = { type: CLOSE_SETTINGS_DIALOG };
    expect(actions.closeSettingsDialog()).toEqual(expectedAction);
	})
	it('should create an action to openAboutDialog state', () => {
    const expectedAction = { type: OPEN_ABOUT_DIALOG };
    expect(actions.openAboutDialog()).toEqual(expectedAction);
	})
	it('should create an action to resurrectCell state', () => {
    const expectedAction = { type: CLOSE_ABOUT_DIALOG };
    expect(actions.closeAboutDialog()).toEqual(expectedAction);
	})
	it('should create an action to openClearAlert state', () => {
    const expectedAction = { type: OPEN_CLEAR_ALERT };
    expect(actions.openClearAlert()).toEqual(expectedAction);
  })
	it('should create an action to resurrectCell state', () => {
    const expectedAction = { type: CLOSE_CLEAR_ALERT };
    expect(actions.closeClearAlert()).toEqual(expectedAction);
  })

})