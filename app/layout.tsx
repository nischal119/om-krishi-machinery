import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Analytics } from "@vercel/analytics/react";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "Om Krishi Machinery - Agricultural Equipment & Tools Supplier in Nepal",
  description:
    "Leading supplier of agricultural machinery, carpentry tools, plumbing solutions, solar panels, and electrical equipment in Nepal. Sales, repair services, and spare parts available.",
  keywords: [
    "agricultural machinery nepal",
    "farming equipment",
    "carpentry tools",
    "plumbing solutions",
    "solar panels nepal",
    "electrical equipment",
    "power tools",
    "agricultural spare parts",
    "farm equipment repair",
    "om krishi machinery",
    "agricultural tools budhabare",
    "solar batteries nepal",
    "irrigation systems",
    "construction tools",
    "electrical wiring solutions",
  ].join(", "),
  openGraph: {
    title: "Om Krishi Machinery - Complete Agricultural & Industrial Solutions",
    description:
      "One-stop solution for agricultural machinery, carpentry tools, plumbing equipment, solar systems, and electrical supplies in Nepal.",
    images: [
      {
        url: "/Om logo png.png",
        width: 1200,
        height: 630,
        alt: "Om Krishi Machinery Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Om Krishi Machinery - Complete Agricultural & Industrial Solutions",
    description:
      "One-stop solution for agricultural machinery, carpentry tools, plumbing equipment, solar systems, and electrical supplies in Nepal.",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Om%20logo%20png-axCoetxv1cvCwdzIY3mSfKA2r8joZi.png",
    ],
  },
  alternates: {
    canonical: "https://omkrishimachinery.com.np",
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
    google: "your-google-verification-code",
  },
  generator: "nischal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/Om logo png.png" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        {/* Enhanced Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HomeAndConstructionBusiness",
              name: "Om Krishi Machinery",
              image:
                "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Om%20logo%20png-axCoetxv1cvCwdzIY3mSfKA2r8joZi.png",
              "@id": "https://omkrishimachinery.com.np",
              url: "https://omkrishimachinery.com.np",
              telephone: "023-555-205",
              priceRange: "₨₨-₨₨₨",
              address: {
                "@type": "PostalAddress",
                streetAddress: "School Chowk",
                addressLocality: "Budhabare",
                addressRegion: "Province 1",
                postalCode: "57200",
                addressCountry: "NP",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 26.721292876761737,
                longitude: 88.04743117541125,
              },
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Sunday",
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                ],
                opens: "07:00",
                closes: "18:00",
              },
              sameAs: [
                "https://facebook.com/omkrishimachinery",
                "https://instagram.com/omkrishimachinery",
              ],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Products and Services",
                itemListElement: [
                  {
                    "@type": "OfferCatalog",
                    name: "Agricultural Equipment",
                    itemListElement: [
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Product",
                          name: "Agricultural Machinery",
                        },
                      },
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Product",
                          name: "Farming Tools",
                        },
                      },
                    ],
                  },
                  {
                    "@type": "OfferCatalog",
                    name: "Repair Services",
                    itemListElement: [
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "Equipment Repair",
                        },
                      },
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "Maintenance Services",
                        },
                      },
                    ],
                  },
                  {
                    "@type": "OfferCatalog",
                    name: "Solar Solutions",
                    itemListElement: [
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Product",
                          name: "Solar Panels",
                        },
                      },
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Product",
                          name: "Solar Batteries",
                        },
                      },
                    ],
                  },
                ],
              },
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Analytics />
        <Footer />
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </body>
    </html>
  );
}

import "./globals.css";
