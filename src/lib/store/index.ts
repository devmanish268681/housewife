import { configureStore } from '@reduxjs/toolkit'
import { categoriesApiSlice } from '../slices/categoriesApiSlice'
import { brandsApiSlice } from '../slices/brandsApiSlice'
import cartReducer from '../slices/cartSlice';
import { cartApiSlice } from '../slices/cartApiSlice';

export const makeStore = () => {
    return configureStore({
        reducer: {
            //reducers
            [categoriesApiSlice.reducerPath]: categoriesApiSlice.reducer,
            [brandsApiSlice.reducerPath]: brandsApiSlice.reducer,
            [cartApiSlice.reducerPath]: cartApiSlice.reducer,
            //slices
            cart: cartReducer,
        },
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(categoriesApiSlice.middleware).concat(brandsApiSlice.middleware).concat(cartApiSlice.middleware)
    })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']