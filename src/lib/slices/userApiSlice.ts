import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { brands } from '../types/categories';
import { User } from '../types/user';

// Define base query
const baseQuery = fetchBaseQuery({
  baseUrl: '/api/user',
  credentials: 'include',
});

export const userApiSlice = createApi({
  reducerPath: 'userApiSlice',
  baseQuery,
  endpoints: (builder) => ({
    getUsers: builder.query<User[], void>({
      query: () => ({
        url: '/',
        method: "GET"
      }),
    })
  }),
});

export const {
  useGetUsersQuery,
} = userApiSlice;
