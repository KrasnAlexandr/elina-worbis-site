import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// import { RootState } from '@/app/providers/redux/store';

// const baseQuery = fetchBaseQuery({
//   baseUrl: 'https://api.your-really-great-app.com/v1/',
//   prepareHeaders: (headers, { getState }) => {
//     const token = (getState() as RootState).counter;
//     // If we have a token set in state, let's assume that we should be passing it.
//     if (token) {
//       headers.set('authorization', `Bearer ${token}`);
//     }
//     return headers;
//   },
// });

export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://pokeapi.co/api/v2/',
  }),
  endpoints: (build) => ({
    getAllPokemon: build.query<{ results: Array<{ name: string }> }, void>({
      query: () => ({
        url: `pokemon/`,
      }),
    }),
  }),
});

// Export hooks for usage in functional components
export const { useGetAllPokemonQuery } = pokemonApi;
