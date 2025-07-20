import React from "react";

const QuickActions: React.FC = () => (
  <div className="max-w-2xl mx-auto mt-8 flex gap-4 justify-center">
    <button className="flex-1 bg-white rounded-xl shadow p-4 flex flex-col items-center hover:bg-yellow-50 transition">
      <svg
        width="28"
        height="28"
        fill="none"
        stroke="#181111"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 6h18M3 12h18M3 18h18" />
      </svg>
      <span className="mt-2 text-sm font-medium text-[#181111]">Orders</span>
    </button>
    <button className="flex-1 bg-white rounded-xl shadow p-4 flex flex-col items-center hover:bg-yellow-50 transition">
      <svg
        width="28"
        height="28"
        fill="none"
        stroke="#181111"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 10V21H3V10M7 21V7a5 5 0 0 1 10 0v14" />
      </svg>
      <span className="mt-2 text-sm font-medium text-[#181111]">Addresses</span>
    </button>
    <button className="flex-1 bg-white rounded-xl shadow p-4 flex flex-col items-center hover:bg-yellow-50 transition">
      <svg
        width="28"
        height="28"
        fill="none"
        stroke="#181111"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="14" cy="14" r="10" />
        <path d="M14 10v4l2 2" />
      </svg>
      <span className="mt-2 text-sm font-medium text-[#181111]">Rewards</span>
    </button>
  </div>
);

export default QuickActions; 