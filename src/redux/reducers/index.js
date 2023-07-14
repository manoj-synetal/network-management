import authReducer from "./authReducer";
import { combineReducers } from "redux";
import deviceReducer from "./deviceReducer";

// Combine all reducers
const rootReducer = combineReducers({ authReducer, deviceReducer });

export default rootReducer;
