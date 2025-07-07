"use client";

import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

//third-party
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

//types
type SigninModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onSignUp: () => void;
  onGoogleSignIn?: () => void;
  loadingGoogle?: boolean;
};

const SigninModal: React.FC<SigninModalProps> = ({
  isOpen,
  onClose,
  onGoogleSignIn,
  onSignUp,
  loadingGoogle,
}) => {
  const router = useRouter();

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const { values, setFieldValue, handleSubmit } = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      const res = await signIn("credentials", {
        redirect: false, // avoid auto redirect
        email,
        password,
        mode: "login",
      });

      if (res?.error) {
        toast.error("Signup failed. Try again");
      } else {
        toast?.success("Account created successfully!");
        resetForm();
        router.push("/");
      }
    },
  });

  const { email, password } = values;
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-lg relative">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute right-3 top-3 text-gray-500 hover:text-gray-700"
          aria-label="Close modal"
        >
          <FontAwesomeIcon icon={faTimes} size="lg" />
        </button>

        <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
          Welcome back
        </h2>
        <p className="text-sm text-gray-500 text-center mb-6">
          Sign in to your account
        </p>

        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setFieldValue("email", e.target.value)}
              placeholder="you@example.com"
              className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-red-600 focus:ring-2 focus:ring-red-100 outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setFieldValue("password", e.target.value)}
              placeholder="••••••••"
              className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-red-600 focus:ring-2 focus:ring-red-100 outline-none"
            />
          </div>
          <button
            type="button"
            onClick={() => handleSubmit()}
            className="w-full rounded-full bg-red-600 px-4 py-2 text-white font-medium hover:bg-red-700 transition"
          >
            Sign In
          </button>
        </form>

        {/* OR Divider */}
        <div className="flex items-center my-4">
          <div className="flex-grow border-t border-gray-200"></div>
          <span className="px-3 text-sm text-gray-400">or</span>
          <div className="flex-grow border-t border-gray-200"></div>
        </div>

        {/* Google Signin Button */}
        <button
          onClick={() => signIn("google", { callbackUrl: "/" })}
          className="w-full flex items-center justify-center gap-2 rounded-full border border-gray-300 px-4 py-2 text-gray-700 hover:bg-gray-50 transition"
          type="button"
        >
          {loadingGoogle ? (
            <FontAwesomeIcon icon={faSpinner} spin />
          ) : (
            <>
              <FontAwesomeIcon
                icon={faGoogle}
                size="lg"
                className="text-red-500"
              />
              Continue with Google
            </>
          )}
        </button>

        <p className="text-sm text-center text-gray-500 mt-4">
          Don’t have an account?{" "}
          <span
            onClick={onSignUp}
            className="text-red-600 cursor-pointer font-medium hover:underline"
          >
            Sign Up
          </span>
        </p>
      </div>
    </div>
  );
};

export default SigninModal;
