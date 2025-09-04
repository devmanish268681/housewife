// app/not-deliverable/page.tsx
"use client";

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

export default function NotDeliverablePage() {
  return (
    <main className="flex flex-col items-center justify-center bg-gray-50 text-center px-6" style={{ height: "calc(100vh - 166px)" }}>
      <div className="bg-white p-10 rounded-2xl shadow-lg max-w-md">
        <FontAwesomeIcon
          icon={faMapMarkerAlt}
          className="mx-auto mb-6 text-red-500"
          size="4x"
        />
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          Sorry, we do not deliver to your location yet.
        </h1>
        <p className="text-gray-600 mb-6">
          We’re constantly expanding our services. Please check back soon or
          explore available areas.
        </p>
        <Link
          href="/"
          className="inline-block bg-red-600 text-white px-6 py-3 rounded-xl shadow hover:bg-red-700 transition"
        >
          Go Back Home
        </Link>
      </div>
    </main>
  );
}
