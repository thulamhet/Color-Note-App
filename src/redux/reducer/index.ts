import { combineReducers } from "redux";

import reminderReducer from "./reminderReducer"
import colorReducer from "./colorReducer";

export default combineReducers({reminderReducer, colorReducer});