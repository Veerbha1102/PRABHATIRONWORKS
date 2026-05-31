"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, AlertCircle } from "lucide-react";

const productsList = [
  "Groundnut Decorticator (Regular)",
  "Almond Decorticator",
  "Groundnut Thresher Machine",
  "Pinta Groundnut Decorticator",
  "Seed Cleaner & Grader",
  "Castor Decorticator",
  "Other / Custom Equipment",
];

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    product: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.message) {
      setStatus("error");
      setErrorMessage("Please fill in all required fields (Name, Phone, and Message).");
      return;
    }

    setStatus("sending");

    try {
      // 1. Simulate server handshake delay
      await new Promise((resolve) => setTimeout(resolve, 1200));
      
      // 2. Set success state to render visual success cards and trigger animations
      setStatus("success");

      // 3. Format a premium, bold WhatsApp message with customer details
      const formattedMessage = encodeURIComponent(
        `*Hello Prabhat Iron Works,*\n\n` +
        `I am visiting your website and would like to make an inquiry:\n\n` +
        `• *Name*: ${formData.name}\n` +
        `• *Phone*: ${formData.phone}\n` +
        `• *Email*: ${formData.email || "Not Provided"}\n` +
        `• *Machine*: ${formData.product || "Other / Custom Equipment"}\n` +
        `• *Message*: ${formData.message}`
      );

      // 4. Redirect the user to WhatsApp Web/App pre-filled with the message
      const whatsappUrl = `https://api.whatsapp.com/send?phone=919825216584&text=${formattedMessage}`;
      
      // Delay slightly for the success animation to be seen by the user
      setTimeout(() => {
        window.open(whatsappUrl, "_blank");
      }, 800);

      // 5. Clean the form fields
      setFormData({
        name: "",
        email: "",
        phone: "",
        product: "",
        message: "",
      });
    } catch {
      setStatus("error");
      setErrorMessage("Something went wrong. Please try again or call us directly.");
    }
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden bg-dark">
      {/* Background gradients */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
      
      {/* Section Divider Top */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="section-container relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-widest uppercase text-primary bg-primary/10 rounded-full border border-primary/20"
          >
            Get In Touch
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-display font-bold text-white mb-6 leading-tight"
          >
            Start a Conversation with <span className="gradient-text">Our Experts</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-gray-400 text-lg"
          >
            Have questions about specifications, custom machinery requests, or pricing? Contact us today for a free consultation.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Contact Details Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-8"
          >
            {/* Info Cards */}
            <div className="space-y-4">
              {/* Address Card */}
              <div className="flex gap-4 p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-primary/20 transition-all duration-300 group">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary-400 group-hover:bg-primary group-hover:text-dark transition-all duration-300">
                  <MapPin size={22} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-1">Our Factory Location</h4>
                  <p className="text-white text-base leading-relaxed font-medium">
                    14, Geeta Nagar, Atkot Road,<br />
                    Jasdan, Rajkot - 360050, Gujarat, India
                  </p>
                </div>
              </div>

              {/* Phone Card */}
              <div className="flex gap-4 p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-primary/20 transition-all duration-300 group">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary-400 group-hover:bg-primary group-hover:text-dark transition-all duration-300">
                  <Phone size={22} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-1">Call Us Directly</h4>
                  <div className="space-y-1">
                    <p className="text-white font-display font-bold text-lg hover:text-primary-400 transition-colors">
                      <a href="tel:+919825216584">+91 98252 16584</a>
                    </p>
                    <p className="text-white/80 font-display font-semibold hover:text-primary-400 transition-colors">
                      <a href="tel:+919427731210">+91 94277 31210</a>
                    </p>
                  </div>
                </div>
              </div>

              {/* Email Card */}
              <div className="flex gap-4 p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-primary/20 transition-all duration-300 group">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary-400 group-hover:bg-primary group-hover:text-dark transition-all duration-300">
                  <Mail size={22} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-1">Email Inquiries</h4>
                  <p className="text-white font-medium hover:text-primary-400 transition-colors text-base">
                    <a href="mailto:info@prabhatironworks.com">info@prabhatironworks.com</a>
                  </p>
                </div>
              </div>

              {/* Hours Card */}
              <div className="flex gap-4 p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-primary/20 transition-all duration-300 group">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary-400 group-hover:bg-primary group-hover:text-dark transition-all duration-300">
                  <Clock size={22} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-1">Business Hours</h4>
                  <p className="text-white font-medium text-base">
                    Mon - Sat: 8:00 AM - 7:00 PM<br />
                    <span className="text-accent-400 font-semibold text-sm">Sunday: Closed</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Styled Map frame */}
            <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl relative group h-64 bg-dark-200">
              <iframe
                title="Prabhat Iron Works location map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3698.8174577889753!2d71.21852107595304!3d22.018501253018285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3958017d2da56291%3A0xe5567b5ee105658e!2sAtkot%20Rd%2C%20Jasdan%2C%20Gujarat%20360050!5e0!3m2!1sen!2sin!4v1717160000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "grayscale(1) invert(0.9) contrast(1.2)" }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="opacity-75 group-hover:opacity-95 transition-opacity duration-300"
              />
              <div className="absolute bottom-3 right-3 bg-dark/80 backdrop-blur-md px-3 py-1 rounded-full text-[10px] text-gray-400 font-semibold border border-white/5 shadow-lg">
                Atkot Road, Jasdan
              </div>
            </div>
          </motion.div>

          {/* Contact Form Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 bg-white/[0.01] border border-white/5 rounded-3xl p-6 sm:p-10 relative overflow-hidden"
          >
            {/* Gloss reflection effect */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-white/[0.02] to-transparent pointer-events-none rounded-bl-full" />

            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div className="grid sm:grid-cols-2 gap-6">
                {/* Name */}
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-xs font-bold text-gray-400 uppercase tracking-wider">
                    Full Name <span className="text-primary">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                    className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-primary-400 focus:bg-white/[0.06] transition-all duration-200 text-sm"
                  />
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <label htmlFor="phone" className="block text-xs font-bold text-gray-400 uppercase tracking-wider">
                    Phone Number <span className="text-primary">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="e.g. +91 98252 XXXXX"
                    required
                    className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-primary-400 focus:bg-white/[0.06] transition-all duration-200 text-sm"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                {/* Email */}
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-xs font-bold text-gray-400 uppercase tracking-wider">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-primary-400 focus:bg-white/[0.06] transition-all duration-200 text-sm"
                  />
                </div>

                {/* Product Dropdown */}
                <div className="space-y-2">
                  <label htmlFor="product" className="block text-xs font-bold text-gray-400 uppercase tracking-wider">
                    Equipment of Interest
                  </label>
                  <div className="relative">
                    <select
                      id="product"
                      name="product"
                      value={formData.product}
                      onChange={handleChange}
                      className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary-400 focus:bg-white/[0.06] transition-all duration-200 text-sm appearance-none cursor-pointer"
                    >
                      <option value="" disabled className="bg-dark text-gray-500">
                        Select a machine
                      </option>
                      {productsList.map((prod) => (
                        <option key={prod} value={prod} className="bg-dark text-white">
                          {prod}
                        </option>
                      ))}
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500 text-xs">
                      ▼
                    </div>
                  </div>
                </div>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label htmlFor="message" className="block text-xs font-bold text-gray-400 uppercase tracking-wider">
                  Your Message / Requirements <span className="text-primary">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your requirements, farm size, power supply constraints, or query..."
                  rows={5}
                  required
                  className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-primary-400 focus:bg-white/[0.06] transition-all duration-200 text-sm resize-none"
                />
              </div>

              {/* Notifications Container */}
              <AnimatePresence mode="wait">
                {status === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex gap-3 p-4 rounded-xl bg-red-950/30 border border-red-800/40 text-red-300 text-sm items-start"
                  >
                    <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span>{errorMessage}</span>
                  </motion.div>
                )}

                {status === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex gap-3 p-4 rounded-xl bg-green-950/30 border border-green-800/40 text-green-300 text-sm items-start"
                  >
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-white mb-0.5">Thank you for your message!</p>
                      <p>Our agricultural machinery experts will get back to you within 24 hours.</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Submit button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={status === "sending" || status === "success"}
                className={`w-full py-4 rounded-xl font-display font-semibold transition-all duration-300 text-sm flex items-center justify-center gap-3 border tracking-wider uppercase ${
                  status === "sending"
                    ? "bg-primary/20 border-primary/30 text-primary-400 cursor-wait"
                    : status === "success"
                    ? "bg-green-600 border-green-500 text-white"
                    : "bg-primary border-primary-500 text-dark hover:bg-transparent hover:text-white"
                }`}
              >
                {status === "sending" ? (
                  <>
                    <span className="w-4 h-4 border-2 border-primary-400 border-t-transparent rounded-full animate-spin" />
                    Sending Inquiry...
                  </>
                ) : status === "success" ? (
                  <>
                    <CheckCircle2 size={18} />
                    Sent Successfully
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Send Inquiry
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
