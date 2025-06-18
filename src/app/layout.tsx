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
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="WZI5fGl9dqE0aUaonzzy61iDhC47lBbn8frMz8BGJYU" />
      </head>
      <body
        className={`${dmSerifDisplay.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
