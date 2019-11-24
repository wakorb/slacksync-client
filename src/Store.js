import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import UsersReducer from "./reducers/UsersReducer";
import usersSaga from "./sagas/usersSaga";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(UsersReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(usersSaga);

export default store;
