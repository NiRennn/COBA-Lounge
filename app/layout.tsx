import type { Metadata } from "next";
import "./globals.css";
import { Inter, Kosugi, Montserrat } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat" });
const kosugi = Kosugi({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-kosugi",
});

export const metadata: Metadata = {
  title: "Owl Lounge",
  description: "Лаунж-бар в центре города",
  icons: {
    icon: "/logos/Round-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${kosugi.variable} ${montserrat.variable}`}>{children}</body>
    </html>
  );
}
