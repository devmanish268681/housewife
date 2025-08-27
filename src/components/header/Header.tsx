"use client";

import React, { Suspense, useEffect, useState } from "react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";

//images
import maxymart from "../../../public/assets/maxymart_logo.svg";

//components
import Cart from "../cart/Cart";
import SignupModal from "../sign-up/SignUp";
import SigninModal from "../sign-in/SIgnIn";
import { Button } from "../common/Button";

//context and hooks
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { useAuth } from "@/lib/context/authContext";
import { useGeolocation } from "@/lib/hooks/use-geolocation";

//slices
import { useGetAllCartItemsQuery } from "@/lib/slices/cartApiSlice";
import { setLocationData } from "@/lib/slices/userLocationSlice";

//third-party
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationArrow,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import NotificationBell from "../NotificationBell";
import { useSession } from "next-auth/react";

const Header = () => {
  //hooks
  const router = useRouter();

  const searchParams = useSearchParams();
  const session = useSession();
  const userId = session?.data?.user?.id || "";
  const isAdmin = session?.data?.user?.role === "admin";
  console.log("userId", userId);
  console.log("isAdmin", isAdmin);

  const params = new URLSearchParams(searchParams.toString());
  const isCartOpen = searchParams.get("open");
  const isSignIn = searchParams.get("signIn");
  const [signInModalOpen, setSignInModalOpen] = useState(false);
  const [signUpModalOpen, setSignUpModalOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false); // NEW
  const { isLoggedIn, user } = useAuth();
  const { data: cartItemsData } = useGetAllCartItemsQuery();
  const userLocation = useAppSelector((state) => state.userLocation);
  const { address: userAddress } = userLocation;
  const {
    address,
    isLoading: locationLoading,
    getCurrentLocation,
    clearLocation,
    hasLocation,
  } = useGeolocation();
  const cartItems = useAppSelector((state) => state.cart.items);

  const cartCount = cartItemsData?.result?.reduce(
    (acc, value) => acc + value.quantity,
    0
  ) || cartItems?.reduce((acc, value) => acc + value.quantity, 0);

  const handleCartClose = () => {
    setCartOpen(false);
    params.delete("open");

    router.push(`?${params.toString()}`);
  };

  const handleLocationClick = () => {
    if (hasLocation) {
      clearLocation();
    } else {
      getCurrentLocation();
    }
  };

  useEffect(() => {
    setCartOpen(Boolean(isCartOpen));
  }, [isCartOpen]);

  useEffect(() => {
    setSignInModalOpen(Boolean(isSignIn));
  }, [isSignIn]);

  return (
    <Suspense>
      <NotificationBell userId={userId} isAdmin={isAdmin} />
      <header className="flex items-center justify-between border-b border-[#f4f0f0] px-4 sm:px-6 md:px-8 lg:px-10 py-2 sm:py-2">
        <div className="flex items-center gap-4 sm:gap-6 md:gap-8">
          <Image
            src={maxymart}
            alt="maxmart_logo"
            width={65}
            height={65}
            className="cursor-pointer"
            style={{ position: "relative", bottom: "8px" }}
            onClick={() => router.push("/")}
          />
          {/* Nav links - hidden on mobile */}
          <nav className="hidden lg:flex items-center gap-6 text-sm text-[#181111] font-medium">
            <a href="#">Offers</a>
            {user?.role === "admin" && <a href="/admin">My Tools</a>}
            <a href="#">Categories</a>
            <a href="/contact-us">Help</a>
          </nav>
        </div>
        {/* Hide login/profile and cart on mobile, show only on lg+ */}
        <div className="hidden lg:flex gap-2 sm:gap-3 md:gap-4 items-center">
          <Button
            onClick={handleLocationClick}
            className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-200 shadow-sm border ${hasLocation
              ? "bg-white text-black border-red-600 hover:bg-red-50"
              : "bg-red-600 hover:bg-red-700 text-white border-transparent hover:opacity-90"
              }`}
            disabled={locationLoading}
          >
            {/* Icon changes dynamically */}
            <FontAwesomeIcon
              icon={hasLocation ? faLocationDot : faLocationArrow}
              className={`w-4 h-4 ${
                hasLocation ? "text-red-600" : "text-white"
              }`}
            />

            {/* Main Text */}
            <div className="flex flex-col items-start text-sm leading-tight">
              <span className="font-medium">
                {locationLoading
                  ? "Getting location..."
                  : hasLocation || userAddress
                    ? "Delivering to"
                    : "Location"}
              </span>

              {/* Address Preview */}
              {(hasLocation && address) ||
                (userAddress && (
                  <span className="text-xs text-white truncate max-w-[150px]">
                    {address || userAddress}
                  </span>
                ))}
            </div>
          </Button>

          {isLoggedIn && (
            <button
              onClick={() => router.push("/profile")}
              className="h-10 w-10 bg-[#f4f0f0] rounded-full flex items-center justify-center overflow-hidden border hover:shadow-md transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#181111"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="cursor-pointer hover:opacity-80 transition"
              >
                <path d="M20 21v-2a4 4 0 0 0-3-3.87M4 21v-2a4 4 0 0 1 3-3.87M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"></path>
              </svg>
            </button>
          )}
          {!isLoggedIn && (
            <button
              onClick={() => setSignInModalOpen(true)}
              className="h-10 px-4 bg-[#e82630] text-white rounded-full text-sm font-bold"
            >
              Log In
            </button>
          )}
          <button
            className="relative h-10 px-4 bg-[#f4f0f0] text-[#181111] rounded-full"
            onClick={() => setCartOpen(true)}
          >
            🛒
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                {cartCount}
              </span>
            )}
          </button>
        </div>
        <button
          className="lg:hidden ml-2 p-2 rounded focus:outline-none focus:ring-2 focus:ring-red-400"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          aria-label="Open menu"
        >
          <svg
            width="28"
            height="28"
            fill="none"
            stroke="#181111"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4 7h20M4 14h20M4 21h20" />
          </svg>
        </button>
      </header>
      {/* Mobile Menu Drawer/Dropdown */}
      {mobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 z-40 bg-black bg-opacity-40"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="absolute top-0 left-0 w-full h-full bg-white shadow-2xl p-6 flex flex-col gap-6 animate-slideDown"
            onClick={(e) => e.stopPropagation()}
            style={{ minHeight: "60vh" }}
          >
            <button
              className="self-end mb-4 p-2"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <svg
                width="24"
                height="24"
                fill="none"
                stroke="#181111"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M6 6l12 12M6 18L18 6" />
              </svg>
            </button>
            <a
              href="#"
              className="flex items-center gap-3 text-[#000000] text-lg font-semibold py-3 px-4 rounded-xl bg-white/80 shadow border-b border-[#ffe3e3] hover:bg-[#fffbe6] transition"
            >
              <svg
                width="22"
                height="22"
                fill="none"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="9" />
                <path d="M7 11h8" />
              </svg>
              Offers
            </a>
            <a
              href="#"
              className="flex items-center gap-3 text-[#000000] text-lg font-semibold py-3 px-4 rounded-xl bg-white/80 shadow border-b border-[#ffe3e3] hover:bg-[#fffbe6] transition"
            >
              <svg
                width="22"
                height="22"
                fill="none"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="4" y="4" width="16" height="16" rx="4" />
                <path d="M8 8h8v8H8z" />
              </svg>
              Categories
            </a>
            <a
              href="#"
              className="flex items-center gap-3 text-[#000000] text-lg font-semibold py-3 px-4 rounded-xl bg-white/80 shadow border-b border-[#ffe3e3] hover:bg-[#fffbe6] transition"
            >
              <svg
                width="22"
                height="22"
                fill="none"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="9" />
                <path d="M11 7v4l3 3" />
              </svg>
              Help
            </a>
            <div className="flex flex-col gap-4 mt-8">
              {isLoggedIn ? (
                <button
                  onClick={() => {
                    router.push("/profile");
                    setMobileMenuOpen(false);
                  }}
                  className="h-12 w-full bg-[#e82630] text-white rounded-full flex items-center justify-center gap-2 text-lg font-bold shadow hover:bg-[#d91c1c] transition"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#fff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 21v-2a4 4 0 0 0-3-3.87M4 21v-2a4 4 0 0 1 3-3.87M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"></path>
                  </svg>
                  Profile
                </button>
              ) : (
                <button
                  onClick={() => {
                    setSignInModalOpen(true);
                    setMobileMenuOpen(false);
                  }}
                  className="h-12 w-full bg-[#e82630] text-white rounded-full text-lg font-bold shadow hover:bg-[#d91c1c] transition"
                >
                  Log In
                </button>
              )}
              <button
                className="relative h-12 w-full bg-white/80 text-[#e82630] rounded-full flex items-center justify-center font-bold shadow border hover:bg-[#fffbe6] transition"
                onClick={() => {
                  setCartOpen(true);
                  setMobileMenuOpen(false);
                }}
              >
                <span className="mr-2">🛒</span>
                Cart
                {cartItemsData &&
                  cartItemsData?.result?.length > 0 &&
                  cartCount &&
                  cartCount > 0 && (
                    <span className="absolute top-1 right-6 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                      {cartCount}
                    </span>
                  )}
              </button>
            </div>
          </div>
        </div>
      )}
      <Cart isOpen={cartOpen} onClose={() => handleCartClose()} />
      <SignupModal
        isOpen={signUpModalOpen}
        onClose={() => setSignUpModalOpen(false)}
        onGoogleSignIn={() => console.log("trur")}
        loadingGoogle={false}
        onSignIn={() => {
          setSignInModalOpen(true);
          setSignUpModalOpen(false);
        }}
      />
      <SigninModal
        isOpen={signInModalOpen}
        onClose={() => setSignInModalOpen(false)}
        onGoogleSignIn={() => setSignUpModalOpen(false)}
        loadingGoogle={false}
        onSignUp={() => {
          setSignUpModalOpen(true);
          setSignInModalOpen(false);
        }}
      />
    </Suspense>
  );
};

export default Header;
