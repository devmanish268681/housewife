import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Orders,RazorpayOrderResponse, recentOrders} from "../types/order";

const baseQuery = fetchBaseQuery({
    baseUrl: "/api/order",
    credentials: "include"
})

export const orderApiSlice = createApi({
    reducerPath: 'orderApiSlice',
    baseQuery,
    endpoints: (builder) => ({
        placeOrders: builder.mutation<RazorpayOrderResponse,any>({
            query: (body) => ({
                url: '/',
                method: "POST",
                body
            })
        }),
        getAllOrders:builder.query<Orders,void>({
            query:() => ({
                url:'/',
                method:"GET"
            })
        }),
        getRecentOrders:builder.query<recentOrders[],void>({
            query:() => ({
                url:'/recent',
                method:"GET"
            })
        }),
        reorderOrder:builder.mutation({
            query:(body) => ({
                url:'/reorder',
                method:"POST",
                body
            })
        })
    })
})

export const { usePlaceOrdersMutation, useGetAllOrdersQuery,useGetRecentOrdersQuery,useReorderOrderMutation} = orderApiSlice