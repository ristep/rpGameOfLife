import {
	OPEN_SETTINGS_DIALOG,
	CLOSE_SETTINGS_DIALOG,
	CLOSE_ABOUT_DIALOG,
	OPEN_ABOUT_DIALOG
} from 'redux/actionTypes';

const initialState = {
	settingsDialogState: false,
	clearWorldAlertState: false,
	aboutDialogState: false,

}

export default function (state = initialState, action) {
	switch (action.type) {
		case OPEN_SETTINGS_DIALOG:{
			return { ...state, settingsDialogState:true };
		}	
		case CLOSE_SETTINGS_DIALOG:{
			return { ...state, settingsDialogState:false };
		}	
		case OPEN_ABOUT_DIALOG:{
			return { ...state, aboutDialogState:true };
		}	
		case CLOSE_ABOUT_DIALOG:{
			return { ...state, aboutDialogState:false };
		}	
		default:
			return state;
	}
}