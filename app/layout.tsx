import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";

const serif = Cormorant_Garamond({ subsets: ["latin"], weight: ["500", "600"], variable: "--font-serif" });
const sans = Jost({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Tibeb Art & Living | Custom Wall Art, Addis Ababa",
  description:
    "Custom canvas and epoxy wall art in Addis Ababa, Ethiopia. Religious and modern abstract pieces for homes and offices. Order on Telegram or by phone.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
