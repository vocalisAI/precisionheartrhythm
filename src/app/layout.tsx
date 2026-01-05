import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  // Ensure we have access to various weights for "sharp" bold text
  weight: ["300", "400", "500", "600", "700", "800"], 
});

export const metadata: Metadata = {
  title: {
    template: "%s | Precision Heart Rhythm",
    default: "Precision Heart Rhythm | Electrophysiology Practice",
  },
  description: "Dr. Patel's specialized electrophysiology practice in Sylvania, OH. Treating Atrial Fibrillation, Arrhythmias, and providing advanced cardiac device care.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.precisionheartrhythm.com",
    title: "Precision Heart Rhythm",
    description: "Expert cardiac electrophysiology care in Sylvania, OH.",
    siteName: "Precision Heart Rhythm",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.variable}>
        <Navbar />
          <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
