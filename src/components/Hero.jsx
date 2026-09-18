
import React from "react";

const Hero = ({ darkMode, surpriseMe, userData }) => {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-transparent"
    >
      {/* HERO AMBIENT GLOWS */}

      <div
        className={`
          pointer-events-none absolute
          -left-40 top-10
          h-[400px] w-[400px]
          rounded-full blur-[130px]
          pv-orb
          ${
            darkMode
              ? "bg-violet-700/15"
              : "bg-violet-300/35"
          }
        `}
      />

      <div
        className={`
          pointer-events-none absolute
          right-[-100px] top-20
          h-[500px] w-[500px]
          rounded-full blur-[140px]
          pv-orb-reverse
          ${
            darkMode
              ? "bg-blue-700/15"
              : "bg-blue-300/30"
          }
        `}
      />

      {/* CONTENT */}
      <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-20 lg:px-8 lg:pb-28 lg:pt-24">
        <div className="grid items-center gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">

          {/* LEFT */}
          <div className="max-w-xl">

            {/* EYEBROW */}
            <div className="mb-6 flex items-center gap-3 pv-hero-reveal">
              <span
                className="
                  h-px w-8
                  origin-left
                  bg-gradient-to-r
                  from-violet-500
                  to-blue-500
                  pv-line-grow
                "
              />

              <p
                className={`
                  text-[10px] font-bold
                  uppercase tracking-[0.35em]
                  ${
                    darkMode
                      ? "text-violet-400"
                      : "text-violet-600"
                  }
                `}
              >
                Explore the extraordinary
              </p>
            </div>

            {/* HEADING */}
            <h1
              className={`
                pv-hero-reveal pv-delay-1
                text-5xl font-black
                leading-[0.95]
                tracking-[-0.045em]
                sm:text-6xl
                lg:text-7xl
                xl:text-[82px]
                ${
                  darkMode
                    ? "text-white"
                    : "text-slate-950"
                }
              `}
            >
              More than just
              <br />

              <span className="pv-gradient-text">
                photographs.
              </span>
            </h1>

            {/* DESCRIPTION */}
            <p
              className={`
                pv-hero-reveal pv-delay-2
                mt-7 max-w-lg
                text-base leading-7
                sm:text-lg
                ${
                  darkMode
                    ? "text-slate-400"
                    : "text-slate-500"
                }
              `}
            >
              Discover breathtaking visuals, crafted by
              talented photographers from around the world.
              Every frame tells a story.
            </p>

            {/* BUTTONS */}
            <div
              className="
                pv-hero-reveal pv-delay-3
                mt-9 flex flex-wrap items-center gap-4
              "
            >
              {/* EXPLORE */}
              <a
                href="#gallery"
                className="
                  group relative
                  inline-flex items-center gap-2
                  overflow-hidden
                  rounded-full
                  bg-gradient-to-r
                  from-indigo-500
                  via-violet-500
                  to-blue-500
                  px-7 py-3.5
                  text-sm font-bold text-white
                  shadow-[0_12px_35px_rgba(79,70,229,0.28)]
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:scale-[1.02]
                  hover:shadow-[0_18px_45px_rgba(124,58,237,0.42)]
                  active:scale-95
                "
              >
                <span className="relative z-10">
                  Explore Gallery
                </span>

                <span
                  className="
                    relative z-10 text-lg
                    transition-transform duration-300
                    group-hover:translate-x-1
                  "
                >
                  →
                </span>

                <span
                  className="
                    absolute inset-0
                    -translate-x-full
                    bg-white/20
                    transition-transform duration-500
                    group-hover:translate-x-full
                  "
                />
              </a>

              {/* SURPRISE */}
              <button
                onClick={surpriseMe}
                disabled={!userData?.length}
                className={`
                  rounded-full
                  border px-6 py-3.5
                  text-sm font-semibold
                  backdrop-blur-xl
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:scale-[1.02]
                  active:scale-95
                  disabled:cursor-not-allowed
                  disabled:opacity-50
                  ${
                    darkMode
                      ? `
                        border-white/10
                        bg-white/[0.05]
                        text-white
                        hover:border-violet-500/40
                        hover:bg-violet-500/10
                        hover:shadow-[0_10px_35px_rgba(124,58,237,0.2)]
                      `
                      : `
                        border-violet-100
                        bg-white/70
                        text-slate-700
                        shadow-[0_10px_30px_rgba(79,70,229,0.08)]
                        hover:border-violet-300
                        hover:bg-violet-50
                        hover:text-violet-700
                        hover:shadow-[0_12px_35px_rgba(124,58,237,0.15)]
                      `
                  }
                `}
              >
                ✨ Surprise Me
              </button>
            </div>

            {/* SMALL STATS */}
            <div
              className="
                pv-hero-reveal pv-delay-4
                mt-10 flex items-center gap-7
              "
            >
              <div className="transition-transform duration-300 hover:-translate-y-1">
                <p
                  className={`
                    text-xl font-bold
                    ${
                      darkMode
                        ? "text-white"
                        : "text-slate-900"
                    }
                  `}
                >
                  20+
                </p>

                <p
                  className={`
                    mt-1 text-[10px]
                    uppercase tracking-[0.2em]
                    ${
                      darkMode
                        ? "text-slate-500"
                        : "text-slate-400"
                    }
                  `}
                >
                  Visuals
                </p>
              </div>

              <div
                className={`
                  h-8 w-px
                  ${
                    darkMode
                      ? "bg-white/10"
                      : "bg-slate-200"
                  }
                `}
              />

              <div className="transition-transform duration-300 hover:-translate-y-1">
                <p
                  className={`
                    text-xl font-bold
                    ${
                      darkMode
                        ? "text-white"
                        : "text-slate-900"
                    }
                  `}
                >
                  ∞
                </p>

                <p
                  className={`
                    mt-1 text-[10px]
                    uppercase tracking-[0.2em]
                    ${
                      darkMode
                        ? "text-slate-500"
                        : "text-slate-400"
                    }
                  `}
                >
                  Inspiration
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative pv-hero-image">

            {/* OUTER GLOW */}
            <div
              className={`
                absolute
                -inset-8
                rounded-[4rem]
                blur-[70px]
                pv-glow
                ${
                  darkMode
                    ? "bg-gradient-to-br from-violet-700/20 via-blue-700/15 to-transparent"
                    : "bg-gradient-to-br from-violet-300/35 via-blue-300/25 to-transparent"
                }
              `}
            />

            {/* DECORATIVE ORB */}
            <div
              className="
                absolute -left-8 top-10 z-20
                h-24 w-24
                rounded-full
                border border-white/30
                bg-white/10
                backdrop-blur-xl
                shadow-[0_0_40px_rgba(124,58,237,0.2)]
                pv-hero-orb
              "
            />

            {/* IMAGE FRAME */}
            <div
              className={`
                pv-neon-border
                group relative
                overflow-hidden
                rounded-[2rem]
                border
                p-2
                backdrop-blur-xl
                transition-transform duration-700
                hover:-translate-y-1
                ${
                  darkMode
                    ? `
                      border-white/10
                      bg-white/[0.04]
                      shadow-[0_30px_100px_rgba(0,0,0,0.45)]
                    `
                    : `
                      border-white/80
                      bg-white/60
                      shadow-[0_30px_100px_rgba(79,70,229,0.16)]
                    `
                }
              `}
            >
              <div
                className="
                  relative
                  h-[360px]
                  overflow-hidden
                  rounded-[1.6rem]
                  sm:h-[430px]
                  lg:h-[500px]
                "
              >
                <img
                  src={
                    userData?.length
                      ? userData[0].src?.large
                      : "https://images.unsplash.com/photo-1500534623283-312aade485b7"
                  }
                  alt="Featured photography"
                  className="
                    h-full w-full
                    object-cover
                    transition-transform
                    duration-[1200ms]
                    ease-out
                    group-hover:scale-105
                  "
                />

                {/* IMAGE GRADIENT */}
                <div
                  className="
                    pointer-events-none
                    absolute inset-0
                    bg-gradient-to-t
                    from-black/70
                    via-black/5
                    to-transparent
                    transition-opacity duration-500
                    group-hover:opacity-80
                  "
                />

                {/* TOP GLASS LABEL */}
                <div
                  className="
                    absolute right-5 top-5
                    rounded-2xl
                    border border-white/20
                    bg-white/10
                    px-4 py-3
                    text-white
                    shadow-xl
                    backdrop-blur-xl
                    transition-all duration-500
                    group-hover:-translate-y-1
                    group-hover:bg-white/15
                  "
                >
                  <p className="text-xs font-bold">
                    Beautiful
                  </p>

                  <p className="text-xs font-bold">
                    Moments ✦
                  </p>

                  <p className="mt-1 text-[8px] uppercase tracking-wider text-white/60">
                    Captured Forever
                  </p>
                </div>

                {/* BOTTOM INFO */}
                <div className="absolute bottom-10 left-6 right-6">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/60">
                    Featured Frame
                  </p>

                  <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
                    {userData?.length
                      ? userData[0].photographer
                      : "A world worth seeing"}
                  </h2>
                </div>
              </div>
            </div>

            {/* FLOATING GLASS CARD */}
            <div
              className={`
                absolute
                -bottom-7
                -left-5
                z-30
                hidden
                rounded-2xl
                border
                px-5 py-4
                backdrop-blur-xl
                sm:block
                pv-floating-card
                ${
                  darkMode
                    ? `
                      border-white/10
                      bg-[#071126]/75
                      shadow-[0_20px_50px_rgba(0,0,0,0.35)]
                    `
                    : `
                      border-white/80
                      bg-white/75
                      shadow-[0_20px_50px_rgba(79,70,229,0.14)]
                    `
                }
              `}
            >
              <div className="flex items-center gap-3">
                <div
                  className="
                    flex h-10 w-10
                    items-center justify-center
                    rounded-xl
                    bg-gradient-to-br
                    from-violet-500
                    to-blue-500
                    text-white
                    shadow-[0_0_20px_rgba(124,58,237,0.3)]
                    transition-transform duration-500
                    hover:rotate-6
                    hover:scale-110
                  "
                >
                  ✦
                </div>

                <div>
                  <p
                    className={`
                      text-xs font-bold
                      ${
                        darkMode
                          ? "text-white"
                          : "text-slate-900"
                      }
                    `}
                  >
                    Visual Inspiration
                  </p>

                  <p
                    className={`
                      mt-0.5 text-[10px]
                      ${
                        darkMode
                          ? "text-slate-500"
                          : "text-slate-400"
                      }
                    `}
                  >
                    Discover something beautiful
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM FADE */}
      <div
        className="
          pointer-events-none absolute
          bottom-0 left-1/2
          h-px w-2/3
          -translate-x-1/2
          bg-gradient-to-r
          from-transparent
          via-violet-500/30
          to-transparent
        "
      />
    </section>
  );
};

export default Hero;

