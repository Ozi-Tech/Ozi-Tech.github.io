import { useRef, useState } from "react";
import useInView from "../hooks/useInView";
import { projects } from "../data/profile";

function ProjectCard({ project, index, inView }) {
  const [imgIdx, setImgIdx] = useState(0);
  const images = project.images || (project.image ? [project.image] : []);

  return (
    <div
      className={`card-hover bg-base-800/40 rounded-lg border border-base-600/20 overflow-hidden transition-all duration-600 ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${150 + index * 120}ms` }}
    >
      {/* Image area */}
      {images.length > 0 && (
        <div className="project-image-wrapper relative aspect-auto bg-base-900">
          <img
            src={images[imgIdx]}
            alt={project.title}
            className="w-full h-full object-contain"
            loading="lazy"
          />
          {/* Carousel controls */}
          {images.length > 1 && (
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setImgIdx(i)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    i === imgIdx
                      ? "bg-accent w-5"
                      : "bg-white/30 hover:bg-white/50"
                  }`}
                  aria-label={`Show image ${i + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      )}

      {/* Terminal preview for stackgen */}
      {project.id === "stackgen" && (
        <div className="bg-base-900 p-5 font-mono text-xs border-b border-base-600/20">
          <div className="flex items-center gap-2 mb-3 text-text-muted">
            <span className="text-accent">$</span>
            <span>npm install -g @ozi-tech/stackgen</span>
          </div>
          <div className="flex items-center gap-2 text-text-muted">
            <span className="text-accent">$</span>
            <span>stackgen</span>
          </div>
          <div className="mt-2 pl-4 space-y-0.5 text-text-muted/60">
            <p>
              <span className="text-accent">?</span> Frontend →{" "}
              <span className="text-text-secondary">React (TS)</span>
            </p>
            <p>
              <span className="text-accent">?</span> Backend →{" "}
              <span className="text-text-secondary">Express (TS)</span>
            </p>
            <p>
              <span className="text-accent">?</span> Database →{" "}
              <span className="text-text-secondary">PostgreSQL</span>
            </p>
          </div>
          <p className="mt-2 text-green-400/80">
            ✓ Created 15 files in ./my-app/
          </p>
        </div>
      )}

      {/* No-image for portfolio (N.B think of something later) */}
      {project.id === "portfolio" && (
        <div className="bg-gradient-to-br from-accent/5 to-transparent p-8 border-b border-base-600/20 flex items-center justify-center">
          <div className="text-center">
            <div className="text-4xl mb-2">
              <span role="img" aria-label="robot">🤖</span>
            </div>
            <p className="text-xs text-text-muted font-mono">
              You're looking at it
            </p>
          </div>
        </div>
      )}

      {/* Content */}
      <div className="p-6 space-y-4">
        <div>
          <div className="flex items-start justify-between gap-3">
            <div>
              <h3 className="font-heading font-bold text-lg text-text-primary">
                {project.title}
              </h3>
              <p className="text-xs text-accent font-mono mt-1">
                {project.subtitle}
              </p>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              {project.npm && (
                <a
                  href={project.npm}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-muted hover:text-accent transition-colors"
                  title="View on npm"
                >
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M0 7.334v8h6.666v1.332H12v-1.332h12v-8H0zm6.666 6.664H5.334v-4H3.999v4H1.335V8.667h5.331v5.331zm4 0v1.336H8.001V8.667h5.334v5.332h-2.669v-.001zm12.001 0h-1.33v-4h-1.336v4h-1.335v-4h-1.33v4h-2.671V8.667h8.002v5.331zM10.665 10H12v2.667h-1.335V10z" />
                  </svg>
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-muted hover:text-accent transition-colors"
                  title="View on GitHub"
                >
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
              )}
            </div>
          </div>
        </div>

        <p className="text-sm text-text-secondary leading-relaxed">
          {project.description}
        </p>

        {/* Metrics */}
        {project.metrics && (
          <ul className="space-y-1.5">
            {project.metrics.map((m, i) => (
              <li
                key={i}
                className="flex items-start gap-2 text-xs text-text-muted"
              >
                <span className="text-accent mt-0.5 shrink-0">▸</span>
                {m}
              </li>
            ))}
          </ul>
        )}

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {project.tech.map((t) => (
            <span key={t} className="tech-tag">
              {t}
            </span>
          ))}
        </div>

        {/* Role */}
        <p className="text-[0.65rem] text-text-muted font-mono uppercase tracking-wider pt-1 border-t border-base-600/20">
          {project.role}
        </p>
      </div>
    </div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, 0.05);

  const featured = projects.filter((p) => p.featured);
  const other = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="relative py-24 lg:py-32" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div
          className={`mb-12 transition-all duration-600 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <span className="section-label">02</span>
          <h2 className="section-title text-3xl sm:text-4xl mt-3">
            Projects<span className="text-accent">.</span>
          </h2>
          <div className="section-divider mt-4" />
          <p className="text-text-secondary mt-4 max-w-xl">
            Real applications solving real problems — from published npm
            packages to AI-powered mobile apps.
          </p>
        </div>

        {/* Featured projects - larger cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {featured.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              inView={inView}
            />
          ))}
        </div>

        {/* Other projects - smaller cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {other.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i + featured.length}
              inView={inView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
