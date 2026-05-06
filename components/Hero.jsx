'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

/* Typing animation titles */
const TITLES = [
  'IT Student',
  'Python Developer',
  'Problem Solver',
  'Digital Creator',
];

/** Simple typewriter hook */
function useTypewriter(words, speed = 80, pause = 1800) {
  const [text, setText] = useState('');
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIdx];
    const delay = deleting ? speed / 2 : speed;

    const timeout = setTimeout(() => {
      if (!deleting) {
        setText(current.slice(0, charIdx + 1));
        if (charIdx + 1 === current.length) {
          setTimeout(() => setDeleting(true), pause);
        } else {
          setCharIdx(charIdx + 1);
        }
      } else {
        setText(current.slice(0, charIdx - 1));
        if (charIdx - 1 === 0) {
          setDeleting(false);
          setCharIdx(0);
          setWordIdx((wordIdx + 1) % words.length);
        } else {
          setCharIdx(charIdx - 1);
        }
      }
    }, delay);

    return () => clearTimeout(timeout);
  }, [charIdx, deleting, wordIdx, words, speed, pause]);

  return text;
}

/** Animated floating grid node */
const Particle = ({ style }) => (
  <motion.div
    className="absolute w-1 h-1 rounded-full bg-cyan-400"
    style={{ opacity: 0.4, ...style }}
    animate={{ y: [-10, 10, -10], opacity: [0.2, 0.6, 0.2] }}
    transition={{
      duration: 4 + Math.random() * 3,
      repeat: Infinity,
      ease: 'easeInOut',
      delay: Math.random() * 3,
    }}
  />
);

export default function Hero() {
  const title = useTypewriter(TITLES);
  const heroRef = useRef(null);

  // Parallax mouse tilt on the glowing orbs
  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const handleMouse = (e) => {
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      const dx = (e.clientX - cx) / cx;
      const dy = (e.clientY - cy) / cy;
      el.querySelectorAll('.orb').forEach((orb, i) => {
        const factor = (i + 1) * 20;
        orb.style.transform = `translate(${dx * factor}px, ${dy * factor}px)`;
      });
    };
    window.addEventListener('mousemove', handleMouse);
    return () => window.removeEventListener('mousemove', handleMouse);
  }, []);

  const particles = Array.from({ length: 20 }, (_, i) => ({
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
  }));

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* ── Floating orbs (parallax) ── */}
      <div
        className="orb orb-cyan absolute"
        style={{ width: '600px', height: '600px', top: '-10%', left: '-10%', transition: 'transform 0.1s ease-out' }}
      />
      <div
        className="orb orb-purple absolute"
        style={{ width: '500px', height: '500px', bottom: '-10%', right: '-5%', transition: 'transform 0.1s ease-out' }}
      />
      <div
        className="orb orb-pink absolute"
        style={{ width: '300px', height: '300px', top: '40%', right: '20%', transition: 'transform 0.1s ease-out' }}
      />

      {/* ── Particles ── */}
      {particles.map((p, i) => (
        <Particle key={i} style={{ top: p.top, left: p.left }} />
      ))}

      {/* ── Horizontal line accents ── */}
      <div className="absolute top-1/3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent" />
      <div className="absolute bottom-1/3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/10 to-transparent" />

      {/* ── Main Content ── */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Availability badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-xs text-white/60" style={{ fontFamily: 'Space Grotesk' }}>
            Available for opportunities
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 leading-none tracking-tight"
          style={{ fontFamily: 'Space Grotesk' }}
        >
          <span className="block text-white/90">Basanta</span>
          <span className="block gradient-text">Rana Magar</span>
        </motion.h1>

        {/* Typewriter title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="text-xl md:text-2xl text-white/50 mb-6 h-8"
          style={{ fontFamily: 'Space Grotesk' }}
        >
          <span className="text-cyan-400">&lt;</span>
          <span>{title}</span>
          <span className="inline-block w-0.5 h-5 bg-cyan-400 ml-0.5 animate-pulse" />
          <span className="text-cyan-400"> /&gt;</span>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.65 }}
          className="text-white/40 text-base md:text-lg max-w-xl mx-auto mb-10 leading-relaxed"
        >
          Exploring the intersection of technology & creativity.
          Building clean, efficient solutions one line at a time — from Nepal 🇳🇵
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <a href="#projects" className="btn-primary">
            <span>View My Work</span>
          </a>
          <a href="#contact" className="btn-outline">
            Let's Talk
          </a>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1 }}
          className="flex justify-center gap-8 md:gap-16 mt-16"
        >
          {[
            { value: 'Python', label: 'Primary Language' },
            { value: 'IT', label: 'Field of Study' },
            { value: 'Nepal', label: 'Based In' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div
                className="text-lg md:text-2xl font-bold gradient-text"
                style={{ fontFamily: 'Space Grotesk' }}
              >
                {stat.value}
              </div>
              <div className="text-xs text-white/30 mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-white/30" style={{ fontFamily: 'Space Grotesk', letterSpacing: '0.2em' }}>
          SCROLL
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-px h-8 bg-gradient-to-b from-cyan-400 to-transparent"
        />
      </motion.div>
    </section>
  );
}
