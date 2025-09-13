"use client";

import { useEffect, useState } from "react";

export function useLatLngByPincode(pincode?: string) {
    const [latLng, setLatLng] = useState<{ lat: string; lng: string, addr: string } | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!pincode) return;

        const fetchLatLng = async () => {
            setLoading(true);
            setError(null);
            try {
                const res = await fetch(
                    `https://nominatim.openstreetmap.org/search?postalcode=${pincode}&country=India&format=json`
                );
                const data = await res.json();

                if (data.length > 0) {
                    setLatLng({ lat: data[0].lat, lng: data[0].lon, addr: data[0]?.display_name });
                } else {
                    setError("Pincode not found");
                }
            } catch (err) {
                setError("Something went wrong");
            } finally {
                setLoading(false);
            }
        };

        fetchLatLng();
    }, [pincode]);

    return { latLng, loading, error };
}
