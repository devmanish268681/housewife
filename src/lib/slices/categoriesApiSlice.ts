import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Category } from '../types/categories';

// Define base query
const baseQuery = fetchBaseQuery({
  baseUrl: '/api',
  credentials: 'include',
});

export const categoriesApiSlice = createApi({
  reducerPath: 'categoriesApiSlice',
  baseQuery,
  endpoints: (builder) => ({
    getCategories: builder.query<Category[], void>({
      query: () => ({
        url: '/category',
        method: "GET"
      })
    }),
    getProductsByCategory: builder.query({
      query: ({ category }) => ({
        url: `/products?category=${category}`,
        method: "GET"
      })
    })
  }),
});

export const {
  useGetCategoriesQuery,
  useGetProductsByCategoryQuery
} = categoriesApiSlice;
