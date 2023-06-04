// src/store.js
// the purpose of this file is to create the Redux store

import { createStore, combineReducers } from 'redux';
import todosReducer from './redux/reducer';

// Combine all reducers into a single root reducer
const rootReducer = combineReducers({
  todos: todosReducer,
});

// Create the Redux store with the root reducer
const store = createStore(rootReducer);

export default store;
