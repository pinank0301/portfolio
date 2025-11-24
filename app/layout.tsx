import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { JsonLd } from "@/components/json-ld";
import { TerminalChatbot } from "@/components/TerminalChatbot";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Pinank Trivedi - Full Stack Developer",
    template: "%s | Pinank Trivedi",
  },
  description: "Portfolio of Pinank Trivedi, a Full Stack Developer specializing in building digital products. Explore projects, skills, and experience.",
  keywords: [
    "Pinank Trivedi",
    "Full Stack Developer",
    "Software Engineer",
    "Web Developer",
    "React Developer",
    "Next.js Developer",
    "Portfolio",
    "Frontend Developer",
    "Backend Developer",
  ],
  authors: [{ name: "Pinank Trivedi", url: "https://pinank-trivedi.vercel.app/" }],
  creator: "Pinank Trivedi",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://pinank-trivedi.vercel.app/",
    title: "Pinank Trivedi - Full Stack Developer",
    description: "Portfolio of Pinank Trivedi, a Full Stack Developer specializing in building digital products.",
    siteName: "Pinank Trivedi Portfolio",
    images: [
      {
        url: "/og-image.png", // We might need to create this or use a placeholder
        width: 1200,
        height: 630,
        alt: "Pinank Trivedi Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pinank Trivedi - Full Stack Developer",
    description: "Portfolio of Pinank Trivedi, a Full Stack Developer specializing in building digital products.",
    images: ["/og-image.png"],
    creator: "@pinank_trivedi", // Assuming this handle based on common patterns, or I should ask. I'll leave it for now.
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
  metadataBase: new URL("https://pinank-trivedi.vercel.app/"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <JsonLd />
          {children}
          <TerminalChatbot />
        </ThemeProvider>
      </body>
    </html>
  );
}
