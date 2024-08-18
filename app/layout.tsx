import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import ReduxProvider from "@/store/provider";
import { cn } from "@/lib/utils";
import { Toaster } from "react-hot-toast";

const inter = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Profyi-ecart",
  description: "ecommerce cart application nextjs",
  icons: [
    {
      rel: "icon",
      url: "/favicon.ico",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="favicon.ico" sizes="any" />
      </head>
      <body className={cn(inter.className)}>
        <ReduxProvider>
          <Navbar />
          <main className="max-w-5xl mx-auto pt-8">{children}</main>
          <Toaster position="top-right" />
        </ReduxProvider>
      </body>
    </html>
  );
}
