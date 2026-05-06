'use client';

import { motion } from 'framer-motion';

const services = [
  {
    icon: '🌐',
    title: 'Web Development',
    description:
      'Building responsive, performant websites using modern frameworks. From landing pages to full-stack applications.',
    tags: ['HTML', 'CSS', 'JavaScript', 'React', 'Next.js'],
    gradient: 'from-cyan-500 to-blue-600',
  },
  {
    icon: '🐍',
    title: 'Python Scripting',
    description:
      'Automation, data processing, and backend logic. Clean, readable Python code that solves real problems efficiently.',
    tags: ['Python', 'Automation', 'CLI Tools', 'Data'],
    gradient: 'from-purple-500 to-indigo-600',
  },
  {
    icon: '🎨',
    title: 'UI/UX Design',
    description:
      'Crafting clean, intuitive interfaces with attention to detail. Designing experiences that feel natural and look great.',
    tags: ['Figma', 'Prototyping', 'Wireframing', 'Design Systems'],
    gradient: 'from-pink-500 to-rose-600',
  },
  {
    icon: '🤖',
    title: 'AI / ML Exploration',
    description:
      'Exploring machine learning and AI concepts. Applying Python libraries like NumPy and Pandas to data-driven projects.',
    tags: ['NumPy', 'Pandas', 'Jupyter', 'AI Concepts'],
    gradient: 'from-emerald-500 to-teal-600',
  },
  {
    icon: '🔧',
    title: 'Tool Integration',
    description:
      'Connecting APIs, setting up developer tools, and streamlining workflows for better productivity.',
    tags: ['REST APIs', 'Git', 'CI/CD', 'DevTools'],
    gradient: 'from-orange-500 to-amber-600',
  },
  {
    icon: '📱',
    title: 'Responsive Design',
    description:
      'Ensuring every project looks pixel-perfect on all devices — mobile-first approach with cross-browser support.',
    tags: ['Mobile-First', 'Tailwind', 'Flexbox', 'Grid'],
    gradient: 'from-violet-500 to-purple-600',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

function ServiceCard({ service, index }) {
  return (
    <motion.div
      variants={fadeUp}
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      whileHover={{ y: -6, scale: 1.01 }}
      className="gradient-border glass rounded-2xl p-6 group cursor-default transition-all duration-300"
    >
      {/* Icon with gradient bg */}
      <div
        className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center text-2xl mb-5 group-hover:scale-110 transition-transform duration-300`}
      >
        {service.icon}
      </div>

      <h3
        className="text-lg font-semibold text-white/90 mb-2 group-hover:text-white transition-colors"
        style={{ fontFamily: 'Space Grotesk' }}
      >
        {service.title}
      </h3>

      <p className="text-sm text-white/40 leading-relaxed mb-5">
        {service.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5">
        {service.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs px-2 py-0.5 rounded-full"
            style={{
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.08)',
              color: 'rgba(255,255,255,0.45)',
              fontFamily: 'Space Grotesk',
            }}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Subtle gradient line on hover */}
      <div
        className={`h-px mt-5 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-40 transition-opacity duration-300`}
      />
    </motion.div>
  );
}

export default function Services() {
  return (
    <section id="services" className="py-32 px-6">
      {/* Subtle background orb */}
      <div
        className="orb orb-purple absolute left-1/2 -translate-x-1/2 pointer-events-none"
        style={{ width: '600px', height: '400px', top: '50%', opacity: 0.5 }}
      />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 text-center"
        >
          <p className="section-label mb-3">03 — Services</p>
          <h2
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: 'Space Grotesk' }}
          >
            What I <span className="gradient-text">Offer</span>
          </h2>
          <p className="text-white/40 text-sm max-w-md mx-auto">
            Skills and services I bring to every project — from concept to deployment.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="text-center mt-16"
        >
          <p className="text-white/30 text-sm mb-4" style={{ fontFamily: 'Space Grotesk' }}>
            Interested in working together?
          </p>
          <a href="#contact" className="btn-primary inline-block">
            <span>Get In Touch</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
