import reducers from "./store";
import sagas from "./sagas/sagas";
import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware()

export default createStore(
    reducers,
    applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(sagas);