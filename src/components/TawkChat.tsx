"use client";

import { useEffect, useRef } from "react";

/**
 * Tawk.to section-aware integration.
 * Tracks which section the user is viewing and sends events to Tawk.to,
 * which can be used to configure automated triggers in the Tawk.to dashboard.
 */
export default function TawkChat() {
  const lastSection = useRef<string>("");

  useEffect(() => {
    const sections = ["home", "about", "products", "brochure", "contact"];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.target.id !== lastSection.current) {
            lastSection.current = entry.target.id;

            // Check if we are running locally to avoid socket failures on localhost
            const isLocalhost =
              typeof window !== "undefined" &&
              (window.location.hostname === "localhost" ||
               window.location.hostname === "127.0.0.1" ||
               window.location.hostname.startsWith("10."));

            if (isLocalhost) {
              // Skip socket tracking calls on localhost to prevent Tawk.to widget crashes
              return;
            }

            // Send section view event to Tawk.to
            const tawk = (window as any).Tawk_API;

            if (tawk && typeof tawk.addEvent === "function") {
              tawk.addEvent("section_view", {
                section: entry.target.id,
                timestamp: new Date().toISOString(),
              });
            }

            // Set visitor attributes with current section
            if (tawk && typeof tawk.setAttributes === "function") {
              tawk.setAttributes(
                {
                  currentSection: entry.target.id,
                },
                (err: unknown) => {
                  if (err) console.log("Tawk setAttributes error:", err);
                }
              );
            }
          }
        });
      },
      {
        threshold: 0.4,
        rootMargin: "-80px 0px 0px 0px",
      }
    );

    // Wait for DOM to be ready
    const timer = setTimeout(() => {
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.observe(el);
      });
    }, 1000);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, []);

  return null; // This component doesn't render anything
}
