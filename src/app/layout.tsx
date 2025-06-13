import type { Metadata } from "next";
import { DM_Serif_Display } from "next/font/google";
import "./globals.css";

const dmSerifDisplay = DM_Serif_Display({
  weight: ["400"],
  variable: "--font-dm-serif-display",
  subsets: ["latin"],
  display: 'swap', // Optional
  preload: true
});

export const metadata: Metadata = {
  title: "Richard Qumsieh | React Developer",
  description: "Professional React Development Services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dmSerifDisplay.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
