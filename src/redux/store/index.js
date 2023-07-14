import thunk from "redux-thunk";
import rootReducer from "../reducers";
import { applyMiddleware, createStore } from "redux";

// Create Store
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
