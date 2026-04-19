import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Luxe Interiors | Premium Interior Design Studio",
  description: "Transform your space with Luxe Interiors. We create bespoke interior designs that blend elegance, functionality, and timeless beauty.",
  keywords: "interior design, luxury interiors, home design, residential design, commercial design",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-white text-neutral-900">
        {children}
      </body>
    </html>
  );
}
