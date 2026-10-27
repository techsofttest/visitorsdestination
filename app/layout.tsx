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
    default: "Abu Dhabi Desert Safari | Morning, Evening & Private Tours",
    template: "%s | Abu Dhabi Desert Safari",
  },
  description:
    "Discover Abu Dhabi Desert Safari with morning, evening, overnight, VIP and private dune tours, BBQ dinners, quad biking, and authentic Arabian desert experiences.",
  metadataBase: new URL("https://abudhabidesert-safari.com"),
  openGraph: {
    title: "Abu Dhabi Desert Safari | Morning, Evening & Private Tours",
    description:
      "Official Abu Dhabi desert safari tours, dune bashing, luxury camps, and unforgettable desert experiences.",
    type: "website",
    locale: "en_AE",
    siteName: "Abu Dhabi Desert Safari",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#B85D19",
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
