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
  tagTypes: ['User'],
  endpoints: (builder) => ({
    getUsers: builder.query<User[], void>({
      query: () => ({
        url: '/',
        method: "GET"
      }),
    }),
    getUserAddress: builder.query<Address[], void>({
      query: () => ({
        url: '/address',
        method: "GET"
      })
    }),
    getUserById: builder.query({
      query: (params) => ({
        url: '',
        params,
        method: "GET"
      }),
      providesTags: ['User']
    }),
    updateUser: builder.mutation({
      query: (body) => ({
        url: '/',
        method: "PUT",
        body
      }),
      invalidatesTags: ['User']
    })
  }),
});

export const {
  useGetUsersQuery,
  useGetUserAddressQuery,
  useGetUserByIdQuery,
  useLazyGetUserByIdQuery,
  useUpdateUserMutation
} = userApiSlice;
