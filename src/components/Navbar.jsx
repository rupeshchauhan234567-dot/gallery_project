
import React, { useEffect, useState } from "react";

const Navbar = ({
  darkMode,
  setDarkMode,
  setSearchQuery,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleSearch = () => {
    const query = searchText.trim();

    if (!query) {
      return;
    }

    // Send search to App.jsx
    setSearchQuery(query);

    // Scroll to Gallery after search is triggered
    setTimeout(() => {
      document.getElementById("gallery")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 150);
  };

  const handleSearchKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const clearSearch = () => {
    setSearchText("");
  };

  return (
    <nav
      className={`
        sticky top-4 z-50 mx-auto w-[calc(100%-2rem)] max-w-7xl
        rounded-2xl border
        backdrop-blur-2xl
        transition-all duration-500 ease-out
        ${scrolled ? "translate-y-0 scale-[0.995]" : "translate-y-0 scale-100"}
        ${
          darkMode
            ? `
              border-white/[0.08]
              bg-[#071126]/70
              shadow-[0_15px_50px_rgba(0,0,0,0.35)]
              ${
                scrolled
                  ? "shadow-[0_20px_70px_rgba(79,70,229,0.15)]"
                  : ""
              }
            `
            : `
              border-white/80
              bg-white/70
              shadow-[0_15px_50px_rgba(79,70,229,0.10)]
              ${
                scrolled
                  ? "shadow-[0_20px_70px_rgba(79,70,229,0.18)]"
                  : ""
              }
            `
        }
      `}
    >
      {/* TOP GRADIENT LINE */}
      <div
        className="
          absolute left-1/2 top-0 h-[1px] w-2/3
          -translate-x-1/2
          overflow-hidden
          bg-gradient-to-r
          from-transparent
          via-violet-500
          to-transparent
          opacity-70
        "
      >
        <span
          className="
            absolute inset-y-0 left-0 w-1/3
            -translate-x-full
            bg-white/70
            blur-sm
            animate-pv-navbar-shimmer
          "
        />
      </div>

      <div className="flex h-[68px] items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* LOGO */}
        <a
          href="#home"
          className="
            group flex items-center gap-3
            transition-transform duration-300
            hover:-translate-y-0.5
          "
        >
          <div
            className="
              relative flex h-10 w-10 items-center justify-center
              rounded-xl
              bg-gradient-to-br
              from-violet-500
              via-purple-500
              to-blue-500
              text-lg text-white
              shadow-[0_0_25px_rgba(124,58,237,0.35)]
              transition-all duration-500
              group-hover:scale-110
              group-hover:rotate-3
              group-hover:shadow-[0_0_35px_rgba(124,58,237,0.55)]
            "
          >
            <span
              className="
                relative z-10
                transition-transform duration-500
                group-hover:rotate-90
              "
            >
              ✦
            </span>

            <div
              className="
                absolute inset-0 rounded-xl
                bg-white/20
                opacity-0 blur-md
                transition-all duration-500
                group-hover:scale-125
                group-hover:opacity-100
              "
            />
          </div>

          <div className="hidden sm:block">
            <h1
              className={`
                text-lg font-bold tracking-tight
                transition-all duration-300
                group-hover:tracking-wide
                ${
                  darkMode
                    ? "text-white"
                    : "text-slate-950"
                }
              `}
            >
              Pixel<span className="pv-gradient-text">Vault</span>
            </h1>

            <p
              className={`
                text-[9px] font-medium uppercase
                tracking-[0.28em]
                transition-all duration-300
                group-hover:tracking-[0.38em]
                ${
                  darkMode
                    ? "text-slate-500"
                    : "text-slate-400"
                }
              `}
            >
              Visual Stories
            </p>
          </div>
        </a>

        {/* NAV LINKS */}
        <div className="hidden items-center gap-1 md:flex">

          {/* HOME */}
          <a
            href="#home"
            className={`
              group relative rounded-full px-4 py-2
              text-sm font-medium
              transition-all duration-300
              hover:-translate-y-0.5
              ${
                darkMode
                  ? "text-slate-400 hover:bg-white/5 hover:text-white"
                  : "text-slate-500 hover:bg-violet-50 hover:text-violet-600"
              }
            `}
          >
            Home

            <span
              className="
                absolute bottom-1 left-1/2 h-[2px] w-0
                -translate-x-1/2 rounded-full
                bg-gradient-to-r from-violet-500 to-blue-500
                shadow-[0_0_8px_rgba(124,58,237,0.5)]
                transition-all duration-300
                group-hover:w-5
              "
            />
          </a>

          {/* GALLERY */}
          <a
            href="#gallery"
            className={`
              group relative rounded-full px-4 py-2
              text-sm font-medium
              transition-all duration-300
              hover:-translate-y-0.5
              ${
                darkMode
                  ? "text-slate-400 hover:bg-white/5 hover:text-white"
                  : "text-slate-500 hover:bg-violet-50 hover:text-violet-600"
              }
            `}
          >
            Gallery

            <span
              className="
                absolute bottom-1 left-1/2 h-[2px] w-0
                -translate-x-1/2 rounded-full
                bg-gradient-to-r from-violet-500 to-blue-500
                shadow-[0_0_8px_rgba(124,58,237,0.5)]
                transition-all duration-300
                group-hover:w-5
              "
            />
          </a>

          {/* ABOUT */}
          <a
            href="#about"
            className={`
              group relative rounded-full px-4 py-2
              text-sm font-medium
              transition-all duration-300
              hover:-translate-y-0.5
              ${
                darkMode
                  ? "text-slate-400 hover:bg-white/5 hover:text-white"
                  : "text-slate-500 hover:bg-violet-50 hover:text-violet-600"
              }
            `}
          >
            About

            <span
              className="
                absolute bottom-1 left-1/2 h-[2px] w-0
                -translate-x-1/2 rounded-full
                bg-gradient-to-r from-violet-500 to-blue-500
                shadow-[0_0_8px_rgba(124,58,237,0.5)]
                transition-all duration-300
                group-hover:w-5
              "
            />
          </a>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-2">

          {/* SEARCH */}
          <div
            className={`
              hidden h-10 items-center gap-2
              rounded-full border px-4
              transition-all duration-500
              lg:flex lg:w-64
              focus-within:scale-[1.02]
              ${
                darkMode
                  ? `
                    border-white/10
                    bg-white/[0.04]
                    text-slate-400
                    focus-within:border-violet-500/40
                    focus-within:bg-white/[0.07]
                    focus-within:shadow-[0_0_25px_rgba(124,58,237,0.12)]
                  `
                  : `
                    border-violet-100
                    bg-violet-50/50
                    text-slate-400
                    focus-within:border-violet-300
                    focus-within:bg-white
                    focus-within:shadow-[0_0_25px_rgba(124,58,237,0.10)]
                  `
              }
            `}
          >
            {/* SEARCH ICON */}
            <button
              type="button"
              onClick={handleSearch}
              aria-label="Search photos"
              className="
                shrink-0
                transition-all duration-300
                hover:scale-125
                hover:rotate-6
                hover:text-violet-400
                active:scale-90
              "
            >
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="m21 21-4.35-4.35m2.1-5.4a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0Z"
                />
              </svg>
            </button>

            {/* INPUT */}
            <input
              type="text"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              onKeyDown={handleSearchKeyDown}
              placeholder="Search beautiful photos..."
              aria-label="Search beautiful photos"
              className={`
                w-full bg-transparent
                text-xs outline-none
                transition-all duration-300
                ${
                  darkMode
                    ? "text-white placeholder:text-slate-500"
                    : "text-slate-900 placeholder:text-slate-400"
                }
              `}
            />

            {/* CLEAR */}
            {searchText && (
              <button
                type="button"
                onClick={clearSearch}
                aria-label="Clear search"
                className="
                  shrink-0
                  text-base
                  leading-none
                  text-slate-400
                  transition-all duration-300
                  hover:scale-125
                  hover:rotate-90
                  hover:text-violet-400
                  active:scale-90
                "
              >
                ×
              </button>
            )}
          </div>

          {/* THEME BUTTON */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Toggle theme"
            className={`
              group relative flex h-10 w-10
              items-center justify-center
              overflow-hidden rounded-full border
              transition-all duration-500
              hover:scale-110
              active:scale-90
              ${
                darkMode
                  ? `
                    border-white/10
                    bg-white/5
                    text-white
                    hover:border-violet-500/50
                    hover:bg-violet-500/10
                    hover:shadow-[0_0_30px_rgba(124,58,237,0.3)]
                  `
                  : `
                    border-violet-100
                    bg-white/80
                    text-violet-600
                    hover:border-violet-300
                    hover:bg-violet-50
                    hover:shadow-[0_0_30px_rgba(124,58,237,0.2)]
                  `
              }
            `}
          >
            <span
              className="
                relative z-10
                text-base
                transition-transform
                duration-500
                group-hover:rotate-180
              "
            >
              {darkMode ? "☀" : "☾"}
            </span>

            <span
              className="
                absolute inset-0
                bg-gradient-to-br
                from-violet-500/20
                to-blue-500/20
                opacity-0
                transition-all duration-300
                group-hover:scale-125
                group-hover:opacity-100
              "
            />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

