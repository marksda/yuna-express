import { combineReducers, configureStore } from "@reduxjs/toolkit"
import { persistStore, persistReducer } from "redux-persist"
import tokenReducer from "../../services/acounting.token.reducer";
import storage from "redux-persist/lib/storage"
import { accountingApi } from "../../services/accounting.api";

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
        [accountingApi.reducerPath]: accountingApi.reducer, 
    },
    devTools: process.env.NODE_ENV !== 'production',
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false,})
                                        .concat(accountingApi.middleware)
});

export const persistor = persistStore(store)
export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>