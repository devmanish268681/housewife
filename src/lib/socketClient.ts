import { io } from "socket.io-client";

const socket = io("http://localhost:3001", {
  transports: ["websocket"],
});
socket.on("connect", () => {
  console.log("✅ Connected to socket server:", socket.id);
});
export default socket;
