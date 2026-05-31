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
  title: "Prabhat Iron Works | Premium Agricultural Machinery Manufacturer",
  description:
    "Prabhat Iron Works — 12+ years of excellence in manufacturing Groundnut Decorticators, Almond Decorticators, Thresher Machines, Paddy Threshers & Garlic Separators. Based in Jasdan, Rajkot, Gujarat.",
  keywords: [
    "groundnut decorticator",
    "almond decorticator",
    "paddy thresher",
    "thresher machine",
    "garlic separator",
    "agricultural machinery",
    "farming equipment",
    "Prabhat Iron Works",
    "Jasdan",
    "Rajkot",
    "Gujarat",
  ],
  authors: [{ name: "Prabhat Iron Works" }],
  openGraph: {
    title: "Prabhat Iron Works | Premium Agricultural Machinery",
    description:
      "12+ years manufacturing high-quality agricultural equipment. Groundnut & Almond Decorticators, Threshers, Garlic Separators.",
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
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="font-sans antialiased">
        {/* ── Suppress Tawk.to / CORS log console errors during local development ── */}
        <Script id="suppress-console-errors" strategy="beforeInteractive">
          {`
            (function() {
              if (typeof window !== 'undefined') {
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
              }
            })();
          `}
        </Script>

        {children}

        {/* ── Tawk.to Live Chat Widget ── */}
        <Script id="tawk-to" strategy="lazyOnload">
          {`
            var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
            (function(){
              var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
              s1.async = true;
              s1.src = 'https://embed.tawk.to/6a1c26f033b64c1c2ac9099e/1jpuvg79t';
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
