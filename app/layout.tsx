import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { StateProvider } from "./context/state";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Happy Birthday Mutia!",
  description: "Happy Birthday Mutia!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <StateProvider>
      <html lang="en">
        <body className={`${inter.className} bg-black text-white`}>
          {children}
        </body>
      </html>
    </StateProvider>
  );
}
