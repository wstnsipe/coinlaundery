import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileCTABar from "@/components/MobileCTABar";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Coin Laundry | Guntersville, AL",
  description:
    "Coin Laundry in Guntersville, Alabama — modern self-service laundromat. Coin, card, and mobile app payment. Clean facility on US-431.",
  keywords: ["laundromat", "laundry", "Guntersville", "Alabama", "self-service", "coin laundry"],
  openGraph: {
    title: "Coin Laundry | Guntersville, AL",
    description: "Modern self-service laundromat in Guntersville, AL.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={jakarta.variable}>
      {/*
        pb-20 md:pb-0  →  reserves space for the fixed MobileCTABar on small screens
        so page content is never hidden behind it
      */}
      <body className="flex min-h-screen flex-col bg-white pb-20 md:pb-0">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <MobileCTABar />
      </body>
    </html>
  );
}
