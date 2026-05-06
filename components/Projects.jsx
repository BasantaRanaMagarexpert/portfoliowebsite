'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const GITHUB_USER = 'BasantaRanaMagarexpert';
const GITHUB_URL = `https://api.github.com/users/${GITHUB_USER}/repos?sort=updated&per_page=9`;

/* Fallback static projects if GitHub API is unavailable */
const FALLBACK_PROJECTS = [
  {
    name: 'python-projects',
    description: 'A collection of Python scripts and mini-projects exploring automation, data processing, and problem solving.',
    html_url: `https://github.com/${GITHUB_USER}`,
    topics: ['python', 'automation', 'scripting'],
    stargazers_count: 0,
    language: 'Python',
  },
  {
    name: 'learning-nextjs',
    description: 'Hands-on experiments while learning Next.js, React, and modern web development patterns.',
    html_url: `https://github.com/${GITHUB_USER}`,
    topics: ['nextjs', 'react', 'tailwind'],
    stargazers_count: 0,
    language: 'JavaScript',
  },
  {
    name: 'portfolio',
    description: 'My personal developer portfolio — futuristic dark theme built with Next.js & Framer Motion.',
    html_url: `https://github.com/${GITHUB_USER}`,
    topics: ['portfolio', 'nextjs', 'framer-motion'],
    stargazers_count: 0,
    language: 'JavaScript',
  },
];

/* Language → gradient colour mapping */
const langColor = {
  Python: 'from-cyan-400 to-blue-500',
  JavaScript: 'from-yellow-400 to-orange-400',
  TypeScript: 'from-blue-400 to-cyan-500',
  HTML: 'from-orange-400 to-red-500',
  CSS: 'from-purple-400 to-pink-500',
  default: 'from-purple-400 to-pink-500',
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

/** Single project card */
function ProjectCard({ repo, index }) {
  const gradient = langColor[repo.language] || langColor.default;

  return (
    <motion.div
      variants={fadeUp}
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      whileHover={{ y: -6 }}
      className="gradient-border glass rounded-2xl overflow-hidden group transition-all duration-300 hover:glow-cyan flex flex-col"
    >
      {/* Decorative header bar */}
      <div className={`h-1 bg-gradient-to-r ${gradient} opacity-60 group-hover:opacity-100 transition-opacity duration-300`} />

      <div className="p-6 flex flex-col flex-1">
        {/* Repo name */}
        <div className="flex items-start justify-between mb-3">
          <h3
            className="font-semibold text-white/90 group-hover:text-white transition-colors leading-tight"
            style={{ fontFamily: 'Space Grotesk' }}
          >
            {repo.name.replace(/-/g, ' ')}
          </h3>
          {/* Star count */}
          {repo.stargazers_count > 0 && (
            <span className="text-xs text-white/30 flex items-center gap-1 ml-2 flex-shrink-0">
              ⭐ {repo.stargazers_count}
            </span>
          )}
        </div>

        {/* Description */}
        <p className="text-sm text-white/40 leading-relaxed mb-4 flex-1">
          {repo.description || 'No description provided.'}
        </p>

        {/* Topics */}
        {repo.topics && repo.topics.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-4">
            {repo.topics.slice(0, 4).map((t) => (
              <span
                key={t}
                className="text-xs px-2 py-0.5 rounded-full"
                style={{
                  background: 'rgba(34,211,238,0.08)',
                  border: '1px solid rgba(34,211,238,0.15)',
                  color: '#22d3ee',
                  fontFamily: 'Space Grotesk',
                }}
              >
                {t}
              </span>
            ))}
          </div>
        )}

        {/* Footer: language + links */}
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
          {repo.language && (
            <span className="text-xs text-white/30" style={{ fontFamily: 'Space Grotesk' }}>
              <span
                className={`inline-block w-2 h-2 rounded-full bg-gradient-to-r ${gradient} mr-1.5 align-middle`}
              />
              {repo.language}
            </span>
          )}
          <div className="flex gap-3 ml-auto">
            <a
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-white/40 hover:text-white transition-colors flex items-center gap-1"
            >
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.37.6.11.82-.26.82-.58v-2.03c-3.34.72-4.04-1.61-4.04-1.61-.54-1.38-1.33-1.75-1.33-1.75-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.49 1 .11-.78.42-1.3.76-1.6-2.66-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.14-.3-.54-1.52.11-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02.004 2.04.14 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.65 1.66.25 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.69.82.57C20.57 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
              Code
            </a>
            {repo.homepage && (
              <a
                href={repo.homepage}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-cyan-400 hover:text-cyan-300 transition-colors flex items-center gap-1"
              >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Live
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(GITHUB_URL)
      .then((r) => {
        if (!r.ok) throw new Error('GitHub API error');
        return r.json();
      })
      .then((data) => {
        // Filter out forked repos & forks-only, take top 6
        const filtered = data.filter((r) => !r.fork).slice(0, 6);
        setRepos(filtered.length > 0 ? filtered : FALLBACK_PROJECTS);
        setLoading(false);
      })
      .catch(() => {
        setRepos(FALLBACK_PROJECTS);
        setError(true);
        setLoading(false);
      });
  }, []);

  return (
    <section id="projects" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 text-center"
        >
          <p className="section-label mb-3">02 — Projects</p>
          <h2
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: 'Space Grotesk' }}
          >
            What I've <span className="gradient-text">Built</span>
          </h2>
          <p className="text-white/40 text-sm max-w-md mx-auto">
            Repositories pulled live from my{' '}
            <a
              href={`https://github.com/${GITHUB_USER}?tab=repositories`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:underline"
            >
              GitHub profile
            </a>
            .
          </p>
        </motion.div>

        {/* Grid */}
        {loading ? (
          /* Loading skeleton */
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="glass rounded-2xl h-56 animate-pulse" />
            ))}
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {repos.map((repo, i) => (
              <ProjectCard key={repo.id || repo.name} repo={repo} index={i} />
            ))}
          </div>
        )}

        {/* View all CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-center mt-12"
        >
          <a
            href={`https://github.com/${GITHUB_USER}?tab=repositories`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline inline-flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.37.6.11.82-.26.82-.58v-2.03c-3.34.72-4.04-1.61-4.04-1.61-.54-1.38-1.33-1.75-1.33-1.75-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.49 1 .11-.78.42-1.3.76-1.6-2.66-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.14-.3-.54-1.52.11-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02.004 2.04.14 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.65 1.66.25 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.69.82.57C20.57 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
            View All Repositories
          </a>
        </motion.div>
      </div>
    </section>
  );
}
