import StoreProvider from "@/lib/store/StoreProvider";
import "./globals.css";
import Header from "@/components/header/Header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {/* <StoreProvider>{children}</StoreProvider> */}
        {children}
      </body>
    </html>
  );
}
