
import React from "react";

const AutoScrollCards = ({ darkMode }) => {
  const cards = [
    {
      title: "Visual Stories",
      subtitle: "Every frame tells something",
      icon: "✦",
      tag: "STORY",
      image:
        "https://images.unsplash.com/photo-1497366754035-f200968a6e72",
    },
    {
      title: "Creative Minds",
      subtitle: "Ideas beyond imagination",
      icon: "◈",
      tag: "CREATE",
      image:
        "https://images.unsplash.com/photo-1497366811353-6870744d04b2",
    },
    {
      title: "Pure Aesthetics",
      subtitle: "Beauty in every detail",
      icon: "✧",
      tag: "AESTHETIC",
      image:
        "https://images.unsplash.com/photo-1519608487953-e999c86e7455",
    },
    {
      title: "Light & Shadow",
      subtitle: "Where contrast becomes art",
      icon: "◐",
      tag: "LIGHT",
      image:
        "https://images.unsplash.com/photo-1500534623283-312aade485b7",
    },
    {
      title: "Human Moments",
      subtitle: "Real emotions, frozen",
      icon: "♡",
      tag: "MOMENTS",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    },
    {
      title: "New Perspectives",
      subtitle: "See the world differently",
      icon: "◎",
      tag: "VISION",
      image:
        "https://images.unsplash.com/photo-1470770841072-f978cf4d019e",
    },
    {
      title: "Urban Life",
      subtitle: "Stories from the streets",
      icon: "⌂",
      tag: "URBAN",
      image:
        "https://images.unsplash.com/photo-1449824913935-59a10b8d2000",
    },
    {
      title: "Nature Escape",
      subtitle: "Find beauty in the wild",
      icon: "❋",
      tag: "NATURE",
      image:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    },
    {
      title: "Golden Hour",
      subtitle: "When light feels magical",
      icon: "☼",
      tag: "GOLDEN",
      image:
        "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8",
    },
    {
      title: "Architecture",
      subtitle: "Shapes, lines and spaces",
      icon: "◇",
      tag: "DESIGN",
      image:
        "https://images.unsplash.com/photo-1487958449943-2429e8be8625",
    },
    {
      title: "Travel Diaries",
      subtitle: "Memories from everywhere",
      icon: "✈",
      tag: "TRAVEL",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    },
    {
      title: "Minimal Mood",
      subtitle: "Less can say more",
      icon: "○",
      tag: "MINIMAL",
      image:
        "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85",
    },
  ];

  return (
    <section className="overflow-hidden bg-transparent py-14">

      {/* Heading */}
      <div className="mx-auto mb-8 max-w-7xl px-6">
        <div className="pv-auto-heading">
          <p
            className={`
              text-xs
              font-semibold
              uppercase
              tracking-[0.3em]
              ${
                darkMode
                  ? "text-gray-500"
                  : "text-gray-400"
              }
            `}
          >
            Explore the feeling
          </p>

          <h2
            className={`
              mt-2
              text-2xl
              font-bold
              md:text-3xl
              ${
                darkMode
                  ? "text-white"
                  : "text-gray-900"
              }
            `}
          >
            More than just photographs.
          </h2>
        </div>
      </div>

      {/* Moving Track */}
      <div className="relative overflow-hidden">

        {/* Edge Fade - Left */}
        <div
          className={`
            pointer-events-none
            absolute
            left-0
            top-0
            z-20
            h-full
            w-16
            bg-gradient-to-r
            ${
              darkMode
                ? "from-[#030712]"
                : "from-[#f8faff]"
            }
            to-transparent
          `}
        />

        {/* Edge Fade - Right */}
        <div
          className={`
            pointer-events-none
            absolute
            right-0
            top-0
            z-20
            h-full
            w-16
            bg-gradient-to-l
            ${
              darkMode
                ? "from-[#030712]"
                : "from-[#f8faff]"
            }
            to-transparent
          `}
        />

        <div className="flex w-max animate-pixelvault-scroll gap-5 px-5">

          {cards.map((card, index) => (
            <div
              key={`${card.title}-${index}`}
              className={`
                pv-auto-card
                group
                relative
                h-44
                w-72
                shrink-0
                overflow-hidden
                rounded-3xl
                border
                p-6
                transition-all
                duration-500
                hover:-translate-y-2
                hover:scale-[1.025]
                md:h-48
                md:w-80

                ${
                  darkMode
                    ? `
                      border-white/10
                      bg-white/[0.04]
                      backdrop-blur-xl
                      hover:border-violet-500/70
                      hover:bg-white/[0.08]
                      hover:shadow-[0_0_35px_rgba(124,58,237,0.25)]
                    `
                    : `
                      border-slate-200/80
                      bg-white/70
                      backdrop-blur-xl
                      shadow-[0_15px_50px_rgba(79,70,229,0.08)]
                      hover:border-violet-400
                      hover:bg-white/90
                      hover:shadow-[0_0_40px_rgba(124,58,237,0.18)]
                    `
                }
              `}
              style={{
                animationDelay: `${index * 80}ms`,
              }}
            >

              {/* IMAGE */}
              <img
                src={card.image}
                alt={card.title}
                className="
                  absolute
                  inset-0
                  h-full
                  w-full
                  object-cover
                  transition-transform
                  duration-700
                  ease-out
                  group-hover:scale-110
                "
              />

              {/* DARK OVERLAY */}
              <div
                className="
                  absolute
                  inset-0
                  bg-black/50
                  transition-all
                  duration-500
                  group-hover:bg-black/35
                "
              />

              {/* DECORATIVE GLOW */}
              <div
                className={`
                  absolute
                  -right-10
                  -top-10
                  h-32
                  w-32
                  rounded-full
                  blur-3xl
                  transition-all
                  duration-700
                  group-hover:scale-150
                  group-hover:opacity-80
                  ${
                    darkMode
                      ? "bg-purple-500/10"
                      : "bg-purple-500/5"
                  }
                `}
              />

              {/* SECOND SUBTLE GLOW */}
              <div
                className="
                  pointer-events-none
                  absolute
                  -bottom-16
                  -left-10
                  h-28
                  w-28
                  rounded-full
                  bg-blue-500/10
                  blur-3xl
                  opacity-0
                  transition-all
                  duration-700
                  group-hover:opacity-100
                  group-hover:scale-125
                "
              />

              {/* Top Row */}
              <div className="relative z-10 flex items-start justify-between">

                {/* ICON */}
                <div
                  className={`
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-2xl
                    text-xl
                    transition-all
                    duration-500
                    group-hover:scale-110
                    group-hover:rotate-6
                    ${
                      darkMode
                        ? "bg-white/10 text-white group-hover:bg-violet-500/20"
                        : "bg-black/5 text-gray-900 group-hover:bg-violet-100"
                    }
                  `}
                >
                  {card.icon}
                </div>

                {/* TAG */}
                <span
                  className={`
                    text-[10px]
                    font-bold
                    tracking-[0.2em]
                    transition-all
                    duration-500
                    group-hover:tracking-[0.28em]
                    ${
                      darkMode
                        ? "text-gray-500 group-hover:text-violet-300"
                        : "text-gray-400 group-hover:text-violet-600"
                    }
                  `}
                >
                  {card.tag}
                </span>
              </div>

              {/* Content */}
              <div
                className="
                  relative
                  z-10
                  mt-7
                  transition-transform
                  duration-500
                  group-hover:translate-x-1
                "
              >
                <h3
                  className={`
                    text-lg
                    font-semibold
                    ${
                      darkMode
                        ? "text-white"
                        : "text-gray-900"
                    }
                  `}
                >
                  {card.title}
                </h3>

                <p
                  className={`
                    mt-1
                    text-sm
                    ${
                      darkMode
                        ? "text-gray-400"
                        : "text-gray-500"
                    }
                  `}
                >
                  {card.subtitle}
                </p>
              </div>

              {/* Bottom line */}
              <div
                className={`
                  absolute
                  bottom-0
                  left-0
                  h-[2px]
                  w-0
                  transition-all
                  duration-500
                  group-hover:w-full
                  ${
                    darkMode
                      ? "bg-gradient-to-r from-violet-500 to-blue-500"
                      : "bg-gradient-to-r from-violet-500 to-blue-500"
                  }
                `}
              />

              {/* Small corner shine */}
              <div
                className="
                  pointer-events-none
                  absolute
                  inset-y-0
                  -left-20
                  w-16
                  rotate-12
                  bg-white/10
                  blur-md
                  transition-transform
                  duration-700
                  group-hover:translate-x-[400px]
                "
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AutoScrollCards;

