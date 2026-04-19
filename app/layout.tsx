import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Icraft Designz & Interiors | Interior Designers in Hyderabad",
  description: "Luxury Duplex Interiors Designed to Perfection ✨ Looking for expert duplex house interior designers in Hyderabad? Icraft Designz & Interiors specializes in creating modern, elegant, and functional duplex home interiors with complete end-to-end execution.",
  keywords: "interior design, duplex interiors, hyderabad, luxury interiors, home design",
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
