"use client";

import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { signIn } from "next-auth/react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

// third-party
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

// types
import { SignupModalProps } from "./types";

const SignupModal: React.FC<SignupModalProps> = ({
  isOpen,
  onClose,
  onSignIn,
  loadingGoogle,
}) => {
  const router = useRouter();

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      const res = await signIn("credentials", {
        redirect: false,
        email: values.email,
        fullName: values.name,
        password: values.password,
        mode: "signup",
      });

      if (res?.error) {
        toast.error("Signup failed. Try again");
      } else {
        toast.success("Account created successfully!");
        resetForm();
        onClose();
        router.push("/");
      }
    },
  });

  const { values, handleSubmit, setFieldValue, touched, errors } = formik;

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
          Create an account
        </h2>
        <p className="text-sm text-gray-500 text-center mb-6">
          Join us and start shopping your groceries easily!
        </p>

        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              User name
            </label>
            <input
              type="text"
              value={values.name}
              placeholder="John Doe"
              onChange={(e) => setFieldValue("name", e.target.value)}
              className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-red-600 focus:ring-2 focus:ring-red-100 outline-none"
            />
            {touched.name && errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              value={values.email}
              placeholder="you@example.com"
              onChange={(e) => setFieldValue("email", e.target.value)}
              className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-red-600 focus:ring-2 focus:ring-red-100 outline-none"
            />
            {touched.email && errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              value={values.password}
              placeholder="••••••••"
              onChange={(e) => setFieldValue("password", e.target.value)}
              className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-red-600 focus:ring-2 focus:ring-red-100 outline-none"
            />
            {touched.password && errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password}</p>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full rounded-full bg-red-600 px-4 py-2 text-white font-medium hover:bg-red-600 transition"
          >
            Sign Up
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
          Already have an account?{" "}
          <span
            onClick={onSignIn}
            className="text-red-600 cursor-pointer font-medium hover:underline"
          >
            Sign In
          </span>
        </p>
      </div>
    </div>
  );
};

export default SignupModal;
