import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Orders,RazorpayPaymentLinkResponse } from "../types/order";

const baseQuery = fetchBaseQuery({
    baseUrl: "/api/order",
    credentials: "include"
})

export const orderApiSlice = createApi({
    reducerPath: 'orderApiSlice',
    baseQuery,
    endpoints: (builder) => ({
        placeOrders: builder.mutation<RazorpayPaymentLinkResponse,any>({
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
        })
    })
})

export const { usePlaceOrdersMutation, useGetAllOrdersQuery} = orderApiSlice