import { useEffect, useState } from "react";
import { profile, highlights } from "../data/profile";

export default function Hero() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background grid */}
      <div className="grid-overlay" />

      {/* Radial glow */}
      <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[300px] h-[300px] bg-accent/3 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-32 w-full">
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          {/* Left — Text content (3 cols) */}
          <div className="lg:col-span-3 space-y-6">
            <div
              className={`transition-all duration-700 delay-100 ${
                visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
            >
              <span className="section-label">Hello, I'm</span>
            </div>

            <h1
              className={`section-title text-4xl sm:text-5xl lg:text-6xl transition-all duration-700 delay-200 ${
                visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
            >
              {profile.name}
              <span className="text-accent">.</span>
            </h1>

            <p
              className={`text-xl sm:text-2xl text-text-secondary font-heading font-medium transition-all duration-700 delay-300 ${
                visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
            >
              {profile.title}
            </p>

            <p
              className={`text-base text-text-secondary max-w-lg leading-relaxed transition-all duration-700 delay-[400ms] ${
                visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
            >
              {profile.tagline} Previous production experience on a FinTech
              platform serving 50,000+ users. Currently building with React,
              TypeScript, Python, and LLM APIs.
            </p>

            <div
              className={`flex flex-wrap gap-3 pt-2 transition-all duration-700 delay-500 ${
                visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
            >
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-base-950 font-heading font-semibold text-sm rounded hover:bg-accent-light transition-colors"
              >
                View Projects
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path d="M19 9l-7 7-7-7" />
                </svg>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 border border-base-600 text-text-secondary font-heading font-medium text-sm rounded hover:border-accent/30 hover:text-accent transition-all"
              >
                Get in Touch
              </a>
            </div>
          </div>

          {/* Right — Terminal card (2 cols) */}
          <div
            className={`lg:col-span-2 transition-all duration-700 delay-500 ${
              visible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
          >
            <div className="bg-base-800 rounded-lg border border-base-600/50 overflow-hidden shadow-2xl">
              {/* Terminal header */}
              <div className="flex items-center gap-2 px-4 py-3 bg-base-700/50 border-b border-base-600/30">
                <div className="w-3 h-3 rounded-full bg-red-500/70" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <div className="w-3 h-3 rounded-full bg-green-500/70" />
                <span className="ml-2 text-xs text-text-muted font-mono">
                  terminal
                </span>
              </div>
              {/* Terminal body */}
              <div className="p-5 font-mono text-sm space-y-3">
                <div className="flex gap-2">
                  <span className="text-accent select-none">$</span>
                  <span className="text-text-primary">npx @ozi-tech/stackgen</span>
                </div>
                <div className="text-text-muted text-xs space-y-1.5 pl-4">
                  <p>
                    <span className="text-accent">?</span> Frontend:{" "}
                    <span className="text-text-secondary">React (TypeScript)</span>
                  </p>
                  <p>
                    <span className="text-accent">?</span> Backend:{" "}
                    <span className="text-text-secondary">FastAPI (Python)</span>
                  </p>
                  <p>
                    <span className="text-accent">?</span> Database:{" "}
                    <span className="text-text-secondary">PostgreSQL</span>
                  </p>
                  <p>
                    <span className="text-accent">?</span> Docker:{" "}
                    <span className="text-text-secondary">Yes</span>
                  </p>
                </div>
                <div className="pt-1">
                  <p className="text-green-400 text-xs">
                    ✓ Created 15 files in ./my-app/
                  </p>
                  <p className="text-green-400 text-xs">
                    ✓ Initialized Git repository
                  </p>
                </div>
                <div className="flex gap-2 pt-1">
                  <span className="text-accent select-none">$</span>
                  <span className="text-text-muted">
                    <span className="animate-blink">▊</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Quick stats below terminal */}
            <div className="grid grid-cols-3 gap-3 mt-4">
              {highlights.map((h) => (
                <div
                  key={h.label}
                  className="bg-base-800/50 rounded border border-base-600/30 p-3 text-center"
                >
                  <div className="text-xl font-heading font-bold text-accent">
                    {h.value}
                  </div>
                  <div className="text-[0.65rem] text-text-muted font-mono uppercase tracking-wider mt-1">
                    {h.label}
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
