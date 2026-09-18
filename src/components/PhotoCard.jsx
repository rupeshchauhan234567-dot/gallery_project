import React from "react";

const PhotoCard = ({
  elem,
  darkMode,
  onSelect,
  favorites = [],
  toggleFavorite,
}) => {
  const isFavorite = favorites.some(
    (item) => item.id === elem.id
  );

  const imageSrc =
    elem.src?.large ||
    elem.src?.medium ||
    elem.src?.original;

  return (
    <article className="pv-photo-card mb-4 break-inside-avoid sm:mb-5">
      <div
        onClick={() => onSelect(elem)}
        className={`
          pv-neon-border
          group relative cursor-pointer
          overflow-hidden rounded-2xl border
          transition-all duration-500
          hover:-translate-y-1.5
          hover:scale-[1.01]
          hover:shadow-[0_20px_50px_rgba(79,70,229,0.18)]
          ${
            darkMode
              ? `
                border-white/10
                bg-white/[0.04]
                backdrop-blur-xl
              `
              : `
                border-slate-200/70
                bg-white/75
                backdrop-blur-xl
                shadow-[0_10px_40px_rgba(79,70,229,0.06)]
              `
          }
        `}
      >
        {/* IMAGE */}
        <div className="relative w-full overflow-hidden">
          <img
            src={imageSrc}
            alt={
              elem.alt ||
              `Photo by ${elem.photographer || "Pexels photographer"}`
            }
            loading="lazy"
            decoding="async"
            draggable="false"
            className="
              block
              h-auto
              w-full
              object-cover
              transition-transform
              duration-700
              ease-out
              group-hover:scale-[1.045]
            "
          />

          {/* DARK GRADIENT */}
          <div
            className="
              pointer-events-none
              absolute inset-x-0 bottom-0
              h-36
              bg-gradient-to-t
              from-black/75
              via-black/20
              to-transparent
              opacity-90
            "
          />

          {/* FAVORITE */}
          <button
            type="button"
            aria-label={
              isFavorite
                ? "Remove from favorites"
                : "Add to favorites"
            }
            onClick={(event) => {
              event.stopPropagation();
              toggleFavorite(elem);
            }}
            className={`
              pv-card-favorite
              absolute right-3 top-3 z-20
              flex h-9 w-9 items-center justify-center
              rounded-full border
              backdrop-blur-xl
              transition-all duration-300
              ${
                isFavorite
                  ? "border-violet-400/50 bg-violet-500 text-white"
                  : darkMode
                  ? "border-white/15 bg-black/30 text-white/80 hover:bg-white/15 hover:text-white"
                  : "border-white/70 bg-white/80 text-slate-600 hover:bg-white"
              }
            `}
          >
            <span
              className={
                isFavorite
                  ? "scale-110"
                  : ""
              }
            >
              {isFavorite ? "♥" : "♡"}
            </span>
          </button>

          {/* HOVER OVERLAY */}
          <div
            className="
              pointer-events-none
              absolute inset-0
              bg-gradient-to-t
              from-violet-950/35
              via-transparent
              to-white/5
              opacity-0
              transition-opacity
              duration-500
              group-hover:opacity-100
            "
          />

          {/* PHOTOGRAPHER */}
          <div
            className="
              pointer-events-none
              absolute bottom-0 left-0 right-0
              z-10
              translate-y-3
              px-4 pb-4
              opacity-0
              transition-all duration-500
              group-hover:translate-y-0
              group-hover:opacity-100
            "
          >
            <p className="text-xs font-medium text-white/60">
              Captured by
            </p>

            <p className="mt-0.5 truncate text-sm font-semibold text-white">
              {elem.photographer || "Unknown photographer"}
            </p>
          </div>

          {/* SHINE */}
          <span
            className="
              pointer-events-none
              absolute inset-y-0 -left-1/2
              z-20 w-1/2
              skew-x-[-18deg]
              bg-gradient-to-r
              from-transparent
              via-white/15
              to-transparent
              opacity-0
              transition-all
              duration-700
              group-hover:left-[120%]
              group-hover:opacity-100
            "
          />
        </div>

        {/* ACCENT */}
        <div
          className="
            h-[2px] w-full
            origin-left
            scale-x-0
            bg-gradient-to-r
            from-violet-500
            via-blue-500
            to-cyan-400
            transition-transform
            duration-500
            group-hover:scale-x-100
          "
        />
      </div>
    </article>
  );
};

export default PhotoCard;

