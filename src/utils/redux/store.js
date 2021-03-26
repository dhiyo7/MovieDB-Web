import { createStore, applyMiddleware } from "redux";
import promiseMiddleware from "redux-promise-middleware";
import { composeWithDevTools } from "redux-devtools-extension";
import reducers from "./reducers";

const enchancer = composeWithDevTools(applyMiddleware(promiseMiddleware));

const store = createStore(reducers, enchancer);

export default store;
