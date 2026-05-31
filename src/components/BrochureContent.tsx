"use client";

import { products } from "@/data/products";

/**
 * Hidden brochure content component — rendered in the DOM but hidden.
 * html2pdf.js captures this to generate the downloadable PDF.
 * Uses inline styles for PDF rendering consistency.
 */
export default function BrochureContent() {
  const primaryColor = "#6B8F3C";
  const accentColor = "#D4A843";
  const darkColor = "#1A1A2E";
  const textColor = "#333333";
  const lightBg = "#F8FAF5";

  return (
    <div
      style={{
        position: "absolute",
        left: "0",
        top: "0",
        width: "0",
        height: "0",
        overflow: "hidden",
        opacity: 0,
        pointerEvents: "none",
      }}
    >
      <div
        id="brochure-content"
        style={{
          width: "210mm",
          fontFamily: "'Segoe UI', Arial, sans-serif",
          color: textColor,
          backgroundColor: "#FFFFFF",
        }}
      >
      {/* ═══ COVER PAGE ═══ */}
      <div
        style={{
          pageBreakAfter: "always",
          height: "245mm",
          boxSizing: "border-box",
          background: "#FAF9F6", // Warm off-white
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          padding: "20mm 15mm",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Decorative top bar */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "8px",
            background: `linear-gradient(90deg, ${primaryColor}, ${accentColor}, ${primaryColor})`,
          }}
        />

        {/* Outer decorative borders to give catalog look */}
        <div
          style={{
            position: "absolute",
            top: "15mm",
            bottom: "15mm",
            left: "15mm",
            right: "15mm",
            border: `1px solid ${primaryColor}30`,
            borderRadius: "4px",
            pointerEvents: "none",
          }}
        />

        {/* Logo placeholder */}
        <div
          style={{
            width: "90px",
            height: "90px",
            borderRadius: "24px",
            backgroundColor: "#FFFFFF",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "28px",
            border: `3px solid ${primaryColor}`,
            boxShadow: "0 8px 24px rgba(107, 143, 60, 0.1)",
          }}
        >
          <span style={{ fontSize: "40px", color: primaryColor, fontWeight: "800", fontFamily: "'Outfit', sans-serif" }}>P</span>
        </div>

        <h1
          style={{
            fontSize: "36px",
            fontWeight: "800",
            color: "#111827", // High contrast dark
            marginBottom: "8px",
            letterSpacing: "2px",
            fontFamily: "'Outfit', sans-serif",
          }}
        >
          PRABHAT IRON WORKS
        </h1>
        <p
          style={{
            fontSize: "12px",
            color: primaryColor, // Beautiful agricultural green
            letterSpacing: "5px",
            textTransform: "uppercase",
            fontWeight: "bold",
            marginBottom: "35px",
          }}
        >
          Agri-Industrial Solutions
        </p>

        <div
          style={{
            width: "80px",
            height: "3px",
            background: `linear-gradient(90deg, ${primaryColor}, ${accentColor})`,
            marginBottom: "40px",
          }}
        />

        <h2
          style={{
            fontSize: "26px",
            fontWeight: "700",
            color: "#111827",
            marginBottom: "16px",
          }}
        >
          Product Catalogue
        </h2>
        
        {/* Edition badge */}
        <div
          style={{
            padding: "6px 16px",
            backgroundColor: `${accentColor}15`,
            border: `1px solid ${accentColor}35`,
            borderRadius: "20px",
            fontSize: "12px",
            fontWeight: "bold",
            color: "#B88D2E",
            marginBottom: "24px",
            display: "inline-block",
          }}
        >
          2024 EDITION • COMPLETE TECH SPECS
        </div>

        <p style={{ fontSize: "13px", color: "#4B5563", maxWidth: "340px", lineHeight: "1.6", margin: "0 auto" }}>
          Premium Agricultural Shelling, Threshing, and Grading Machinery. Manufactured in Jasdan, Gujarat.
        </p>

        {/* Bottom contact bar */}
        <div
          style={{
            position: "absolute",
            bottom: "20mm",
            left: "20mm",
            right: "20mm",
            padding: "16px 24px",
            backgroundColor: "#FFFFFF",
            border: "1px solid #E5E7EB",
            borderRadius: "12px",
            display: "flex",
            justifyContent: "space-between",
            fontSize: "11px",
            color: "#4B5563",
            fontWeight: "500",
            boxShadow: "0 4px 12px rgba(0,0,0,0.02)",
          }}
        >
          <span>📍 Jasdan, Rajkot, Gujarat</span>
          <span style={{ color: primaryColor, fontWeight: "bold" }}>📞 +91 98252 16584</span>
          <span>🏭 12+ Years Experience</span>
        </div>
      </div>

      {/* ═══ ABOUT PAGE ═══ */}
      <div
        style={{
          pageBreakAfter: "always",
          padding: "10mm 15mm",
          backgroundColor: lightBg,
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            borderBottom: `3.5px solid ${primaryColor}`,
            paddingBottom: "6px",
            marginBottom: "16px",
          }}
        >
          <h2 style={{ fontSize: "20px", fontWeight: "700", color: darkColor }}>
            About Prabhat Iron Works
          </h2>
        </div>

        <p style={{ fontSize: "12px", lineHeight: "1.7", marginBottom: "12px", color: textColor }}>
          Established in Jasdan, Gujarat, Prabhat Iron Works has been a pioneering force in
          agricultural machinery manufacturing for over 12 years. Our state-of-the-art facility
          at 14, Geeta Nagar, Atkot Road, produces high-quality decorticators, threshers, and
          separators trusted by farmers across 15+ states in India.
        </p>

        <p style={{ fontSize: "12px", lineHeight: "1.7", marginBottom: "16px", color: textColor }}>
          We combine traditional Indian engineering expertise with modern manufacturing techniques
          to deliver machinery that is reliable, efficient, and built to withstand the demanding
          conditions of Indian agriculture.
        </p>

        {/* Key stats */}
        <div
          style={{
            display: "flex",
            gap: "12px",
            marginBottom: "16px",
          }}
        >
          {[
            { value: "12+", label: "Years Experience" },
            { value: "6", label: "Product Lines" },
            { value: "500+", label: "Clients Served" },
            { value: "15+", label: "States Covered" },
          ].map((stat) => (
            <div
              key={stat.label}
              style={{
                flex: 1,
                textAlign: "center",
                padding: "10px 8px",
                backgroundColor: "#FFFFFF",
                borderRadius: "8px",
                border: `1px solid ${primaryColor}20`,
              }}
            >
              <div style={{ fontSize: "20px", fontWeight: "700", color: primaryColor }}>
                {stat.value}
              </div>
              <div style={{ fontSize: "9px", color: "#666", marginTop: "4px", textTransform: "uppercase", letterSpacing: "1px" }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Mission */}
        <div
          style={{
            padding: "12px 16px",
            backgroundColor: "#FFFFFF",
            borderRadius: "12px",
            borderLeft: `4px solid ${accentColor}`,
          }}
        >
          <h3 style={{ fontSize: "14px", fontWeight: "600", color: darkColor, marginBottom: "4px" }}>
            Our Mission
          </h3>
          <p style={{ fontSize: "11px", lineHeight: "1.6", color: "#555" }}>
            To empower Indian farmers with world-class agricultural machinery that maximizes
            productivity, minimizes waste, and delivers exceptional value. Every machine we build
            is a commitment to India&apos;s agricultural future.
          </p>
        </div>

        {/* Quality certifications */}
        <div style={{ marginTop: "16px" }}>
          <h3 style={{ fontSize: "14px", fontWeight: "600", color: darkColor, marginBottom: "8px" }}>
            Why Choose Us
          </h3>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
            {[
              "Premium MS & SS Materials",
              "Rigorous Load Testing",
              "All-India Service Network",
              "Custom Machine Configurations",
              "After-Sales Support",
              "Competitive Factory Pricing",
            ].map((item) => (
              <span
                key={item}
                style={{
                  padding: "4px 10px",
                  fontSize: "9px",
                  backgroundColor: `${primaryColor}15`,
                  color: primaryColor,
                  borderRadius: "20px",
                  fontWeight: "500",
                }}
              >
                ✓ {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ═══ PRODUCT PAGES ═══ */}
      {products.map((product, idx) => (
        <div
          key={product.id}
          style={{
            pageBreakAfter: idx < products.length - 1 ? "always" : "auto",
            padding: "10mm 15mm",
            backgroundColor: idx % 2 === 0 ? "#FFFFFF" : lightBg,
            boxSizing: "border-box",
          }}
        >
          {/* Product header */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              borderBottom: `3.5px solid ${primaryColor}`,
              paddingBottom: "6px",
              marginBottom: "12px",
            }}
          >
            <div>
              <span
                style={{
                  fontSize: "9px",
                  color: primaryColor,
                  textTransform: "uppercase",
                  letterSpacing: "1.5px",
                  fontWeight: "600",
                }}
              >
                {product.categoryLabel}
              </span>
              <h2 style={{ fontSize: "17px", fontWeight: "700", color: darkColor, marginTop: "2px" }}>
                {product.name}
              </h2>
            </div>
            <div
              style={{
                padding: "6px 12px",
                backgroundColor: `${accentColor}15`,
                borderRadius: "8px",
                textAlign: "right",
              }}
            >
              <div style={{ fontSize: "9px", color: "#888", textTransform: "uppercase" }}>Price Range</div>
              <div style={{ fontSize: "13px", fontWeight: "700", color: accentColor }}>
                {product.priceRange}
              </div>
            </div>
          </div>

          {/* Description */}
          <p style={{ fontSize: "11px", lineHeight: "1.6", color: "#555", marginBottom: "10px" }}>
            {product.description}
          </p>

          {/* Specifications Table */}
          <h3 style={{ fontSize: "12px", fontWeight: "600", color: darkColor, marginBottom: "6px" }}>
            Technical Specifications
          </h3>
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              marginBottom: "10px",
              fontSize: "9.5px",
            }}
          >
            <tbody>
              {product.specifications.map((spec, i) => (
                <tr
                  key={spec.label}
                  style={{
                    backgroundColor: i % 2 === 0 ? `${primaryColor}08` : "transparent",
                  }}
                >
                  <td
                    style={{
                      padding: "5px 8px",
                      color: "#666",
                      borderBottom: "1px solid #E5E7EB",
                      width: "45%",
                    }}
                  >
                    {spec.label}
                  </td>
                  <td
                    style={{
                      padding: "5px 8px",
                      color: darkColor,
                      fontWeight: "500",
                      borderBottom: "1px solid #E5E7EB",
                    }}
                  >
                    {spec.value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Features */}
          <h3 style={{ fontSize: "12px", fontWeight: "600", color: darkColor, marginBottom: "6px" }}>
            Key Features
          </h3>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "5px", marginBottom: "10px" }}>
            {product.features.map((f) => (
              <div
                key={f}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "4px",
                  padding: "4px 8px",
                  fontSize: "9px",
                  backgroundColor: `${primaryColor}10`,
                  borderRadius: "5px",
                  color: "#444",
                }}
              >
                <span style={{ color: primaryColor, fontWeight: "bold" }}>✓</span>
                {f}
              </div>
            ))}
          </div>

          {/* Order info */}
          <div
            style={{
              display: "flex",
              gap: "16px",
              padding: "8px 12px",
              backgroundColor: `${darkColor}08`,
              borderRadius: "8px",
              fontSize: "9px",
              color: "#666",
            }}
          >
            <span>📦 Min Order: {product.minOrderQty}</span>
            <span>🚚 Delivery: {product.deliveryTime}</span>
            <span>🏭 Made in Jasdan, Gujarat</span>
          </div>
        </div>
      ))}

      {/* ═══ CONTACT PAGE ═══ */}
      <div
        style={{
          padding: "10mm 15mm",
          background: "#FAF9F6", // Warm off-white
          boxSizing: "border-box",
          color: "#111827",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          position: "relative",
        }}
      >
        {/* Decorative outer border matching cover page */}
        <div
          style={{
            position: "absolute",
            top: "10mm",
            bottom: "10mm",
            left: "10mm",
            right: "10mm",
            border: `1px solid ${primaryColor}30`,
            borderRadius: "4px",
            pointerEvents: "none",
          }}
        />

        <div style={{ textAlign: "center", marginBottom: "20px" }}>
          <h2 style={{ fontSize: "22px", fontWeight: "700", color: "#111827", marginBottom: "6px", fontFamily: "'Outfit', sans-serif" }}>
            Get in Touch
          </h2>
          <p style={{ fontSize: "12px", color: "#4B5563" }}>
            Ready to upgrade your agricultural processing? Contact us today.
          </p>
        </div>

        <div
          style={{
            display: "flex",
            gap: "16px",
            justifyContent: "center",
            flexWrap: "wrap",
            margin: "0 10px",
          }}
        >
          {[
            { icon: "📍", title: "Address Details", info: "14, Geeta Nagar, Atkot Road,\nJasdan, Rajkot-360050, Gujarat" },
            { icon: "📞", title: "Direct Contact", info: "+91 98252 16584\n+91 94277 31210\ninfo@prabhatironworks.com" },
            { icon: "📦", title: "Products Offered", info: "Groundnut Decorticators\nShelling Machines & Threshers\nCustom Farming Equipment" },
          ].map((item) => (
            <div
              key={item.title}
              style={{
                flex: "1",
                minWidth: "150px",
                padding: "16px 12px",
                backgroundColor: "#FFFFFF",
                borderRadius: "12px",
                textAlign: "center",
                border: "1px solid #E5E7EB",
                boxShadow: "0 4px 12px rgba(0,0,0,0.02)",
              }}
            >
              <div style={{ fontSize: "20px", marginBottom: "8px" }}>{item.icon}</div>
              <h3 style={{ fontSize: "12px", fontWeight: "700", color: primaryColor, marginBottom: "6px" }}>
                {item.title}
              </h3>
              <p style={{ fontSize: "10.5px", lineHeight: "1.5", color: "#4B5563", whiteSpace: "pre-line", fontWeight: "500" }}>
                {item.info}
              </p>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div
          style={{
            textAlign: "center",
            marginTop: "45px",
            paddingTop: "20px",
            borderTop: "1px solid #E5E7EB",
          }}
        >
          <p style={{ fontSize: "10px", color: "#9CA3AF" }}>
            © 2024 Prabhat Iron Works. All rights reserved. | Jasdan, Rajkot, Gujarat, India
          </p>
        </div>
      </div>
    </div>
  </div>
  );
}
