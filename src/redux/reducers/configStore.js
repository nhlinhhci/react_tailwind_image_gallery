import { combineReducers, createStore } from "redux";

const rootReducer = combineReducers({
  //Chứa các state của ứng dụng
});

export const store = createStore(rootReducer);
