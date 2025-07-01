"use client";
import React, { useState } from "react";
import { signIn } from "next-auth/react";

const Header = () => {
  const [fullName, setFullName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [view, setView] = useState<"login" | "signup">("login");

  const handleCredentialsLogin = async () => {
    console.log("view", view);

    if (view === "login") {
      const result = await signIn("credentials", {
        redirect: false,
        email,
        password,
        mode: "signin",
      });

      if (result?.error) {
        alert("Login failed: " + result.error);
      } else {
        setIsOpen(false);
      }
    } else {
      // Simple frontend validation
      if (!fullName || !email || !password || !confirmPassword) {
        alert("Please fill in all fields");
        return;
      }
      if (password !== confirmPassword) {
        alert("Passwords do not match");
        return;
      }

      // Replace this with actual sign-up API if needed
      console.log("Signup values:", { fullName, email, password });

      const result = await signIn("credentials", {
        redirect: false,
        fullName,
        email,
        password,
        mode: "signup",
      });

      if (result?.error) {
        alert("Sign Up failed: " + result.error);
      } else {
        setIsOpen(false);
      }
    }
  };

  return (
    <>
      <header className="flex items-center justify-between border-b border-[#f4f0f0] px-10 py-3">
        <div className="flex items-center gap-8">
          <h2 className="text-[#181111] text-lg font-bold">HouseWife</h2>
          <nav className="flex items-center gap-6 text-sm text-[#181111] font-medium">
            <a href="#">Offers</a>
            <a href="#">Categories</a>
            <a href="#">Help</a>
          </nav>
        </div>
        <div className="flex gap-4">
          <button
            onClick={() => setIsOpen(true)}
            className="h-10 px-4 bg-[#e82630] text-white rounded-full text-sm font-bold"
          >
            Log In
          </button>
          <button className="h-10 px-4 bg-[#f4f0f0] text-[#181111] rounded-full">
            🛒
          </button>
        </div>
      </header>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
          <div className="bg-white w-full max-w-sm rounded-lg p-6 relative shadow-xl">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-3 text-gray-500 text-xl font-bold"
            >
              ×
            </button>

            {/* Toggle between login/signup */}
            <div className="flex justify-center mb-6">
              <button
                className={`px-4 py-1 text-sm font-semibold border-b-2 ${
                  view === "login"
                    ? "border-[#e82630] text-[#e82630]"
                    : "text-gray-500"
                }`}
                onClick={() => setView("login")}
              >
                Login
              </button>
              <button
                className={`px-4 py-1 text-sm font-semibold border-b-2 ml-4 ${
                  view === "signup"
                    ? "border-[#e82630] text-[#e82630]"
                    : "text-gray-500"
                }`}
                onClick={() => setView("signup")}
              >
                Sign Up
              </button>
            </div>

            {/* Shared Google sign-in */}
            <button
              className="w-full bg-[#4285F4] text-white py-2 px-4 rounded-md mb-4 font-medium"
              onClick={() => signIn("google")}
            >
              Continue with Google
            </button>

            <div className="my-4 text-center text-sm text-gray-500">
              or use credentials
            </div>

            {view === "login" ? (
              <>
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full mb-3 px-4 py-2 border rounded-md text-sm"
                />
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full mb-4 px-4 py-2 border rounded-md text-sm"
                />
                <button
                  className="w-full bg-[#e82630] text-white py-2 rounded-md font-semibold"
                  onClick={handleCredentialsLogin}
                >
                  Sign In
                </button>
              </>
            ) : (
              <>
                <input
                  type="text"
                  placeholder="Full Name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full mb-3 px-4 py-2 border rounded-md text-sm"
                />
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full mb-3 px-4 py-2 border rounded-md text-sm"
                />
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full mb-3 px-4 py-2 border rounded-md text-sm"
                />
                <input
                  type="password"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full mb-4 px-4 py-2 border rounded-md text-sm"
                />
                <button
                  className="w-full bg-[#e82630] text-white py-2 rounded-md font-semibold"
                  onClick={handleCredentialsLogin}
                >
                  Sign Up
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
