import { configureStore } from '@reduxjs/toolkit'
import { categoriesApiSlice } from '../slices/categoriesApiSlice'
import { brandsApiSlice } from '../slices/brandsApiSlice'
import cartReducer from '../slices/cartSlice';
import { cartApiSlice } from '../slices/cartApiSlice';
import userLocationReducer from '../slices/userLocationSlice';
import { recommendedProductsApiSlice } from '../slices/recommendedApiSlice';
import { orderApiSlice } from '../slices/orderApiSlice';
import { productsApiSlice } from '../slices/productsApiSlice';
import { subCategoryApiSlice } from '../slices/subCategoryApiSlice';
import { userApiSlice } from '../slices/userApiSlice';
import { userLocationApiSlice } from '../slices/userLocationApiSlice';

export const makeStore = () => {
    return configureStore({
        reducer: {
            //reducers
            [brandsApiSlice.reducerPath]: brandsApiSlice.reducer,
            [categoriesApiSlice.reducerPath]: categoriesApiSlice.reducer,
            [cartApiSlice.reducerPath]: cartApiSlice.reducer,
            [orderApiSlice.reducerPath]: orderApiSlice.reducer,
            [productsApiSlice.reducerPath]: productsApiSlice.reducer,
            [subCategoryApiSlice.reducerPath]: subCategoryApiSlice.reducer,
            [recommendedProductsApiSlice.reducerPath]: recommendedProductsApiSlice.reducer,
            [userApiSlice.reducerPath]: userApiSlice.reducer,
            [userLocationApiSlice.reducerPath]: userLocationApiSlice.reducer,
            //slices
            cart: cartReducer,
            userLocation: userLocationReducer,
        },
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(categoriesApiSlice.middleware).concat(brandsApiSlice.middleware).concat(cartApiSlice.middleware).concat(recommendedProductsApiSlice.middleware).concat(orderApiSlice.middleware).concat(productsApiSlice.middleware).concat(subCategoryApiSlice.middleware).concat(userApiSlice.middleware).concat(userLocationApiSlice.middleware)
    })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']