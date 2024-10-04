import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import codeReducer from './slices/codeSlice';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['code']
};

const rootReducer = combineReducers({
  code: codeReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer
});

export const persistor = persistStore(store);
