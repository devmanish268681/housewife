import { Toaster } from "react-hot-toast";

//styles
import "./globals.css";
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

//components
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

//store
import StoreProvider from "@/lib/store/StoreProvider";

//utils
import AuthProvider from "@/lib/auth/AuthProvider";
import { icon } from "@fortawesome/fontawesome-svg-core";
import { AllCommunityModule, ModuleRegistry } from "ag-grid-community";
import Script from "next/script";

ModuleRegistry.registerModules([AllCommunityModule]);

export const metadata = {
  title: {
    default: "Maxymart – Freshness at Your Doorstep",
    template: "%s | My App",
  },
  icons: {
    icon: "assets/maxymart_logo.svg",
  },
  description: "Maxymart - Your one-stop grocery stor",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <StoreProvider>
          <AuthProvider>
            <Header />
            {children}
            <Footer />
          </AuthProvider>
        </StoreProvider>
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
        <div id="modalRoot"></div>
        <Script src="https://checkout.razorpay.com/v1/checkout.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
