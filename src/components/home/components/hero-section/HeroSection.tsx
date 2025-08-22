"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useGeolocation } from "@/lib/hooks/use-geolocation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { useAppSelector } from "@/lib/hooks";
import { useRouter } from "next/navigation";
import { Product } from "@/lib/types/products";
import { useGetProductsQuery } from "@/lib/slices/productsApiSlice";

const HeroBanner = () => {
  const [location, setLocation] = useState("your area");
  const [locationVisible, setLocationVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState<Product[]>([]);
  const { data: products } = useGetProductsQuery();
  const userLocation = useAppSelector((state) => state.userLocation);
  const { address: userAddress } = userLocation;
  const router = useRouter();

  const { address, getCurrentLocation, clearLocation, hasLocation } =
    useGeolocation();

  const handleLocationClick = () => {
    if (hasLocation) {
      clearLocation();
    } else {
      getCurrentLocation();
    }
  };

  useEffect(() => {
    if (searchTerm.trim() === "") {
      setSuggestions([]);
    } else {
      const filtered = products?.data.filter((p) =>
        p.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSuggestions(filtered ? filtered.slice(0, 5) : []);
    }
  }, [searchTerm, products]);

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    console.log(e.key);
    if (e.key === "Enter" && searchTerm.trim() !== "") {
      router.push(
        `/products?productName=${encodeURIComponent(searchTerm).replace(/%20/g, "+")}`
      );
    }
  };

  const handleSuggestionClick = (name: string) => {
    setSearchTerm(name);
    setSuggestions([]);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLocation("Delhi");
      setLocationVisible(true);
    }, 1200);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-teal-700 via-cyan-600 to-blue-800 text-white pt-20 md:pt-24 pb-28 px-4 sm:px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12 sm:gap-14 md:gap-16">
        {/* Left Text Content */}
        <div className="flex-1 max-w-xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight drop-shadow-lg">
            Delivering <span className="text-lime-400">fresh groceries</span> &{" "}
            <br />
            essentials <br />
            <span className="relative inline-block">
              to{" "}
              <span
                className={`font-extrabold transition-opacity ${locationVisible ? "opacity-100" : "opacity-0"
                  }`}
              >
                {location}
              </span>
            </span>
          </h1>

          <p className="mt-4 sm:mt-6 text-base sm:text-lg font-medium text-lime-200 max-w-md drop-shadow-sm">
            Pantry staples, beauty essentials, & more — delivered <br /> fast &
            fresh.
          </p>

          {/* Search Input */}
          <div className="mt-5 sm:mt-6 relative">
            <input
              type="text"
              placeholder="Search for products..."
              className="w-full px-5 py-3 text-teal-900 rounded-full bg-white placeholder:text-gray-500 shadow-lg focus:outline-none focus:ring-2 focus:ring-lime-400"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={handleKeyPress}
            />
            {suggestions.length > 0 && (
              <ul className="absolute left-0 right-0 mt-1 bg-white shadow-lg rounded-md z-50 max-h-40 overflow-auto">
                {suggestions.map((product) => (
                  <li
                    key={product.id}
                    className="text-black px-4 py-2 hover:bg-lime-100 cursor-pointer"
                    onClick={() => handleSuggestionClick(product.name)}
                  >
                    {product.name}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-6">
            <button
              onClick={() => router.push("/products")}
              aria-label="Shop Now"
              className="bg-lime-400 text-teal-900 font-bold rounded-full px-8 py-3 shadow-lg transform transition hover:scale-105 hover:shadow-xl"
            >
              🛒 Shop Now
            </button>
            {!hasLocation && !address && !userAddress && (
              <button
                onClick={handleLocationClick}
                aria-label="Allow Location"
                className="bg-teal-900/90 text-lime-400 font-bold rounded-full px-8 py-3 shadow-lg border-2 border-lime-400 transform transition hover:scale-105 hover:shadow-xl"
              >
                📍 Allow Location
              </button>
            )}
            {(hasLocation && address) ||
              (userAddress && (
                <span className="bg-teal-900/90 text-lime-400 font-bold rounded-full px-8 py-3 shadow-lg border-2 border-lime-400 transform transition hover:scale-105 hover:shadow-xl">
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    className={`w-4 h-4 text-red-600`}
                  />{" "}
                  {address || userAddress}
                </span>
              ))}
          </div>
        </div>

        {/* Right Image Content */}
        <div className="flex-1 max-w-lg w-full">
          <div className="relative w-full aspect-[4/3] md:h-[420px] drop-shadow-2xl rounded-3xl overflow-hidden shadow-lime-400 shadow-lg animate-float">
            <Image
              src="https://media.istockphoto.com/id/1316968335/photo/shopping-cart-full-of-food-on-yellow-background-grocery-and-food-store-concept.jpg?s=612x612&w=0&k=20&c=4dNcwlnUrmbAx_WXc777y-75EcKTa6Z9pKXuHLzG-S4="
              alt="Fresh groceries and essentials"
              fill
              style={{ objectFit: "cover" }}
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="rounded-3xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
