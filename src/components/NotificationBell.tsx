"use client";

import { useEffect, useState } from "react";
import socket from "@/lib/socketClient";

export default function NotificationBell({
  userId,
  isAdmin = false,
}: {
  userId: string;
  isAdmin?: boolean;
}) {
  const [notifications, setNotifications] = useState<any[]>([]);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    const room = isAdmin ? "admin" : `user-${userId}`;
    console.log("📤 Joining room:", room);
    socket.emit("joinRoom", room);

    socket.on("newNotification", (data) => {
      console.log("📥 Received notification from server:", data);
      setNotifications((prev) => [data, ...prev]);
    });

    return () => {
      socket.off("newNotification");
    };
  }, [userId, isAdmin]); // ✅ include in dependency array

  return (
    <div className="relative">
      <button
        onClick={() => setShowDropdown((prev) => !prev)}
        className="relative"
      >
        🔔
        {notifications.length > 0 && (
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-1">
            {notifications.length}
          </span>
        )}
      </button>

      {showDropdown && (
        <div className="absolute right-0 mt-2 w-64 bg-white shadow-lg border rounded">
          <div className="p-2 font-bold">Notifications</div>
          <ul>
            {notifications.map((n, idx) => (
              <li key={idx} className="p-2 border-t text-sm">
                {n.message}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
