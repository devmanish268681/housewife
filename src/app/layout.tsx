import StoreProvider from "@/lib/store/StoreProvider";
import "./globals.css";
import Header from "@/components/header/Header";
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
        {/* <StoreProvider>{children}</StoreProvider> */}
        {children}
        </AuthProvider>
      </body>
    </html>
  );
}
