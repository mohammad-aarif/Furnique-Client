import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from "redux-persist";
import filterReducer from './Reducer/filterSlice';
import authReducer from './Reducer/userSlice';
import cartReducer from './Reducer/cartSlice';

const persistConfig = { 
    key: 'root',
    storage,
    whitelist: ['auth']
    };

const rootReducer = combineReducers({
    auth: authReducer,
    filter: filterReducer,
    cart : cartReducer,
})
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: ["persist/PERSIST"],
            },
        }),
});

export const persistor = persistStore(store);
