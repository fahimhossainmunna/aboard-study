import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ReduxProvider } from "@/store/provider";
import Navbar from "@/components/common/Navbar";
import SmoothScroll from "@/components/common/SmoothScroll"; // SmoothScroll import korun
import ScrollToTop from "@/components/common/ScrollToTop";
import WhatsAppButton from "@/components/common/WhatsAppButton";
import Footer from "@/components/common/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aboard Study Assist Link",
  description: "Study in Malaysia made easy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} antialiased bg-white dark:bg-slate-950 text-slate-900 dark:text-white`}
      >
        <ReduxProvider>
          <Navbar />
          <SmoothScroll>
            <main className="bg-white min-h-screen">{children}</main>
            <WhatsAppButton />
            <ScrollToTop />
          </SmoothScroll>
          <Footer />
        </ReduxProvider>
      </body>
    </html>
  );
}
