import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './reducers/rootReducer'; 
import logger from './middleware/logger';

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(logger),
  devTools: process.env.NODE_ENV === 'development'
});

export type AppState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

export default store;