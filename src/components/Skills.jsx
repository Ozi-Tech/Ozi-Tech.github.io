import { useRef } from "react";
import useInView from "../hooks/useInView";
import { skills, certifications } from "../data/profile";

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, 0.1);

  const categories = Object.entries(skills);

  return (
    <section id="skills" className="relative py-24 lg:py-32" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div
          className={`mb-12 transition-all duration-600 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <span className="section-label">04</span>
          <h2 className="section-title text-3xl sm:text-4xl mt-3">
            Technical Skills<span className="text-accent">.</span>
          </h2>
          <div className="section-divider mt-4" />
        </div>

        {/* Skill groups */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map(([category, items], i) => (
            <div
              key={category}
              className={`card-hover bg-base-800/30 rounded-lg border border-base-600/15 p-6 transition-all duration-600 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${150 + i * 80}ms` }}
            >
              <h3 className="font-heading font-semibold text-sm text-text-primary mb-4">
                {category}
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {items.map((item) => (
                  <span key={item} className="tech-tag">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        {certifications.length > 0 && (
          <div
            className={`mt-10 transition-all duration-600 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
            style={{ transitionDelay: "600ms" }}
          >
            <h3 className="font-heading font-semibold text-sm text-text-muted uppercase tracking-wider mb-4">
              Certifications
            </h3>
            <div className="flex flex-wrap gap-3">
              {certifications.map((cert) => (
                <div
                  key={cert.name}
                  className="flex items-center gap-3 bg-base-800/30 rounded border border-base-600/15 px-4 py-3"
                >
                  <div className="w-2 h-2 rounded-full bg-yellow-400/70" />
                  <div>
                    <p className="text-sm text-text-primary font-medium">
                      {cert.name}
                    </p>
                    <p className="text-xs text-text-muted">
                      {cert.issuer} ·{" "}
                      <span className="text-yellow-400/70">{cert.status}</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
