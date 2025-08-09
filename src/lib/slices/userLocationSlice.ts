import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface LocationState {
    address: string | null;
    pincode: string | null;
    latitude: number | null;
    longitude: number | null;
    loading: boolean;
    error: string | null;
}

const initialState: LocationState = {
    address: null,
    pincode: null,
    latitude: null,
    longitude: null,
    loading: false,
    error: null,
};

const userLocationSlice = createSlice({
    name: "userLocationReducer",
    initialState,
    reducers: {
        setLocationData: (
            state,
            action: PayloadAction<{
                address: string;
                pincode: string;
                latitude: number;
                longitude: number;
            }>
        ) => {
            const { address, pincode, latitude, longitude } = action.payload;
            state.address = address;
            state.pincode = pincode;
            state.latitude = latitude;
            state.longitude = longitude;
        },
        setLocationLoading: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload;
        },
        setLocationError: (state, action: PayloadAction<string | null>) => {
            state.error = action.payload;
        },
    },
});

export const {
    setLocationData,
    setLocationLoading,
    setLocationError,
} = userLocationSlice.actions;

export default userLocationSlice.reducer;
