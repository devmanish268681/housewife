import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Categories } from '../types/categories';

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
    
    getProductsByCategory: builder.query({
      query: ({ category, subCategoryIds = [], brandIds = [] }) => {
        const params = new URLSearchParams();

        if (category) {
          params.append('category', category);
        }

        subCategoryIds.forEach(id => params.append('subCategoryId', id));

        brandIds.forEach(id => params.append('brandId', id));

        return {
          url: `/products?${params.toString()}`,
          method: 'GET',
        };
      },
    }),
  }),
});

export const {
  useGetCategoriesQuery,
  useGetProductsByCategoryQuery
} = categoriesApiSlice;
