'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

/* ── Skills data ───────────────────────────── */
const skills = {
  'Languages & Frameworks': [
    'Python', 'HTML5', 'CSS3', 'JavaScript', 'SQL',
  ],
  'Tools & Platforms': [
    'Git', 'GitHub', 'VS Code', 'Linux', 'Figma',
  ],
  'Currently Learning': [
    'React', 'Next.js', 'Node.js', 'REST APIs', 'Data Science',
  ],
};

const proficiencies = [
  { name: 'Python', level: 80 },
  { name: 'HTML / CSS', level: 70 },
  { name: 'JavaScript', level: 50 },
  { name: 'SQL & Databases', level: 55 },
  { name: 'Git & GitHub', level: 65 },
];

/* ── Fade-up animation variant ──────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

/** Animated progress bar */
function ProgressBar({ name, level, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      variants={fadeUp}
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="mb-5"
    >
      <div className="flex justify-between mb-2">
        <span className="text-sm text-white/70" style={{ fontFamily: 'Space Grotesk' }}>
          {name}
        </span>
        <span className="text-sm text-cyan-400" style={{ fontFamily: 'Space Grotesk' }}>
          {level}%
        </span>
      </div>
      <div className="progress-bar">
        <motion.div
          className="progress-fill"
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: level / 100 } : { scaleX: 0 }}
          transition={{ duration: 1.2, delay: 0.3 + index * 0.1, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </motion.div>
  );
}

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" ref={ref} className="py-32 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Section header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="section-label mb-3">01 — About Me</p>
          <h2
            className="text-4xl md:text-5xl font-bold"
            style={{ fontFamily: 'Space Grotesk' }}
          >
            Who I <span className="gradient-text">Am</span>
          </h2>
        </motion.div>

        {/* Two-column layout */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* ─ Left: bio + avatar ─ */}
          <div>
            {/* Avatar / identity card */}
            <motion.div
              variants={fadeUp}
              custom={0}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="glass gradient-border rounded-2xl p-6 mb-8 glow-cyan"
            >
              <div className="flex items-center gap-4 mb-4">
                {/* Initials avatar */}
                <div
                  className="w-16 h-16 rounded-xl flex items-center justify-center text-xl font-bold text-black flex-shrink-0"
                  style={{ background: 'linear-gradient(135deg, #22d3ee, #a855f7)' }}
                >
                  BRM
                </div>
                <div>
                  <div className="font-semibold" style={{ fontFamily: 'Space Grotesk' }}>
                    Basanta Rana Magar
                  </div>
                  <div className="text-sm text-white/40">IT Student • Python Dev • Nepal</div>
                </div>
              </div>
              <div className="flex gap-2 flex-wrap">
                <span className="skill-badge">🎓 IT Student</span>
                <span className="skill-badge">🐍 Python</span>
                <span className="skill-badge">📍 Nepal</span>
              </div>
            </motion.div>

            {/* Bio text */}
            {[
              `Hi! I'm Basanta Rana Magar, an IT student passionate about technology and software development. I'm currently on my journey to become a full-stack developer, with Python as my primary language.`,
              `I love exploring how code can solve real problems. From scripting automation tools to diving into web development, I'm always building and learning. My goal is to create meaningful digital experiences.`,
              `When I'm not coding, I'm exploring new tech trends, contributing to open-source projects on GitHub, or thinking about how AI can reshape the future.`,
            ].map((para, i) => (
              <motion.p
                key={i}
                variants={fadeUp}
                custom={i + 1}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-white/50 leading-relaxed mb-4 text-sm md:text-base"
              >
                {para}
              </motion.p>
            ))}

            {/* Contact quick links */}
            <motion.div
              variants={fadeUp}
              custom={4}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-wrap gap-3 mt-6"
            >
              <a
                href="tel:9843386506"
                className="btn-outline text-sm flex items-center gap-2"
              >
                📞 +977-9843386506
              </a>
              <a
                href="https://www.linkedin.com/in/basanta-rana-magar-b56a05373/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline text-sm flex items-center gap-2"
              >
                💼 LinkedIn
              </a>
            </motion.div>
          </div>

          {/* ─ Right: skills + progress ─ */}
          <div>
            {/* Skill badges by category */}
            {Object.entries(skills).map(([cat, items], ci) => (
              <motion.div
                key={cat}
                variants={fadeUp}
                custom={ci}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="mb-8"
              >
                <h4
                  className="text-xs text-white/30 uppercase tracking-widest mb-3"
                  style={{ fontFamily: 'Space Grotesk' }}
                >
                  {cat}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span key={skill} className="skill-badge">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}

            {/* Proficiency bars */}
            <div className="glass rounded-2xl p-6 mt-4">
              <h4
                className="text-sm text-white/50 mb-5"
                style={{ fontFamily: 'Space Grotesk' }}
              >
                Proficiency Levels
              </h4>
              {proficiencies.map((p, i) => (
                <ProgressBar key={p.name} {...p} index={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
