import { useRef } from "react";
import useInView from "../hooks/useInView";
import { about } from "../data/profile";

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, 0.15);

  return (
    <section id="about" className="relative py-24 lg:py-32" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Label column */}
          <div className="lg:col-span-2">
            <div
              className={`lg:sticky lg:top-24 transition-all duration-600 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              <span className="section-label">01</span>
              <h2 className="section-title text-3xl sm:text-4xl mt-3">
                About Me<span className="text-accent">.</span>
              </h2>
              <div className="section-divider mt-4" />

              {/* Highlights */}
              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="glow-dot mt-2 shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-text-primary">
                      Career Switcher
                    </p>
                    <p className="text-xs text-text-muted mt-0.5">
                      Law degree → Technical PM → Software Developer
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="glow-dot mt-2 shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-text-primary">
                      Production Experience
                    </p>
                    <p className="text-xs text-text-muted mt-0.5">
                      FinTech platform with 50,000+ users
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="glow-dot mt-2 shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-text-primary">
                      AWS Certified (In Progress)
                    </p>
                    <p className="text-xs text-text-muted mt-0.5">
                      Cloud Practitioner certification
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content column */}
          <div className="lg:col-span-3 space-y-5">
            {about.map((paragraph, i) => (
              <p
                key={i}
                className={`text-text-secondary leading-relaxed transition-all duration-600 ${
                  inView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-6"
                }`}
                style={{ transitionDelay: `${150 + i * 100}ms` }}
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
