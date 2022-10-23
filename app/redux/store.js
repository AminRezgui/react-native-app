import { createStore, combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import MoviesReducer from "./reducers/moviesReducer";

const rootReducer = combineReducers({
  moviesReducer: MoviesReducer,
});

export const store = createStore(rootReducer);
