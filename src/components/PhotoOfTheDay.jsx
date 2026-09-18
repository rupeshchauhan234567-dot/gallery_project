import React, { useMemo } from "react";

const PhotoOfTheDay = ({ userData, darkMode, onSelect }) => {
  const photoOfTheDay = useMemo(() => {
    if (!userData?.length) return null;

    // Same photo poore din rahegi, next day automatically change hogi
    const today = new Date();

    const dayNumber = Math.floor(
      new Date(
        today.getFullYear(),
        today.getMonth(),
        today.getDate()
      ).getTime() / 86400000
    );

    return userData[dayNumber % userData.length];
  }, [userData]);

  if (!photoOfTheDay) return null;

  return (
    <section className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8">

      {/* Section heading */}
      <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">

        <div className="pv-potd-heading">

          <div className="mb-3 flex items-center gap-3">
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
              className={`text-[10px] font-bold uppercase tracking-[0.3em] ${
                darkMode
                  ? "text-violet-400"
                  : "text-violet-600"
              }`}
            >
              Daily Inspiration
            </p>
          </div>

          <h2
            className={`text-3xl font-black tracking-tight sm:text-4xl ${
              darkMode
                ? "text-white"
                : "text-slate-950"
            }`}
          >
            Photo of the{" "}
            <span className="pv-gradient-text">
              Day.
            </span>
          </h2>

          <p
            className={`mt-2 text-sm ${
              darkMode
                ? "text-slate-500"
                : "text-slate-500"
            }`}
          >
            One frame. One story. A new perspective every day.
          </p>
        </div>

        {/* Daily badge */}
        <div
          className={`
            pv-potd-badge
            inline-flex
            w-fit
            items-center
            gap-2
            rounded-full
            border
            px-4
            py-2
            text-xs
            font-semibold
            backdrop-blur-xl
            transition-all
            duration-300
            hover:-translate-y-1
            ${
              darkMode
                ? `
                  border-violet-500/20
                  bg-violet-500/10
                  text-violet-300
                  hover:border-violet-500/40
                  hover:bg-violet-500/15
                `
                : `
                  border-violet-200
                  bg-violet-50
                  text-violet-700
                  hover:border-violet-300
                  hover:bg-violet-100
                `
            }
          `}
        >
          <span className="h-2 w-2 animate-pulse rounded-full bg-violet-500" />
          Featured Today
        </div>
      </div>

      {/* Main card */}
      <div
        className={`
          pv-neon-border
          pv-potd-card
          group
          relative
          overflow-hidden
          rounded-[2rem]
          border
          p-2
          transition-transform
          duration-700
          hover:-translate-y-1
          ${
            darkMode
              ? `
                border-white/10
                bg-white/[0.035]
                shadow-[0_30px_100px_rgba(0,0,0,0.4)]
              `
              : `
                border-white/80
                bg-white/70
                shadow-[0_30px_100px_rgba(79,70,229,0.12)]
              `
          }
        `}
      >

        {/* Ambient glow */}
        <div
          className="
            pointer-events-none
            absolute
            -right-24
            -top-24
            h-64
            w-64
            rounded-full
            bg-violet-500/10
            blur-[90px]
            opacity-50
            transition-all
            duration-1000
            group-hover:scale-125
            group-hover:opacity-80
          "
        />

        <div
          className="
            relative
            h-[420px]
            overflow-hidden
            rounded-[1.6rem]
            sm:h-[520px]
            lg:h-[600px]
          "
        >

          {/* IMAGE */}
          <img
            src={photoOfTheDay.src?.large}
            alt={
              photoOfTheDay.alt ||
              "PixelVault Photo of the Day"
            }
            className="
              h-full
              w-full
              object-cover
              transition-transform
              duration-[1400ms]
              ease-out
              group-hover:scale-105
            "
          />

          {/* Image overlay */}
          <div
            className="
              absolute
              inset-0
              bg-gradient-to-t
              from-black
              via-black/20
              to-transparent
              transition-opacity
              duration-700
              group-hover:from-black/90
            "
          />

          {/* Subtle image shine */}
          <div
            className="
              pointer-events-none
              absolute
              inset-y-0
              -left-1/2
              w-1/3
              rotate-12
              bg-white/10
              blur-2xl
              transition-transform
              duration-[1400ms]
              group-hover:translate-x-[500%]
            "
          />

          {/* Top label */}
          <div
            className="
              absolute
              left-5
              top-5
              transition-transform
              duration-500
              group-hover:-translate-y-1
              sm:left-7
              sm:top-7
            "
          >
            <div
              className="
                flex
                items-center
                gap-2
                rounded-2xl
                border
                border-white/20
                bg-black/25
                px-4
                py-3
                text-white
                backdrop-blur-xl
                transition-all
                duration-500
                group-hover:border-white/30
                group-hover:bg-black/35
              "
            >
              <span
                className="
                  text-lg
                  transition-transform
                  duration-500
                  group-hover:rotate-6
                  group-hover:scale-110
                "
              >
                📸
              </span>

              <div>
                <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-white/60">
                  PixelVault
                </p>

                <p className="text-xs font-semibold">
                  Photo of the Day
                </p>
              </div>
            </div>
          </div>

          {/* Bottom content */}
          <div
            className="
              absolute
              bottom-0
              left-0
              right-0
              p-6
              sm:p-8
              lg:p-10
            "
          >
            <div className="max-w-2xl">

              <p
                className="
                  pv-potd-content
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.3em]
                  text-violet-300
                "
              >
                Captured by
              </p>

              <h3
                className="
                  pv-potd-content
                  mt-2
                  text-3xl
                  font-black
                  text-white
                  sm:text-4xl
                  lg:text-5xl
                  transition-transform
                  duration-500
                  group-hover:translate-x-1
                "
              >
                {photoOfTheDay.photographer ||
                  "Unknown Photographer"}
              </h3>

              {photoOfTheDay.alt && (
                <p
                  className="
                    pv-potd-content
                    mt-3
                    max-w-xl
                    text-sm
                    leading-6
                    text-white/65
                  "
                >
                  {photoOfTheDay.alt}
                </p>
              )}

              {/* Button */}
              <button
                onClick={() => onSelect(photoOfTheDay)}
                className="
                  pv-potd-content
                  group/button
                  mt-6
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  bg-white
                  px-5
                  py-3
                  text-sm
                  font-bold
                  text-black
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-violet-50
                  hover:shadow-[0_15px_40px_rgba(255,255,255,0.15)]
                  active:scale-95
                "
              >
                View Full Image

                <span
                  className="
                    text-lg
                    transition-transform
                    duration-300
                    group-hover/button:translate-x-1
                  "
                >
                  →
                </span>
              </button>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhotoOfTheDay;

