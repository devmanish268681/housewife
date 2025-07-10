import { Toaster } from "react-hot-toast";

//styles
import "./globals.css";

//components
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

//store
import StoreProvider from "@/lib/store/StoreProvider";

//utils
import AuthProvider from "@/lib/auth/AuthProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <Header />
          <StoreProvider>{children}</StoreProvider>
          <Footer />
        </AuthProvider>
        <Toaster
          position="top-right"
          reverseOrder={false}
          toastOptions={{
            success: {
              style: {
                background: "#dcfce7",
                color: "#16a34a",
              },
              iconTheme: {
                primary: "#4ade80",
                secondary: "#f0fdf4",
              },
            },
            error: {
              style: {
                background: "#fee2e2",
                color: "#b91c1c",
              },
              iconTheme: {
                primary: "#f87171",
                secondary: "#fef2f2",
              },
            },
          }}
        />
      </body>
    </html>
  );
}
