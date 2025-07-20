"use client";

import React, { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

//components
import Cart from "../cart/Cart";
import SignupModal from "../sign-up/SignUp";
import SigninModal from "../sign-in/SIgnIn";

//context and hooks
import { useAppSelector } from "@/lib/hooks";
import { useAuth } from "@/lib/context/authContext";

const Header = () => {
  //hooks
  const router = useRouter();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams.toString());
  const isCartOpen = searchParams.get("open");
  const isSignIn = searchParams.get("signIn");
  const [signInModalOpen, setSignInModalOpen] = useState(false);
  const [signUpModalOpen, setSignUpModalOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const {isLoggedIn} = useAuth();

  const cartItems = useAppSelector((state) => state.cart.items);
  const cartCount = cartItems.reduce((acc, value) => acc + value.quantity, 0);

  const handleCartClose = () => {
    setCartOpen(false);
    params.delete("open");
    router.push(`?${params.toString()}`);
  };

  useEffect(() => {
    setCartOpen(Boolean(isCartOpen));
  }, [isCartOpen]);

  useEffect(() => {
    setSignInModalOpen(Boolean(isSignIn));
  },[isSignIn])

  return (
    <>
      <header className="flex items-center justify-between border-b border-[#f4f0f0] px-10 py-3">
        <div className="flex items-center gap-8">
          <h2
            className="text-[#181111] text-lg font-bold cursor-pointer"
            onClick={() => router.push("/")}
          >
            HouseWife
          </h2>
          <nav className="flex items-center gap-6 text-sm text-[#181111] font-medium">
            <a href="#">Offers</a>
            <a href="#">Categories</a>
            <a href="#">Help</a>
          </nav>
        </div>
        <div className="flex gap-4 items-center">
          {/* Profile Icon */}
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

          {/* Cart Button */}
          
          <button
            className="relative h-10 px-4 bg-[#f4f0f0] text-[#181111] rounded-full"
            onClick={() => setCartOpen(true)}
          >
            🛒
            {cartItems?.length > 0 && cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </header>

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
    </>
  );
};

export default Header;
