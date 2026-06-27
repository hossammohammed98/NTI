import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Marketing",
  description: "Next.js Landing Page",
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({
  children,
}: RootLayoutProps) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}