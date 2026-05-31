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
      id="brochure-content"
      style={{
        display: "none",
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
          height: "297mm",
          background: `linear-gradient(135deg, ${darkColor} 0%, #0E1422 50%, ${darkColor} 100%)`,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          padding: "40mm 20mm",
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
            height: "6px",
            background: `linear-gradient(90deg, ${primaryColor}, ${accentColor}, ${primaryColor})`,
          }}
        />

        {/* Logo placeholder */}
        <div
          style={{
            width: "80px",
            height: "80px",
            borderRadius: "20px",
            backgroundColor: "rgba(107, 143, 60, 0.2)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "24px",
            border: `2px solid ${primaryColor}`,
          }}
        >
          <span style={{ fontSize: "36px", color: primaryColor, fontWeight: "bold" }}>P</span>
        </div>

        <h1
          style={{
            fontSize: "36px",
            fontWeight: "800",
            color: "#FFFFFF",
            marginBottom: "8px",
            letterSpacing: "2px",
          }}
        >
          PRABHAT IRON WORKS
        </h1>
        <p
          style={{
            fontSize: "14px",
            color: accentColor,
            letterSpacing: "4px",
            textTransform: "uppercase",
            marginBottom: "40px",
          }}
        >
          Agri-Industrial Solutions
        </p>

        <div
          style={{
            width: "60px",
            height: "2px",
            background: `linear-gradient(90deg, ${primaryColor}, ${accentColor})`,
            marginBottom: "40px",
          }}
        />

        <h2
          style={{
            fontSize: "28px",
            fontWeight: "600",
            color: "#FFFFFF",
            marginBottom: "16px",
          }}
        >
          Product Catalogue 2024
        </h2>
        <p style={{ fontSize: "14px", color: "#94A3B8", maxWidth: "300px", lineHeight: "1.6" }}>
          Complete specifications, pricing, and technical details for our agricultural machinery range.
        </p>

        {/* Bottom contact bar */}
        <div
          style={{
            position: "absolute",
            bottom: "20mm",
            left: "20mm",
            right: "20mm",
            padding: "12px 20px",
            backgroundColor: "rgba(255,255,255,0.05)",
            borderRadius: "8px",
            display: "flex",
            justifyContent: "space-between",
            fontSize: "10px",
            color: "#94A3B8",
          }}
        >
          <span>📍 Jasdan, Rajkot, Gujarat</span>
          <span>📞 Contact for pricing</span>
          <span>🏭 12+ Years Experience</span>
        </div>
      </div>

      {/* ═══ ABOUT PAGE ═══ */}
      <div
        style={{
          pageBreakAfter: "always",
          padding: "15mm 20mm",
          backgroundColor: lightBg,
          minHeight: "297mm",
        }}
      >
        <div
          style={{
            borderBottom: `3px solid ${primaryColor}`,
            paddingBottom: "10px",
            marginBottom: "24px",
          }}
        >
          <h2 style={{ fontSize: "24px", fontWeight: "700", color: darkColor }}>
            About Prabhat Iron Works
          </h2>
        </div>

        <p style={{ fontSize: "13px", lineHeight: "1.8", marginBottom: "20px", color: textColor }}>
          Established in Jasdan, Gujarat, Prabhat Iron Works has been a pioneering force in
          agricultural machinery manufacturing for over 12 years. Our state-of-the-art facility
          at 14, Geeta Nagar, Atkot Road, produces high-quality decorticators, threshers, and
          separators trusted by farmers across 15+ states in India.
        </p>

        <p style={{ fontSize: "13px", lineHeight: "1.8", marginBottom: "30px", color: textColor }}>
          We combine traditional Indian engineering expertise with modern manufacturing techniques
          to deliver machinery that is reliable, efficient, and built to withstand the demanding
          conditions of Indian agriculture.
        </p>

        {/* Key stats */}
        <div
          style={{
            display: "flex",
            gap: "16px",
            marginBottom: "30px",
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
                padding: "16px 12px",
                backgroundColor: "#FFFFFF",
                borderRadius: "8px",
                border: `1px solid ${primaryColor}20`,
              }}
            >
              <div style={{ fontSize: "24px", fontWeight: "700", color: primaryColor }}>
                {stat.value}
              </div>
              <div style={{ fontSize: "10px", color: "#666", marginTop: "4px", textTransform: "uppercase", letterSpacing: "1px" }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Mission */}
        <div
          style={{
            padding: "20px 24px",
            backgroundColor: "#FFFFFF",
            borderRadius: "12px",
            borderLeft: `4px solid ${accentColor}`,
          }}
        >
          <h3 style={{ fontSize: "16px", fontWeight: "600", color: darkColor, marginBottom: "8px" }}>
            Our Mission
          </h3>
          <p style={{ fontSize: "12px", lineHeight: "1.7", color: "#555" }}>
            To empower Indian farmers with world-class agricultural machinery that maximizes
            productivity, minimizes waste, and delivers exceptional value. Every machine we build
            is a commitment to India&apos;s agricultural future.
          </p>
        </div>

        {/* Quality certifications */}
        <div style={{ marginTop: "24px" }}>
          <h3 style={{ fontSize: "16px", fontWeight: "600", color: darkColor, marginBottom: "12px" }}>
            Why Choose Us
          </h3>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
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
                  padding: "6px 14px",
                  fontSize: "10px",
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
            padding: "15mm 20mm",
            backgroundColor: idx % 2 === 0 ? "#FFFFFF" : lightBg,
            minHeight: "280mm",
          }}
        >
          {/* Product header */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              borderBottom: `3px solid ${primaryColor}`,
              paddingBottom: "10px",
              marginBottom: "20px",
            }}
          >
            <div>
              <span
                style={{
                  fontSize: "10px",
                  color: primaryColor,
                  textTransform: "uppercase",
                  letterSpacing: "2px",
                  fontWeight: "600",
                }}
              >
                {product.categoryLabel}
              </span>
              <h2 style={{ fontSize: "22px", fontWeight: "700", color: darkColor, marginTop: "4px" }}>
                {product.name}
              </h2>
            </div>
            <div
              style={{
                padding: "8px 16px",
                backgroundColor: `${accentColor}15`,
                borderRadius: "8px",
                textAlign: "right",
              }}
            >
              <div style={{ fontSize: "10px", color: "#888", textTransform: "uppercase" }}>Price Range</div>
              <div style={{ fontSize: "14px", fontWeight: "700", color: accentColor }}>
                {product.priceRange}
              </div>
            </div>
          </div>

          {/* Description */}
          <p style={{ fontSize: "12px", lineHeight: "1.7", color: "#555", marginBottom: "20px" }}>
            {product.description}
          </p>

          {/* Specifications Table */}
          <h3 style={{ fontSize: "14px", fontWeight: "600", color: darkColor, marginBottom: "10px" }}>
            Technical Specifications
          </h3>
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              marginBottom: "20px",
              fontSize: "11px",
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
                      padding: "8px 12px",
                      color: "#666",
                      borderBottom: "1px solid #E5E7EB",
                      width: "45%",
                    }}
                  >
                    {spec.label}
                  </td>
                  <td
                    style={{
                      padding: "8px 12px",
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
          <h3 style={{ fontSize: "14px", fontWeight: "600", color: darkColor, marginBottom: "10px" }}>
            Key Features
          </h3>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "16px" }}>
            {product.features.map((f) => (
              <div
                key={f}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  padding: "5px 10px",
                  fontSize: "10px",
                  backgroundColor: `${primaryColor}10`,
                  borderRadius: "6px",
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
              padding: "12px 16px",
              backgroundColor: `${darkColor}08`,
              borderRadius: "8px",
              fontSize: "10px",
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
          padding: "15mm 20mm",
          background: `linear-gradient(135deg, ${darkColor}, #0E1422)`,
          minHeight: "297mm",
          color: "#FFFFFF",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <h2 style={{ fontSize: "28px", fontWeight: "700", marginBottom: "8px" }}>
            Get in Touch
          </h2>
          <p style={{ fontSize: "14px", color: "#94A3B8" }}>
            Ready to upgrade your agricultural processing? Contact us today.
          </p>
        </div>

        <div
          style={{
            display: "flex",
            gap: "24px",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          {[
            { icon: "📍", title: "Address", info: "14, Geeta Nagar, Atkot Road,\nJasdan, Rajkot-360050, Gujarat" },
            { icon: "🏭", title: "Experience", info: "12+ Years of Excellence\nin Agricultural Machinery" },
            { icon: "📦", title: "Products", info: "Decorticators • Threshers\nSeparators • Custom Machines" },
          ].map((item) => (
            <div
              key={item.title}
              style={{
                flex: "1",
                minWidth: "150px",
                padding: "24px",
                backgroundColor: "rgba(255,255,255,0.05)",
                borderRadius: "12px",
                textAlign: "center",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              <div style={{ fontSize: "32px", marginBottom: "12px" }}>{item.icon}</div>
              <h3 style={{ fontSize: "14px", fontWeight: "600", color: accentColor, marginBottom: "8px" }}>
                {item.title}
              </h3>
              <p style={{ fontSize: "11px", lineHeight: "1.6", color: "#94A3B8", whiteSpace: "pre-line" }}>
                {item.info}
              </p>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div
          style={{
            textAlign: "center",
            marginTop: "40px",
            paddingTop: "20px",
            borderTop: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          <p style={{ fontSize: "10px", color: "#64748B" }}>
            © 2024 Prabhat Iron Works. All rights reserved. | Jasdan, Rajkot, Gujarat, India
          </p>
        </div>
      </div>
    </div>
  );
}
