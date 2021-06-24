import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './reducers/rootReducer'
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from 'redux-thunk'


const persistConfig = {
    key: "root",
    storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);



const middleware = [thunk];
const initialState = {}

export const store = createStore(
    persistedReducer,
    initialState,
    compose(
        applyMiddleware(...middleware)
    )
);

export const persistor = persistStore(store);