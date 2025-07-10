import { configureStore } from '@reduxjs/toolkit'
import { categoriesApiSlice } from '../slices/categoriesApiSlice'

export const makeStore = () => {
    return configureStore({
        reducer: {
            //reducers
            [categoriesApiSlice.reducerPath]:categoriesApiSlice.reducer
        },
        middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(categoriesApiSlice.middleware)
    })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']