import { createStore, compose, combineReducers, applyMiddleware } from "redux";
import { userReducer } from "./reudcers/userReducer";
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'


const rootReducer = combineReducers({
  userReducer
});

// const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunkMiddleware))
);
