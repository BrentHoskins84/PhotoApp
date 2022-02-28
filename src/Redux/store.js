import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

import { unsplashAPI } from './ApiSlices/unsplashSlice';
import { UnixWordsApi } from './ApiSlices/unixWordsSlice';

export const store = configureStore({
  reducer: {
    [unsplashAPI.reducerPath]: unsplashAPI.reducer,
    [UnixWordsApi.reducerPath]: UnixWordsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(unsplashAPI.middleware, UnixWordsApi.middleware),
});

setupListeners(store.dispatch);
