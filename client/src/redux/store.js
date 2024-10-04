import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // Defaults to localStorage for web
import codeReducer from './slices/codeSlice';

const persistConfig = {
    key: 'root', 
    storage,
};

const persistedReducer = persistReducer(persistConfig, codeReducer);

export const store = configureStore({
    reducer: {
        code: persistedReducer,
    },
});

export const persistor = persistStore(store);
