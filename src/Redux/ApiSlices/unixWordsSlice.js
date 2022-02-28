// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define a service using a base URL and expected endpoints
export const UnixWordsApi = createApi({
  reducerPath: 'UnixWordsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://gist.githubusercontent.com/',
  }),
  tagTypes: ['words'],
  endpoints: (builder) => ({
    getUnixWords: builder.query({
      query: () => ({
        url: `anonymous/4d4ccc05ee8dfa637dc9e47548e90372/raw/2ced47226cbad8b1353a9afbb8593ade4d077267/wordlist.json`,
      }),
      providesTags: ['words'],
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetUnixWordsQuery } = UnixWordsApi;
