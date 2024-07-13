'use client';

import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { counterReducer } from '@/entities/Counter';
import { pokemonApi } from '@/entities/PokemonList';

export const rootReducer = combineReducers({
  counter: counterReducer,
  [pokemonApi.reducerPath]: pokemonApi.reducer,
});

const apiMiddleware = [pokemonApi.middleware];

export const makeStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiMiddleware),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof configureStore>;
export type AppDispatch = AppStore['dispatch'];
