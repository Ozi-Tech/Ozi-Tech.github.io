import { useRef } from "react";
import useInView from "../hooks/useInView";
import { experience, education } from "../data/profile";

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, 0.1);

  return (
    <section id="experience" className="relative py-24 lg:py-32" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Label column */}
          <div className="lg:col-span-2">
            <div
              className={`lg:sticky lg:top-24 transition-all duration-600 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              <span className="section-label">03</span>
              <h2 className="section-title text-3xl sm:text-4xl mt-3">
                Experience<span className="text-accent">.</span>
              </h2>
              <div className="section-divider mt-4" />
            </div>
          </div>

          {/* Content column */}
          <div className="lg:col-span-3 space-y-10">
            {/* Work Experience */}
            {experience.map((exp, i) => (
              <div
                key={i}
                className={`relative pl-6 border-l-2 border-accent/20 transition-all duration-600 ${
                  inView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-6"
                }`}
                style={{ transitionDelay: `${200}ms` }}
              >
                {/* Timeline dot */}
                <div className="absolute -left-[5px] top-1 glow-dot" />

                <div className="space-y-3">
                  <div>
                    <h3 className="font-heading font-bold text-lg text-text-primary">
                      {exp.title}
                    </h3>
                    <p className="text-sm text-accent font-mono">
                      {exp.company}
                    </p>
                    <p className="text-xs text-text-muted mt-1">
                      {exp.location} · {exp.period}
                    </p>
                    <p className="text-xs text-text-muted italic mt-1">
                      {exp.context}
                    </p>
                  </div>

                  <ul className="space-y-2">
                    {exp.achievements.map((a, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-2 text-sm text-text-secondary"
                      >
                        <span className="text-accent mt-1 shrink-0 text-xs">
                          ▸
                        </span>
                        {a}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5">
                    {exp.tags.map((tag) => (
                      <span key={tag} className="tech-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            {/* Education */}
            <div className="pt-4">
              <h3
                className={`font-heading font-semibold text-sm text-text-muted uppercase tracking-wider mb-6 transition-all duration-600 ${
                  inView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-6"
                }`}
                style={{ transitionDelay: "300ms" }}
              >
                Education
              </h3>

              {education.map((edu, i) => (
                <div
                  key={i}
                  className={`relative pl-6 border-l-2 border-base-600/30 mb-6 last:mb-0 transition-all duration-600 ${
                    inView
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-6"
                  }`}
                  style={{ transitionDelay: `${400 + i * 100}ms` }}
                >
                  <div className="absolute -left-[5px] top-1 w-[6px] h-[6px] rounded-full bg-base-600 border border-base-600" />

                  <div className="space-y-1">
                    <h4 className="font-heading font-bold text-text-primary text-sm">
                      {edu.degree}
                    </h4>
                    <p className="text-xs text-text-secondary">{edu.school}</p>
                    <p className="text-xs text-text-muted">
                      {edu.location} · {edu.period}
                    </p>
                    {edu.gpa && (
                      <p className="text-xs text-accent font-mono">
                        GPA: {edu.gpa}
                        {edu.honours && ` — ${edu.honours}`}
                      </p>
                    )}
                    {edu.coursework && (
                      <p className="text-xs text-text-muted mt-2">
                        <span className="text-text-secondary">Coursework:</span>{" "}
                        {edu.coursework}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
