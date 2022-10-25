import { createStore, combineReducers } from "redux";
import MoviesReducer from "./reducers/moviesReducer";

const rootReducer = combineReducers({
  moviesReducer: MoviesReducer,
});

export const store = createStore(rootReducer);
