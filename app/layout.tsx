import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Kipaji Hub - Tanzania's Premier Music Platform",
  description: "Connect with music artists, learn from professionals, discover events, find promoters and investors. Your gateway to the Tanzanian music industry.",
  keywords: ["music", "tanzania", "artists", "learning", "events", "bongo flava", "promoters", "investors"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
