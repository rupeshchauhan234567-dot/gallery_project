import React from "react";

const WhyPixelVault = ({ darkMode }) => {
  const features = [
    {
      icon: "✦",
      title: "Curated Inspiration",
      text: "Discover carefully presented visual stories designed to spark ideas.",
    },
    {
      icon: "⚡",
      title: "Instant Discovery",
      text: "Search, explore moods and jump between photographs without friction.",
    },
    {
      icon: "♡",
      title: "Your Collection",
      text: "Save the frames that speak to you and build a personal visual library.",
    },
    {
      icon: "◉",
      title: "Immersive Viewing",
      text: "Experience every photograph through a distraction-free premium viewer.",
    },
  ];

  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
      <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
        
        {/* Left — Brand statement */}
        <div>
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-violet-400">
            Why PixelVault
          </p>

          <h2
            className={`
              max-w-xl text-4xl font-bold tracking-tight
              sm:text-5xl lg:text-6xl
              ${darkMode ? "text-white" : "text-slate-900"}
            `}
          >
            Photography deserves
            <span className="block pv-gradient-text">
              more than a grid.
            </span>
          </h2>

          <p
            className={`
              mt-6 max-w-xl text-base leading-8
              ${darkMode ? "text-gray-400" : "text-slate-600"}
            `}
          >
            PixelVault turns photo discovery into an experience. 
            Explore beautiful imagery, follow your curiosity, save your
            favorites and let every frame lead you somewhere new.
          </p>

          <div
            className={`
              mt-8 inline-flex items-center gap-3 rounded-full
              border px-5 py-3 text-sm
              ${
                darkMode
                  ? "border-white/10 bg-white/[0.04] text-gray-300"
                  : "border-slate-200 bg-white/70 text-slate-700"
              }
            `}
          >
            <span className="text-violet-400">✦</span>
            Built for people who see beyond the frame.
          </div>
        </div>

        {/* Right — Feature cards */}
        <div className="grid gap-4 sm:grid-cols-2">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`
                pv-neon-border group relative overflow-hidden
                rounded-2xl border p-6
                transition-all duration-500
                hover:-translate-y-2
                ${
                  darkMode
                    ? "border-white/10 bg-white/[0.035]"
                    : "border-slate-200/70 bg-white/75"
                }
              `}
            >
              <div
                className="
                  flex h-12 w-12 items-center justify-center
                  rounded-xl border border-violet-400/20
                  bg-violet-500/10 text-xl
                  transition-transform duration-500
                  group-hover:scale-110
                "
              >
                {feature.icon}
              </div>

              <h3
                className={`
                  mt-6 text-lg font-semibold
                  ${darkMode ? "text-white" : "text-slate-900"}
                `}
              >
                {feature.title}
              </h3>

              <p
                className={`
                  mt-3 text-sm leading-6
                  ${darkMode ? "text-gray-400" : "text-slate-600"}
                `}
              >
                {feature.text}
              </p>

              <span
                className="
                  absolute -right-8 -top-8 h-24 w-24
                  rounded-full bg-violet-500/10 blur-2xl
                  transition-all duration-500
                  group-hover:bg-violet-500/20
                "
              />

              <span
                className={`
                  absolute bottom-4 right-5 text-xs
                  ${
                    darkMode
                      ? "text-white/20"
                      : "text-slate-300"
                  }
                `}
              >
                0{index + 1}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyPixelVault;

