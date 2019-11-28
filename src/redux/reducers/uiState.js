import produce from "immer";
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

export default (state = initialState, action) =>
	produce(state, draft => {
		switch (action.type) {
			case OPEN_SETTINGS_DIALOG: {
				draft.settingsDialogState = true;
				break;
			}
			case CLOSE_SETTINGS_DIALOG: {
				draft.settingsDialogState = false;
				break;
			}
			case OPEN_ABOUT_DIALOG: {
				draft.aboutDialogState = true;
				break;
			}
			case CLOSE_ABOUT_DIALOG: {
				draft.aboutDialogState = false;
				break;
			}
			default:
				return draft;
		}
	});
