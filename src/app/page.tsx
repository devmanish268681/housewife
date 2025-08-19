'use client'
import HeroBanner from "@/components/home/components/hero-section/HeroSection";
import HomePage from "@/components/home/Home";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { useGeolocation } from "@/lib/hooks/use-geolocation";
import { setLocationData } from "@/lib/slices/userLocationSlice";
import { useEffect } from "react";

export default function Home() {
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
            hasLocation:hasLocation,
            error:String(locationError),
            loading:locationLoading
          })
        );
      }
    }, [address, latitude, longitude, pinCode]);

  useEffect(() => {
    getCurrentLocation();
  },[]);

    const cartItems = useAppSelector((state) => state.userLocation);
    console.log(cartItems)
  return (
    <>
      <HeroBanner />
      <div style={{ maxWidth: "1440px", margin: "auto" }}>
        <HomePage />
      </div>
    </>
  );
}
