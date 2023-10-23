import { combineReducers, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { authActions, authReducer,loadingActions, loadingReducer} from "./slices";
import createSagaMiddleware from 'redux-saga';
import rootSaga from "./sagas";

const reducer = combineReducers({
    auth: authReducer,
    loading: loadingReducer
})

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    preloadedState: {},
    reducer,
    middleware: (getDefaultMiddleware: any) =>
      getDefaultMiddleware({ serializableCheck: false, thunk: false }).concat(sagaMiddleware)
});

export const AppActions = {
    auth: authActions,
    loading: loadingActions
}

sagaMiddleware.run(rootSaga);

export * as AppActionTypes from './types';

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;