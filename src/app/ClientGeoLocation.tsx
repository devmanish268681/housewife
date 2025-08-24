"use client";

import { useEffect } from "react";
import { useAppDispatch } from "@/lib/hooks";
import { useGeolocation } from "@/lib/hooks/use-geolocation";
import { setLocationData } from "@/lib/slices/userLocationSlice";

export default function ClientGeoLocation() {
    const dispatch = useAppDispatch();
    const {
        latitude,
        longitude,
        pinCode,
        address,
        isLoading: locationLoading,
        error: locationError,
        getCurrentLocation,
        hasLocation,
    } = useGeolocation();

    useEffect(() => {
        if (latitude || address || pinCode || longitude) {
            dispatch(
                setLocationData({
                    address: String(address),
                    pincode: String(pinCode),
                    latitude: Number(latitude),
                    longitude: Number(longitude),
                    hasLocation,
                    error: String(locationError),
                    loading: locationLoading,
                })
            );
        }
    }, [address, latitude, longitude, pinCode]);

    useEffect(() => {
        getCurrentLocation();
    }, []);

    return null;
}
