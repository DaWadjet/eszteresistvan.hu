import PHProvider from "@/app/_components/PHProvider";
import type { Metadata } from "next";
import { Toaster } from "sonner";
import "./globals.css";

export const metadata: Metadata = {
  title: "Eszter & István házasodik",
  description:
    "Eszter és István esküvőjével kapcsolatos információk összegző weboldala",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-playfair antialiased mx-auto container p-4">
        <PHProvider>
          <main>{children}</main>
          <Toaster />
        </PHProvider>
      </body>
    </html>
  );
}
