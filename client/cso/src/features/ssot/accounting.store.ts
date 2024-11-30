import { combineReducers, configureStore } from "@reduxjs/toolkit"
import { persistStore, persistReducer } from "redux-persist"
import tokenReducer from "../../services/acounting.token.reducer";
import storage from "redux-persist/lib/storage"

const persistConfig = {
    key: "root",
    storage
}

const rootReducer = combineReducers({ 
    token: tokenReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: {
        persisted: persistedReducer,
        // [aerithApi.reducerPath]: aerithApi.reducer, 
    },
    devTools: process.env.NODE_ENV !== 'production',
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false,})
                                        // .concat(aerithApi.middleware)
});

export const persistor = persistStore(store)
export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>