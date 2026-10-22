import type { Metadata, Viewport } from "next";
import { Bebas_Neue, DM_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  weight: "400",
  variable: "--font-bebas",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Visitors Destination | Discover the Emirates",
    template: "%s | Visitors Destination",
  },
  description:
    "Discover Abu Dhabi, Dubai, desert safaris, sightseeing tours, private transfers, and memorable UAE travel experiences with Visitors Destination.",
  metadataBase: new URL("https://visitorsdestination.com"),
  openGraph: {
    title: "Visitors Destination | Discover the Emirates",
    description:
      "Thoughtfully planned UAE tours, desert adventures, and travel services.",
    type: "website",
    locale: "en_AE",
    siteName: "Visitors Destination",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#8B181B",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${playfair.variable} ${bebasNeue.variable}`}>
      <body className={dmSans.className}>{children}</body>
    </html>
  );
}
