import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "@/styles/globals.css";
import Header from "@/components/nav/Header/page";
import Footer from "@/components/nav/Footer/Footer";

const montserrat = Montserrat({
  variable: "--font-montserrat-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Garden Route Getaways",
  description: "We are proud to say that we have a high-end Market reach which includes a mix of local travellers and international visitors.",
  keywords: "main keywords for website to rank for",
  metadataBase: new URL('https://gardenroutegetaways.co.za'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
      'de-DE': '/de-DE',
    },
  },
  openGraph: {
    title: 'Garden Route Getaways',
    description: 'We are proud to say that we have a high-end Market reach which includes a mix of local travellers and international visitors.',
    url: 'https://gardenroutegetaways.co.za',
    siteName: 'Garden Route Getaways',
    images: [
      {
        url: '', // Must be an absolute URL
        width: 800,
        height: 600,
      },
      {
        url: '', // Must be an absolute URL
        width: 1800,
        height: 1600,
        alt: '',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable}`}>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
