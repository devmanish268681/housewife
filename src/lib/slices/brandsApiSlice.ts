import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { brands, Categories} from '../types/categories';

// Define base query
const baseQuery = fetchBaseQuery({
  baseUrl: '/api/brands',
  credentials: 'include',
});

export const brandsApiSlice = createApi({
  reducerPath: 'branndsApiSlice',
  baseQuery,
  endpoints: (builder) => ({
    getBrands: builder.query<brands[],void>({
      query: () => ({
        url: '/',
        method: "GET"
      })
    })
  }),
});

export const {
useGetBrandsQuery
} = brandsApiSlice;
