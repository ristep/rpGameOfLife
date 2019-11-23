import { combineReducers } from "redux";

import world from "./world";
import uiState from "./uiState";
import theme from "./theme";

export default combineReducers({ 
	world,
	uiState,
	theme
 });
