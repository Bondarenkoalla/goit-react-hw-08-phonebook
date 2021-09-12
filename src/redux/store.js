// import { createStore } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension"
import { authReducer } from './auth';
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import logger from 'redux-logger'
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import reducer from "./reduser";

const middleware = [
    ...getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    }), logger,
];


// const contactsPersistConfig = {
//     key: 'contacts',
//     storage,
//     blacklist: ['filter'],
// };
const authPersistConfig = {
    key: 'auth',
    storage,
    whitelist: ['token'],
};


// const store = createStore(reduser, composeWithDevTools());
export const store = configureStore({
    reducer: {
        auth: persistReducer(authPersistConfig, authReducer),
         contacts: reducer,
         
       
    },
    middleware,
    devTools: process.env.NODE_ENV === 'development'
});

export const persistor = persistStore(store);


// export default  store;
