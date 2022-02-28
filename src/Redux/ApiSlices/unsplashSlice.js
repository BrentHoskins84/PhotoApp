// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { UNSPLASH_CLIENT_KEY } from '@env';

// Define a service using a base URL and expected endpoints
export const unsplashAPI = createApi({
  reducerPath: 'unsplashApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.unsplash.com',
    prepareHeaders: (headers) => {
      headers.set('authorization', `Client-ID ${UNSPLASH_CLIENT_KEY}`);
      return headers;
    },
  }),
  tagTypes: ['Photos'],
  endpoints: (builder) => ({
    searchPhoto: builder.query({
      query: (term) => ({
        url: `/search/photos`,
        params: {
          query: term,
          orientation: 'squarish',
          content_filter: 'low',
          per_page: 10,
        },
      }),
      providesTags: ['Photos'],
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useSearchPhotoQuery } = unsplashAPI;
