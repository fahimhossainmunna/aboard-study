import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ReduxProvider } from "@/store/provider";
import { ThemeProvider } from "@/store/ThemeProvider";
import Navbar from "@/components/common/Navbar";
import SmoothScroll from "@/components/common/SmoothScroll"; // SmoothScroll import korun
import ScrollToTop from "@/components/common/ScrollToTop";

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
      <body className={`${inter.className} antialiased bg-white dark:bg-slate-950 text-slate-900 dark:text-white`}>
        <ReduxProvider>
          <ThemeProvider 
            attribute="class" 
            defaultTheme="light" 
            enableSystem={false}
          >
           
            <Navbar />
            <SmoothScroll>
              <main className="bg-white min-h-screen">
                {children}
              </main>
              <ScrollToTop/>
            </SmoothScroll>
          </ThemeProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}