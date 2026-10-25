import React from "react";
import { useLenis } from "lenis/react";

const Pagination = ({
  index,
  setIndex,
  hasMore = true,
}) => {
  const lenis = useLenis();

  const changePage = (newPage) => {
    if (newPage < 1) return;
    if (newPage > index && !hasMore) return;

    setIndex(newPage);

    requestAnimationFrame(() => {
      const gallery = document.getElementById("gallery");

      if (!gallery || !lenis) return;

      lenis.scrollTo(gallery, {
        offset: -20,
        duration: 1.1,
      });
    });
  };

  return (
    <div className="flex items-center justify-center gap-3">
      <button
        type="button"
        onClick={() => changePage(index - 1)}
        disabled={index === 1}
        className="
          rounded-xl border border-white/10
          bg-white/5 px-4 py-2.5
          text-sm font-semibold text-white
          transition-all duration-300
          hover:-translate-y-0.5
          hover:bg-white/10
          disabled:cursor-not-allowed
          disabled:opacity-30
        "
      >
        <span className="hidden sm:inline">
          Previous
        </span>

        <span className="sm:hidden">
          ←
        </span>
      </button>

      <div
        className="
          flex h-10 min-w-10
          items-center justify-center
          rounded-xl
          bg-gradient-to-r
          from-violet-500
          to-blue-500
          px-3
          text-sm font-bold
          text-white
          shadow-[0_8px_25px_rgba(124,58,237,0.22)]
        "
      >
        {index}
      </div>

      <button
        type="button"
        onClick={() => changePage(index + 1)}
        disabled={!hasMore}
        className="
          rounded-xl border border-white/10
          bg-white/5 px-4 py-2.5
          text-sm font-semibold text-white
          transition-all duration-300
          hover:-translate-y-0.5
          hover:bg-white/10
          disabled:cursor-not-allowed
          disabled:opacity-30
        "
      >
        <span className="hidden sm:inline">
          Next
        </span>

        <span className="sm:hidden">
          →
        </span>
      </button>
    </div>
  );
};

export default Pagination;