import type { Metadata } from "next";
import { Geist, Geist_Mono, Share_Tech, Roboto } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const shareTech = Share_Tech({
  variable: "--font-share-tech",
  subsets: ["latin"],
  weight: "400",
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "SRPO: Reflection-Aware Multimodal Reasoning",
  description:
    "A novel framework that enhances the reasoning capabilities of multimodal large language models",
  keywords: [
    "SRPO",
    "Multimodal LLM",
    "Reasoning",
    "Reflection-Aware",
    "Reinforcement Learning",
    "Machine Learning",
    "Artificial Intelligence",
    "Deep Learning",
  ],
  openGraph: {
    title: "SRPO: Enhancing Multimodal LLM Reasoning via Reflection-Aware RL",
    description:
      "A novel framework that enhances the reasoning capabilities of multimodal large language models",
    siteName: "SRPO",
    url: "https://srpo.pages.dev",
    images: [
      {
        url: "https://srpo.pages.dev/og_image_motivation.png",
        width: 1200,
        height: 630,
        alt: "SRPO - A novel framework that enhances the reasoning capabilities of multimodal large language models",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`font-roboto ${geistSans.variable} ${shareTech.variable} ${geistMono.variable} ${roboto.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
