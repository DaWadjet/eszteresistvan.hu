import PHProvider from "@/app/_components/PHProvider";
import type { Metadata } from "next";
import { Libre_Baskerville, Playfair_Display } from "next/font/google";
import { headers } from "next/headers";
import { Toaster } from "sonner";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Eszter & István házasodik",
    description: "2025. október 10., Neszmély",
    metadataBase: new URL(`https://${(await headers()).get("host")}`),
  };
}

const playfair = Playfair_Display({
  display: "swap",
  preload: true,
  subsets: ["latin"],
});

const libre = Libre_Baskerville({
  display: "swap",
  style: ["italic", "normal"],
  preload: true,
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <PHProvider>
        <body className="font-playfair text-kombu-green selection:bg-[#566235]/40 caret-kombu-green antialiased mx-auto max-w-screen overflow-x-hidden overscroll-none sm:bg-[#BFCFBB]/60 bg-[#BFCFBB]/30">
          <main>{children}</main>
          <Toaster />
        </body>
      </PHProvider>
    </html>
  );
}
