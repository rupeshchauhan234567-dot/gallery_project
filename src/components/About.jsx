
import React from "react";

const About = ({ darkMode }) => {
  return (
    <section
      id="about"
      className={`
        relative overflow-hidden
        mx-auto max-w-7xl
        px-6 py-24
        lg:px-8
      `}
    >
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className={`
            pv-about-orb-one
            absolute -left-32 top-20
            h-72 w-72 rounded-full
            blur-3xl
            ${darkMode ? "bg-violet-600/10" : "bg-violet-400/10"}
          `}
        />

        <div
          className={`
            pv-about-orb-two
            absolute -right-32 bottom-0
            h-80 w-80 rounded-full
            blur-3xl
            ${darkMode ? "bg-blue-600/10" : "bg-blue-400/10"}
          `}
        />
      </div>

      {/* Section heading */}
      <div className="relative mb-14 text-center">
        <p
          className="
            pv-about-eyebrow
            text-xs font-semibold uppercase
            tracking-[0.35em] text-violet-400
          "
        >
          About PixelVault
        </p>

        <h2
          className={`
            pv-about-main-heading
            mx-auto mt-5 max-w-3xl
            text-4xl font-bold tracking-tight
            sm:text-5xl lg:text-6xl
            ${darkMode ? "text-white" : "text-slate-900"}
          `}
        >
          More than a gallery.
          <span className="block pv-gradient-text">
            A place for visual stories.
          </span>
        </h2>

        <p
          className={`
            pv-about-intro
            mx-auto mt-6 max-w-2xl
            text-sm leading-7 sm:text-base
            ${darkMode ? "text-gray-400" : "text-slate-500"}
          `}
        >
          PixelVault brings photography, creativity and discovery
          together in one immersive space.
        </p>
      </div>

      {/* Main editorial panel */}
      <div
        className={`
          pv-about-panel
          relative overflow-hidden rounded-[2rem]
          border
          ${
            darkMode
              ? "border-white/10 bg-white/[0.035]"
              : "border-slate-200 bg-white/70"
          }
          backdrop-blur-2xl
        `}
      >
        {/* Animated border glow */}
        <div className="pointer-events-none absolute inset-0 rounded-[2rem] opacity-40">
          <div className="pv-about-border absolute inset-0 rounded-[2rem]" />
        </div>

        <div className="relative grid lg:grid-cols-[1.05fr_0.95fr]">

          {/* LEFT */}
          <div
            className={`
              pv-about-copy
              border-b p-8 sm:p-10 lg:border-b-0 lg:border-r lg:p-14
              ${
                darkMode
                  ? "border-white/10"
                  : "border-slate-200"
              }
            `}
          >
            <div className="mb-8 flex items-center gap-3">
              <span
                className="
                  h-2 w-2 rounded-full
                  bg-violet-400
                  shadow-[0_0_18px_rgba(167,139,250,0.8)]
                  animate-pulse
                "
              />

              <span
                className={`
                  text-xs font-semibold uppercase
                  tracking-[0.25em]
                  ${darkMode ? "text-gray-500" : "text-slate-400"}
                `}
              >
                Our Philosophy
              </span>
            </div>

            <h3
              className={`
                max-w-xl text-3xl font-semibold
                leading-tight sm:text-4xl
                ${darkMode ? "text-white" : "text-slate-900"}
              `}
            >
              Every image has a
              <span className="pv-gradient-text"> feeling.</span>
            </h3>

            <p
              className={`
                mt-7 max-w-xl text-base leading-8
                ${darkMode ? "text-gray-400" : "text-slate-600"}
              `}
            >
              Explore images from creators around the world, discover
              perspectives that catch your eye, and save the moments
              that feel worth coming back to.
            </p>

            <p
              className={`
                mt-5 max-w-xl text-sm leading-7
                ${darkMode ? "text-gray-500" : "text-slate-500"}
              `}
            >
              From quiet minimal frames to expressive portraits and
              unforgettable landscapes, PixelVault is built around the
              simple idea that great photography should be discovered,
              appreciated and remembered.
            </p>

            {/* Quote */}
            <div
              className={`
                pv-about-quote
                mt-10 border-l-2 pl-5
                ${
                  darkMode
                    ? "border-violet-500/60"
                    : "border-violet-400"
                }
              `}
            >
              <p
                className={`
                  text-sm italic leading-7
                  ${darkMode ? "text-gray-300" : "text-slate-600"}
                `}
              >
                “Discover something beautiful. Keep the feeling.”
              </p>
            </div>
          </div>

          {/* RIGHT */}
          <div className="pv-about-values p-8 sm:p-10 lg:p-14">
            <p
              className={`
                text-xs font-semibold uppercase
                tracking-[0.25em]
                ${darkMode ? "text-gray-500" : "text-slate-400"}
              `}
            >
              The PixelVault Journey
            </p>

            <div className="mt-7 space-y-3">

              {/* ITEM 01 */}
              <div
                className={`
                  pv-about-value group
                  rounded-2xl border p-5
                  transition-all duration-500
                  hover:-translate-y-1
                  ${
                    darkMode
                      ? "border-white/10 bg-white/[0.035] hover:border-violet-500/30 hover:bg-violet-500/[0.06]"
                      : "border-slate-200 bg-white/70 hover:border-violet-300 hover:bg-violet-50/60"
                  }
                `}
              >
                <div className="flex items-start gap-4">
                  <span
                    className="
                      text-xl font-bold text-violet-400
                      transition-transform duration-500
                      group-hover:scale-110
                    "
                  >
                    01
                  </span>

                  <div>
                    <h4
                      className={`
                        font-semibold
                        ${darkMode ? "text-white" : "text-slate-900"}
                      `}
                    >
                      Discover
                    </h4>

                    <p
                      className={`
                        mt-1 text-sm leading-6
                        ${darkMode ? "text-gray-500" : "text-slate-500"}
                      `}
                    >
                      Find photographs and perspectives that stop you
                      for a moment.
                    </p>
                  </div>
                </div>
              </div>

              {/* ITEM 02 */}
              <div
                className={`
                  pv-about-value group
                  rounded-2xl border p-5
                  transition-all duration-500
                  hover:-translate-y-1
                  ${
                    darkMode
                      ? "border-white/10 bg-white/[0.035] hover:border-purple-500/30 hover:bg-purple-500/[0.06]"
                      : "border-slate-200 bg-white/70 hover:border-purple-300 hover:bg-purple-50/60"
                  }
                `}
              >
                <div className="flex items-start gap-4">
                  <span
                    className="
                      text-xl font-bold text-purple-400
                      transition-transform duration-500
                      group-hover:scale-110
                    "
                  >
                    02
                  </span>

                  <div>
                    <h4
                      className={`
                        font-semibold
                        ${darkMode ? "text-white" : "text-slate-900"}
                      `}
                    >
                      Appreciate
                    </h4>

                    <p
                      className={`
                        mt-1 text-sm leading-6
                        ${darkMode ? "text-gray-500" : "text-slate-500"}
                      `}
                    >
                      Slow down, notice the details and enjoy the
                      story behind every frame.
                    </p>
                  </div>
                </div>
              </div>

              {/* ITEM 03 */}
              <div
                className={`
                  pv-about-value group
                  rounded-2xl border p-5
                  transition-all duration-500
                  hover:-translate-y-1
                  ${
                    darkMode
                      ? "border-white/10 bg-white/[0.035] hover:border-blue-500/30 hover:bg-blue-500/[0.06]"
                      : "border-slate-200 bg-white/70 hover:border-blue-300 hover:bg-blue-50/60"
                  }
                `}
              >
                <div className="flex items-start gap-4">
                  <span
                    className="
                      text-xl font-bold text-blue-400
                      transition-transform duration-500
                      group-hover:scale-110
                    "
                  >
                    03
                  </span>

                  <div>
                    <h4
                      className={`
                        font-semibold
                        ${darkMode ? "text-white" : "text-slate-900"}
                      `}
                    >
                      Collect
                    </h4>

                    <p
                      className={`
                        mt-1 text-sm leading-6
                        ${darkMode ? "text-gray-500" : "text-slate-500"}
                      `}
                    >
                      Save the moments and visual ideas you want to
                      return to later.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Mini footer */}
            <div className="mt-8 flex items-center gap-3">
              <span className="h-px flex-1 bg-gradient-to-r from-violet-500/50 to-transparent" />

              <span
                className={`
                  text-[10px] uppercase tracking-[0.3em]
                  ${darkMode ? "text-gray-600" : "text-slate-400"}
                `}
              >
                PixelVault
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom divider */}
      <div
        className={`
          mt-20 h-px
          bg-gradient-to-r
          from-transparent
          ${
            darkMode ? "via-white/10" : "via-slate-200"
          }
          to-transparent
        `}
      />
    </section>
  );
};

export default About;

