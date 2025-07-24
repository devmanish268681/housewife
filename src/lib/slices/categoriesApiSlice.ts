import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Categories, CategoryProduct, GetProductsParams } from '../types/categories';

// Define base query
const baseQuery = fetchBaseQuery({
  baseUrl: '/api',
  credentials: 'include',
});

export const categoriesApiSlice = createApi({
  reducerPath: 'categoriesApiSlice',
  baseQuery,
  endpoints: (builder) => ({
    getCategories: builder.query<{ categories: Categories[] }, void>({
      query: () => ({
        url: '/category',
        method: "GET"
      })
    }),

    getProductsByCategory: builder.query<CategoryProduct, GetProductsParams>({
      query: (params) => ({
        url: `category/products`,
        method: "GET",
        params
      })
    })
  }),
});

export const {
  useGetCategoriesQuery,
  useGetProductsByCategoryQuery,
  useLazyGetProductsByCategoryQuery
} = categoriesApiSlice;
