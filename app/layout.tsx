/* eslint-disable @next/next/no-page-custom-font */
import type { Metadata } from "next";
import { Navigation } from "./components/Navigation";
import { ScrollEffects } from "./components/ScrollEffects";
import { SiteFooter } from "./components/SiteFooter";
import "./globals.css";

export const metadata: Metadata = {
  title: "Yohanes Tesfaye Raw Coffee Export",
  description:
    "Premium Ethiopian green coffee export from Addis Ababa, Ethiopia.",
  icons: {
    icon: "/icons/ytce-icon.png",
    apple: "/icons/ytce-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <link
          rel="preload"
          as="image"
          href="/images/optimized/left-hero-image.webp"
        />
        <link
          rel="preload"
          as="image"
          href="/images/optimized/right-hero-image.webp"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Jost:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
        <ScrollEffects />
        <Navigation />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
