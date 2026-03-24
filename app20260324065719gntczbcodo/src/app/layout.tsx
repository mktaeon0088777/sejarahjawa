import type { Metadata } from "next";
import { Cinzel, Lora, Inter } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import GlobalClientEffects from "@/components/GlobalClientEffects";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import "./globals.css";

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Sejarah Jawa - Dokumentasi Artefak & Peradaban Pulau Jawa",
    template: "%s | Sejarah Jawa",
  },
  description:
    "Jelajahi dokumentasi lengkap sejarah dan peradaban Pulau Jawa dari era Pra-Masehi hingga kini. Temukan artefak, kerajaan, dan warisan budaya Jawa.",
  keywords: [
    "sejarah jawa",
    "peradaban jawa",
    "artefak jawa",
    "kerajaan jawa",
    "Homo Erectus Sangiran",
    "Majapahit",
    "Tarumanagara",
    "Sriwijaya",
    "candi jawa",
    "prasasti jawa",
    "arkeologi jawa",
  ],
  authors: [{ name: "Sejarah Jawa Project" }],
  creator: "Sejarah Jawa",
  publisher: "Sejarah Jawa",
  metadataBase: new URL("https://sejarah-jawa.pages.dev"),
  alternates: {
    canonical: "/",
    languages: {
      "id-ID": "/id",
      "en-US": "/en",
    },
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    alternateLocale: "en_US",
    siteName: "Sejarah Jawa",
    title: "Sejarah Jawa - Dokumentasi Artefak & Peradaban Pulau Jawa",
    description:
      "Jelajahi dokumentasi lengkap sejarah dan peradaban Pulau Jawa dari era Pra-Masehi hingga kini.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Sejarah Jawa - Dokumentasi Artefak & Peradaban",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sejarah Jawa - Dokumentasi Artefak & Peradaban Pulau Jawa",
    description:
      "Jelajahi dokumentasi lengkap sejarah dan peradaban Pulau Jawa dari era Pra-Masehi hingga kini.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={`${cinzel.variable} ${lora.variable} ${inter.variable} antialiased font-lora`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <GlobalClientEffects />
          <Toaster />
          <Sonner />
        </ThemeProvider>
      </body>
    </html>
  );
}
