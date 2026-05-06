'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

const socialLinks = [
  {
    name: 'GitHub',
    href: 'https://github.com/BasantaRanaMagarexpert?tab=repositories',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.37.6.11.82-.26.82-.58v-2.03c-3.34.72-4.04-1.61-4.04-1.61-.54-1.38-1.33-1.75-1.33-1.75-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.49 1 .11-.78.42-1.3.76-1.6-2.66-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.14-.3-.54-1.52.11-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02.004 2.04.14 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.65 1.66.25 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.69.82.57C20.57 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
    color: 'hover:text-white hover:border-white/30',
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/basanta-rana-magar-b56a05373/',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    color: 'hover:text-blue-400 hover:border-blue-400/30',
  },
  {
    name: 'Phone',
    href: 'tel:+9779843386506',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    color: 'hover:text-green-400 hover:border-green-400/30',
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    // Simulated send — wire up to EmailJS / Formspree / your own API
    await new Promise((r) => setTimeout(r, 1400));
    setStatus('sent');
    setForm({ name: '', email: '', message: '' });
    setTimeout(() => setStatus('idle'), 4000);
  };

  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 text-center"
        >
          <p className="section-label mb-3">04 — Contact</p>
          <h2
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: 'Space Grotesk' }}
          >
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-white/40 text-sm max-w-md mx-auto">
            Have a project in mind, want to collaborate, or just say hi?
            I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* ─ Left: info + socials ─ */}
          <motion.div
            variants={fadeUp}
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Info card */}
            <div className="glass gradient-border rounded-2xl p-8 mb-8">
              <h3 className="text-xl font-semibold mb-6" style={{ fontFamily: 'Space Grotesk' }}>
                Reach Me Directly
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-cyan-400/10 flex items-center justify-center text-cyan-400 flex-shrink-0">
                    📞
                  </span>
                  <div>
                    <div className="text-xs text-white/30 mb-0.5">Phone / WhatsApp</div>
                    <a
                      href="tel:+9779843386506"
                      className="text-sm text-white/70 hover:text-cyan-400 transition-colors"
                    >
                      +977-9843386506
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-purple-400/10 flex items-center justify-center text-purple-400 flex-shrink-0">
                    💼
                  </span>
                  <div>
                    <div className="text-xs text-white/30 mb-0.5">LinkedIn</div>
                    <a
                      href="https://www.linkedin.com/in/basanta-rana-magar-b56a05373/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-white/70 hover:text-purple-400 transition-colors"
                    >
                      Basanta Rana Magar
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-white/50 flex-shrink-0">
                    🐙
                  </span>
                  <div>
                    <div className="text-xs text-white/30 mb-0.5">GitHub</div>
                    <a
                      href="https://github.com/BasantaRanaMagarexpert"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-white/70 hover:text-white transition-colors"
                    >
                      BasantaRanaMagarexpert
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-green-400/10 flex items-center justify-center text-green-400 flex-shrink-0">
                    📍
                  </span>
                  <div>
                    <div className="text-xs text-white/30 mb-0.5">Location</div>
                    <span className="text-sm text-white/70">Nepal 🇳🇵</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Social icon row */}
            <div className="flex gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target={link.href.startsWith('tel:') ? '_self' : '_blank'}
                  rel="noopener noreferrer"
                  title={link.name}
                  className={`w-11 h-11 glass rounded-xl flex items-center justify-center text-white/40 border border-white/8 transition-all duration-300 ${link.color}`}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* ─ Right: contact form ─ */}
          <motion.div
            variants={fadeUp}
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="glass gradient-border rounded-2xl p-8 space-y-5">
              <div>
                <label
                  className="block text-xs text-white/40 mb-2"
                  style={{ fontFamily: 'Space Grotesk', letterSpacing: '0.1em' }}
                >
                  YOUR NAME
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="form-input"
                />
              </div>
              <div>
                <label
                  className="block text-xs text-white/40 mb-2"
                  style={{ fontFamily: 'Space Grotesk', letterSpacing: '0.1em' }}
                >
                  EMAIL ADDRESS
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="form-input"
                />
              </div>
              <div>
                <label
                  className="block text-xs text-white/40 mb-2"
                  style={{ fontFamily: 'Space Grotesk', letterSpacing: '0.1em' }}
                >
                  MESSAGE
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or idea..."
                  className="form-input resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending' || status === 'sent'}
                className="btn-primary w-full disabled:opacity-60 disabled:cursor-not-allowed"
              >
                <span>
                  {status === 'idle' && '✉️  Send Message'}
                  {status === 'sending' && '⏳ Sending...'}
                  {status === 'sent' && '✅ Message Sent!'}
                </span>
              </button>

              {status === 'sent' && (
                <motion.p
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center text-sm text-green-400"
                >
                  Thanks! I'll get back to you soon.
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
