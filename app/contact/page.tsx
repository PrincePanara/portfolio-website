"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/motion/FadeIn";
import { NodesBackground } from "@/components/backgrounds/GridBackground";
import {
  Mail, Phone, MapPin,
  Send, CheckCircle, AlertCircle,
} from "lucide-react";
import { GithubIcon, TwitterIcon, LinkedinIcon, InstagramIcon } from "@/components/icons/SocialIcons";
import { toast } from "sonner";

const socialLinks = [
  { icon: GithubIcon, label: "GitHub", href: "https://github.com/princepanara" },
  { icon: TwitterIcon, label: "X / Twitter", href: "https://x.com/princepanara" },
  { icon: LinkedinIcon, label: "LinkedIn", href: "https://www.linkedin.com/in/prince-panara-88228b311/" },
  { icon: InstagramIcon, label: "Instagram", href: "https://instagram.com/princepanara" },
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Failed to send message");
      }

      setForm({ name: "", email: "", subject: "", message: "" });
      toast.success("Message sent! I'll get back to you within 24 hours.");
    } catch (error: any) {
      console.error("Error sending message:", error);
      toast.error(error.message || "Something went wrong. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="relative min-h-screen">
      <NodesBackground />
      <div className="relative z-10 section container-xl">
        <FadeIn className="text-center mb-16">
          <div className="section-label mx-auto w-fit mb-6">
            <Mail size={14} /> Contact
          </div>
          <h1 className="text-heading-xl font-display font-extrabold text-[var(--text-primary)] mb-4">
            Let&apos;s <span className="gradient-text">Connect</span>
          </h1>
          <p className="text-body-lg text-[var(--text-secondary)] max-w-xl mx-auto">
            Have a project in mind? Want to collaborate? Or just want to say hi? — I&apos;d love to hear from you.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Contact Info */}
          <FadeIn delay={0} direction="left" className="lg:col-span-2">
            <div className="space-y-6">
              {/* Availability */}
              <div className="card card-glow p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-400" />
                  </span>
                  <span className="text-[14px] font-bold text-green-400">Available for Projects</span>
                </div>
                <p className="text-[13px] text-[var(--text-secondary)]">
                  Currently accepting new clients. Typical response time: within 24 hours.
                </p>
              </div>

              {/* Contact Details */}
              <div className="card p-6 space-y-4">
                <h3 className="font-display font-bold text-[15px] text-[var(--text-primary)] mb-4">
                  Contact Details
                </h3>
                {[
                  { icon: Mail, label: "Email", value: "princepanara01@gmail.com", href: "mailto:princepanara01@gmail.com" },
                  { icon: MapPin, label: "Location", value: "India (Remote Worldwide)", href: null },
                  { icon: Phone, label: "Phone", value: "+91 9274256635", href: "tel:+919274256635" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[var(--accent-glow)] flex items-center justify-center">
                      <item.icon size={14} className="text-[var(--accent-primary)]" />
                    </div>
                    <div>
                      <div className="text-[11px] text-[var(--text-tertiary)]">{item.label}</div>
                      {item.href ? (
                        <a
                          href={item.href}
                          target={item.href.startsWith("http") ? "_blank" : undefined}
                          rel="noopener noreferrer"
                          className="text-[13px] text-[var(--text-primary)] hover:text-[var(--accent-primary)] transition-fast"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <span className="text-[13px] text-[var(--text-primary)]">{item.value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social */}
              <div className="card p-6">
                <h3 className="font-display font-bold text-[15px] text-[var(--text-primary)] mb-4">
                  Follow Me
                </h3>
                <div className="grid grid-cols-2 gap-2">
                  {socialLinks.map((social) => (
                    <a
                      key={social.href}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2.5 p-3 rounded-xl border border-[var(--border)] text-[var(--text-secondary)] hover:text-[var(--accent-primary)] hover:border-[var(--accent-primary)] hover:bg-[var(--accent-glow)] transition-fast text-[13px] font-medium"
                    >
                      <social.icon size={14} />
                      {social.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Contact Form */}
          <FadeIn delay={0.1} direction="right" className="lg:col-span-3">
            <div className="card card-glow p-8">
              <h2 className="text-heading-sm font-display font-bold text-[var(--text-primary)] mb-6">
                Send a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-name" className="text-[13px] font-medium text-[var(--text-secondary)] block mb-1.5">
                      Full Name *
                    </label>
                    <input
                      id="contact-name"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="John Smith"
                      className="w-full px-4 py-3 bg-[var(--bg-secondary)] border border-[var(--border)] rounded-xl text-[14px] text-[var(--text-primary)] placeholder:text-[var(--text-tertiary)] outline-none focus:border-[var(--accent-primary)] transition-fast"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="text-[13px] font-medium text-[var(--text-secondary)] block mb-1.5">
                      Email Address *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 bg-[var(--bg-secondary)] border border-[var(--border)] rounded-xl text-[14px] text-[var(--text-primary)] placeholder:text-[var(--text-tertiary)] outline-none focus:border-[var(--accent-primary)] transition-fast"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="contact-subject" className="text-[13px] font-medium text-[var(--text-secondary)] block mb-1.5">
                    Subject *
                  </label>
                  <input
                    id="contact-subject"
                    required
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    placeholder="What's this about?"
                    className="w-full px-4 py-3 bg-[var(--bg-secondary)] border border-[var(--border)] rounded-xl text-[14px] text-[var(--text-primary)] placeholder:text-[var(--text-tertiary)] outline-none focus:border-[var(--accent-primary)] transition-fast"
                  />
                </div>
                <div>
                  <label htmlFor="contact-message" className="text-[13px] font-medium text-[var(--text-secondary)] block mb-1.5">
                    Message *
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={6}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell me about your project..."
                    className="w-full px-4 py-3 bg-[var(--bg-secondary)] border border-[var(--border)] rounded-xl text-[14px] text-[var(--text-primary)] placeholder:text-[var(--text-tertiary)] outline-none focus:border-[var(--accent-primary)] transition-fast resize-none"
                  />
                </div>
                <motion.button
                  id="contact-submit"
                  type="submit"
                  disabled={sending}
                  className="btn-primary w-full justify-center text-[15px] py-3.5 disabled:opacity-70"
                  whileHover={{ scale: sending ? 1 : 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {sending ? (
                    <span className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Send size={16} />
                      Send Message
                    </span>
                  )}
                </motion.button>
              </form>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}
