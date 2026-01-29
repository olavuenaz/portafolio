import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "../globals.css"; 
import Navbar from "../../components/navbar";
import Footer from "../../components/Footer";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { ThemeProvider } from "../../components/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "black",
};

export const metadata: Metadata = {
  title: {
    template: "%s | Eduardo", 
    default: "Eduardo | Ingeniero Civil en Computación e Informática",
  },
  description: "Desarrollador Full Stack especializado en Next.js, IA y System Design.",
  keywords: ["Full Stack", "Next.js", "React", "IA", "Ingeniería", "Chile", "System Design"],
  authors: [{ name: "Eduardo" }],
  openGraph: {
    title: "Eduardo | Ingeniero en Computación",
    description: "Portafolio profesional - Especializado en desarrollo Full Stack e IA",
    type: "website",
    siteName: "Eduardo Portfolio",
  },
  robots: {
    index: true,
    follow: true,
  },
};

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>; 
};

export default async function RootLayout({
  children,
  params
}: Props) {
  const { locale } = await params;

  const messages = await getMessages();

  return (
    <html lang={locale} className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.className} flex flex-col min-h-screen bg-white dark:bg-black text-black dark:text-white antialiased transition-colors duration-300`}>
        <NextIntlClientProvider messages={messages}>
          
          <ThemeProvider 
            attribute="class" 
            defaultTheme="system" 
            enableSystem
            disableTransitionOnChange
          >
            
            <Navbar />
            
            <div className="flex-grow">
              {children}
            </div>
            
            <Footer />

            <Analytics />
            <SpeedInsights />

          </ThemeProvider>
          
        </NextIntlClientProvider>
      </body>
    </html>
  );
}