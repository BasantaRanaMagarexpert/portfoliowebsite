'use client';

import { motion } from 'framer-motion';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/5 py-10 px-6">
      {/* Top gradient line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <span
            className="gradient-text font-bold text-lg"
            style={{ fontFamily: 'Space Grotesk' }}
          >
            B.Magar
          </span>
          <p className="text-xs text-white/25 mt-1">IT Student & Python Developer</p>
        </motion.div>

        {/* Nav links */}
        <motion.nav
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex gap-6"
        >
          {['#about', '#projects', '#services', '#contact'].map((href) => (
            <a
              key={href}
              href={href}
              className="text-xs text-white/30 hover:text-white/70 transition-colors capitalize"
              style={{ fontFamily: 'Space Grotesk' }}
            >
              {href.replace('#', '')}
            </a>
          ))}
        </motion.nav>

        {/* Copyright */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xs text-white/20"
          style={{ fontFamily: 'Space Grotesk' }}
        >
          © {year} Basanta Rana Magar. All rights reserved.
        </motion.p>
      </div>
    </footer>
  );
}
