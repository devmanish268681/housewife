import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { PlaceOrderResponse, RazorpayPaymentLinkResponse } from "../types/order";

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
        })
    })
})

export const { usePlaceOrdersMutation } = orderApiSlice