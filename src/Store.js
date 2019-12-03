import { createStore, applyMiddleware, combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";

import UsersReducer from "./reducers/UsersReducer";
import channelsReducer from "./reducers/channelsReducer";
import rootSaga from "./sagas/rootSaga";

const sagaMiddleware = createSagaMiddleware();

const combinedReducers = combineReducers({
  users: UsersReducer,
  channels: channelsReducer
});

const store = createStore(combinedReducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;
