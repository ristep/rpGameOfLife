import { combineReducers } from "redux";

import world from "./world";
import uiState from "./uiState";

export default combineReducers({ 
	world,
	uiState,
 });
