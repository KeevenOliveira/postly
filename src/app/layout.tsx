import { Inter } from "next/font/google";

import Header from "@/components/Header";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Postly",
  description: "A modern blog viewer built with Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <div className="pt-16 min-h-screen">{children}</div>
      </body>
    </html>
  );
}
