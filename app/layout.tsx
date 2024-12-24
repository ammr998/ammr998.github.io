import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { NextUIProvider } from "@nextui-org/system";
import { Analytics } from "@vercel/analytics/react";

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Ayman Mohammed | Portfolio",
  description: "Ayman Mohammed's portfolio - Computer Engineering & Autonomous Systems student, specializing in AI/ML, Cybersecurity, and Full-Stack Development.",
  keywords: [
    "Ayman Mohammed",
    "Portfolio",
    "Computer Engineering",
    "Autonomous Systems",
    "AI/ML",
    "Cybersecurity",
    "Full-Stack Development",
    "Dubai",
    "UAE",
    "University of Wollongong in Dubai"
  ],
  authors: [{ name: "Ayman Mohammed" }],
  creator: "Ayman Mohammed",
  publisher: "Ayman Mohammed",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://aymnmohd.tech",
    siteName: "Ayman Mohammed Portfolio",
    title: "Ayman Mohammed | Portfolio",
    description: "Computer Engineering & Autonomous Systems student, specializing in AI/ML, Cybersecurity, and Full-Stack Development.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ayman Mohammed Portfolio"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Ayman Mohammed | Portfolio",
    description: "Computer Engineering & Autonomous Systems student, specializing in AI/ML, Cybersecurity, and Full-Stack Development.",
    images: ["/og-image.png"]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body 
        className={`${poppins.className} min-h-screen bg-black text-white antialiased`}
        suppressHydrationWarning
      >
        <NextUIProvider>
          <div className="relative z-0">
            {children}
          </div>
        </NextUIProvider>
        <Analytics />
      </body>
    </html>
  );
}
