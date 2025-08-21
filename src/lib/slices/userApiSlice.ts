import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { brands } from '../types/categories';
import { Address, User } from '../types/user';

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
    }),
    getUserAddress:builder.query<Address[],void>({
      query:() => ({
        url:'/address',
        method:"GET"
      })
    })
  }),
});

export const {
  useGetUsersQuery,
  useGetUserAddressQuery
} = userApiSlice;
