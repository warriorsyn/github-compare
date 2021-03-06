import { createStore, applyMiddleware } from "redux";
import createSagaMidleware from "redux-saga";
import reducers from "./ducks";

import rootSaga from "./sagas";

const sagaMiddleware = createSagaMidleware();

const store = createStore(reducers, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

export default store;