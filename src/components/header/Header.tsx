"use client";

import React, { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

//components
import Cart from "../cart/Cart";
import SignupModal from "../sign-up/SignUp";
import SigninModal from "../sign-in/SIgnIn";
import { useAppSelector } from "@/lib/hooks";

const Header = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams.toString());
  const isCartOpen = searchParams.get("open");
  const [signInModalOpen, setSignInModalOpen] = useState(false);
  const [signUpModalOpen, setSignUpModalOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
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
        <div className="flex gap-4">
          <button
            onClick={() => setSignInModalOpen(true)}
            className="h-10 px-4 bg-[#e82630] text-white rounded-full text-sm font-bold"
          >
            Log In
          </button>
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
