import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "Om Krishi Machinery - Agricultural Equipment & Tools Supplier in Budhabare, Nepal",
  description:
    "Leading supplier of agricultural machinery, carpentry tools, plumbing solutions, solar panels, and electrical equipment in Budhabare, Nepal. Sales, repair services, and spare parts available at competitive prices.",
  keywords: [
    "agricultural machinery Budhabare",
    "farming equipment Nepal",
    "carpentry tools Budhabare",
    "plumbing solutions Nepal",
    "solar panels Budhabare",
    "electrical equipment Nepal",
    "power tools Budhabare",
    "agricultural spare parts Nepal",
    "farm equipment repair Budhabare",
    "om krishi machinery",
    "agricultural tools Budhabare",
    "solar batteries Nepal",
    "irrigation systems Budhabare",
    "construction tools Nepal",
    "electrical wiring solutions Budhabare",
    "agricultural machinery shop near me",
    "best farming equipment Budhabare",
    "agricultural tools supplier Nepal",
  ].join(", "),
  openGraph: {
    title:
      "Om Krishi Machinery - Complete Agricultural & Industrial Solutions in Budhabare, Nepal",
    description:
      "One-stop solution for agricultural machinery, carpentry tools, plumbing equipment, solar systems, and electrical supplies in Budhabare, Nepal.",
    images: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Om%20logo%20png-axCoetxv1cvCwdzIY3mSfKA2r8joZi.png",
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
    title:
      "Om Krishi Machinery - Complete Agricultural & Industrial Solutions in Budhabare, Nepal",
    description:
      "One-stop solution for agricultural machinery, carpentry tools, plumbing equipment, solar systems, and electrical supplies in Budhabare, Nepal.",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Om%20logo%20png-axCoetxv1cvCwdzIY3mSfKA2r8joZi.png",
    ],
  },
  alternates: {
    canonical: "https://omkrishimachinery.com.np",
    languages: {
      "en-US": "https://omkrishimachinery.com.np",
      "ne-NP": "https://omkrishimachinery.com.np/ne",
    },
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
    google: "your-google-verification-code", // Replace with your actual Google verification code
  },
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

        {/* Enhanced Local Business Structured Data */}
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
              telephone: "+977-23-555-205",
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
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Sunday",
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                  ],
                  opens: "09:00",
                  closes: "18:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "Saturday",
                  opens: "00:00",
                  closes: "00:00",
                },
              ],
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
              areaServed: [
                {
                  "@type": "GeoCircle",
                  geoMidpoint: {
                    "@type": "GeoCoordinates",
                    latitude: 26.721292876761737,
                    longitude: 88.04743117541125,
                  },
                  geoRadius: "50000",
                },
              ],
              potentialAction: {
                "@type": "ReserveAction",
                target: {
                  "@type": "EntryPoint",
                  urlTemplate: "https://omkrishimachinery.com.np/contact",
                  inLanguage: "en-US",
                  actionPlatform: [
                    "http://schema.org/DesktopWebPlatform",
                    "http://schema.org/MobileWebPlatform",
                  ],
                },
                result: {
                  "@type": "Reservation",
                  name: "Service Appointment",
                },
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.8",
                ratingCount: "120",
              },
              review: [
                {
                  "@type": "Review",
                  author: {
                    "@type": "Person",
                    name: "Ramesh Sharma",
                  },
                  reviewRating: {
                    "@type": "Rating",
                    ratingValue: "5",
                    bestRating: "5",
                  },
                  datePublished: "2024-01-15",
                  reviewBody:
                    "The quality of agricultural tools from Om Krishi Machinery is exceptional. Their after-sales service is prompt and reliable.",
                },
                {
                  "@type": "Review",
                  author: {
                    "@type": "Person",
                    name: "Sita Tamang",
                  },
                  reviewRating: {
                    "@type": "Rating",
                    ratingValue: "5",
                    bestRating: "5",
                  },
                  datePublished: "2023-11-20",
                  reviewBody:
                    "I purchased a solar panel system from Om Krishi Machinery, and their installation service was professional and quick.",
                },
              ],
            }),
          }}
        />

        {/* Product Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ItemList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  item: {
                    "@type": "Product",
                    name: "Electric Grass Cutter",
                    image:
                      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/electric%20grass%20cutter-UVCJ5luhI8pCWH18pV08lj9T6Nf0oZ.png",
                    description:
                      "Professional-grade electric grass cutter with extended battery life and ergonomic design.",
                    brand: {
                      "@type": "Brand",
                      name: "Om Krishi Machinery",
                    },
                    offers: {
                      "@type": "Offer",
                      price: "12500",
                      priceCurrency: "NPR",
                      availability: "https://schema.org/InStock",
                    },
                  },
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  item: {
                    "@type": "Product",
                    name: "Chainsaw",
                    image:
                      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/man-with-chainsaw-cutting-tree-t-xDGD2MUB4o1XjisULj9hAf81LkHKYH.png",
                    description:
                      "Heavy-duty chainsaw designed for professional use with powerful engine.",
                    brand: {
                      "@type": "Brand",
                      name: "Om Krishi Machinery",
                    },
                    offers: {
                      "@type": "Offer",
                      price: "18900",
                      priceCurrency: "NPR",
                      availability: "https://schema.org/InStock",
                    },
                  },
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  item: {
                    "@type": "Product",
                    name: "Solar Panel 150W",
                    image:
                      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Untitled-XOMGqWFCSKHAuNkiM0X3H6TDuOy8W2.png",
                    description:
                      "High-efficiency 150W solar panel for sustainable energy generation.",
                    brand: {
                      "@type": "Brand",
                      name: "Om Krishi Machinery",
                    },
                    offers: {
                      "@type": "Offer",
                      price: "18000",
                      priceCurrency: "NPR",
                      availability: "https://schema.org/InStock",
                    },
                  },
                },
              ],
            }),
          }}
        />

        {/* FAQ Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "What types of agricultural machinery does Om Krishi Machinery sell?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Om Krishi Machinery offers a wide range of agricultural machinery including tillers, grass cutters, chainsaws, corn mills, and various farming tools. We also provide spare parts and repair services for all types of agricultural equipment.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Does Om Krishi Machinery offer installation services for solar panels?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, we provide professional installation services for all our solar products including solar panels, inverters, and complete solar power systems. Our technicians are trained to ensure optimal performance and longevity of your solar installation.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What areas does Om Krishi Machinery serve in Nepal?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Om Krishi Machinery is based in Budhabare, Province 1, Nepal, and we serve customers throughout the eastern region of Nepal including Jhapa, Morang, Sunsari, and surrounding districts. We can also arrange delivery to other parts of Nepal for bulk orders.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Does Om Krishi Machinery offer warranty on products?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, all products sold by Om Krishi Machinery come with manufacturer warranties ranging from 6 months to 3 years depending on the product type. Solar panels have extended warranties of up to 25 years for performance. We also provide after-sales service and support for all our products.",
                  },
                },
              ],
            }),
          }}
        />

        {/* BreadcrumbList Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://omkrishimachinery.com.np",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Products",
                  item: "https://omkrishimachinery.com.np/products",
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: "Services",
                  item: "https://omkrishimachinery.com.np/services",
                },
                {
                  "@type": "ListItem",
                  position: 4,
                  name: "Contact",
                  item: "https://omkrishimachinery.com.np/contact",
                },
              ],
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <ToastContainer
          position="top-center"
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
