import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Prabhat Iron Works | Premium Agricultural Machinery Manufacturer Rajkot Gujarat",
  description:
    "Prabhat Iron Works — 12+ years of excellence manufacturing Groundnut Decorticators, Almond Decorticators, Thresher Machines, Paddy Threshers & Garlic Separators. Best agricultural machinery manufacturer in Jasdan, Rajkot, Gujarat, India.",
  keywords: [
    "groundnut decorticator manufacturer",
    "groundnut decorticator Rajkot",
    "almond decorticator manufacturer Gujarat",
    "paddy thresher price India",
    "thresher machine manufacturer Jasdan",
    "garlic separator machine price",
    "agricultural machinery manufacturer in Gujarat",
    "farming equipment suppliers Rajkot",
    "Prabhat Iron Works Jasdan",
    "peanut shelling machine factory Saurashtra"
  ],
  authors: [{ name: "Prabhat Iron Works" }],
  openGraph: {
    title: "Prabhat Iron Works | Premium Agricultural Machinery Rajkot Gujarat",
    description:
      "12+ years manufacturing high-quality agricultural equipment. Groundnut & Almond Decorticators, Threshers, Garlic Separators based in Jasdan, Rajkot.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <head>
        <link rel="icon" href="/PRABHATIRONWORKS/favicon.ico" />
        
        {/* ── JSON-LD Structured Data Schema for Local Business / Google Search & Maps SEO ── */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Prabhat Iron Works",
            "image": "https://veerbha1102.github.io/PRABHATIRONWORKS/images/logo.png",
            "@id": "https://veerbha1102.github.io/PRABHATIRONWORKS",
            "url": "https://veerbha1102.github.io/PRABHATIRONWORKS",
            "telephone": "+919825216584",
            "priceRange": "₹₹",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "14, Geeta Nagar, Atkot Road",
              "addressLocality": "Jasdan",
              "addressRegion": "Gujarat",
              "postalCode": "360050",
              "addressCountry": "IN"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 22.0185,
              "longitude": 71.2185
            },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday"
              ],
              "opens": "09:00",
              "closes": "19:00"
            },
            "sameAs": [
              "https://github.com/Veerbha1102/PRABHATIRONWORKS"
            ],
            "areaServed": [
              {
                "@type": "AdministrativeArea",
                "name": "Gujarat"
              },
              {
                "@type": "AdministrativeArea",
                "name": "Rajasthan"
              },
              {
                "@type": "AdministrativeArea",
                "name": "Madhya Pradesh"
              },
              {
                "@type": "AdministrativeArea",
                "name": "Maharashtra"
              }
            ],
            "knowsAbout": [
              "Groundnut Decorticators",
              "Almond Decorticators",
              "Garlic Separators",
              "Agricultural Threshers",
              "Agricultural Machinery Manufacturing"
            ]
          })}
        </script>
        {/* ── Suppress Tawk.to / CORS log console errors during local development ── */}
        <script>
          {`
            (function() {
              var orgError = console.error;
              console.error = function() {
                var firstArg = arguments[0];
                if (firstArg === true || firstArg === 'true' || 
                    (typeof firstArg === 'string' && 
                      (firstArg.indexOf('tawk') !== -1 || firstArg.indexOf('WebSocket') !== -1)
                    )) {
                  return;
                }
                orgError.apply(console, arguments);
              };
            })();
          `}
        </script>
      </head>
      <body className="font-sans antialiased">
        {children}

        {/* ── Tawk.to Live Chat Widget ── */}
        <Script id="tawk-to" strategy="afterInteractive">
          {`
            var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
            (function(){
              var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
              s1.async = true;
              s1.src = 'https://embed.tawk.to/6a1c26f033b64c1c2ac9099e/1jpv9m9bt';
              s1.charset = 'UTF-8';
              s1.setAttribute('crossorigin','*');
              s0.parentNode.insertBefore(s1, s0);
            })();
          `}
        </Script>
      </body>
    </html>
  );
}
