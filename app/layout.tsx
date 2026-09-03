import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hiros4ARN — Open Network",
  description:
    "A free global 24/7 space dedicated to helping every human being discover their true self and life purpose — through knowledge, self-inquiry, and the evolution of human intelligence.",
  keywords: [
    "self discovery",
    "life purpose",
    "human intelligence",
    "consciousness",
    "free knowledge",
    "Hiros4ARN",
  ],
  openGraph: {
    title: "Hiros4ARN — Open Network",
    description:
      "No tuition. No barriers. Only truth. A free global space for self-discovery and human evolution.",
    type: "website",
  },
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Hiros4ARN",
  },
};

export const viewport: Viewport = {
  themeColor: "#070e1c",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <head>
        <link rel="apple-touch-icon" href="/logo.jpg" />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
