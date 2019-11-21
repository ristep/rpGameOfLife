import {
	OPEN_SETTINGS_DIALOG,
	CLOSE_SETTINGS_DIALOG
} from 'redux/actionTypes';

const initialState = {
	settingsDialog: false,
	clearWorldAlert: false,
	aboutDialog: false,
}

export const getSettingsDialog = (state) => ( state.uiState.settingsDialog );

export default function (state = initialState, action) {
	switch (action.type) {
		case OPEN_SETTINGS_DIALOG:{
			return { ...state, settingsDialog:true };
		}	
		case CLOSE_SETTINGS_DIALOG:{
			return { ...state, settingsDialog:false };
		}	
		default:
			return state;
	}
}