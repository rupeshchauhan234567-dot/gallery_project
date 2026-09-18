import React, { useEffect, useState } from "react";
import Pagination from "./Pagination";
import PhotoCard from "./PhotoCard";
import ScrollReveal from "./ScrollReveal";

const Gallery = ({
  userData = [],
  darkMode,
  onSelect,
  index,
  setIndex,
  favorites = [],
  toggleFavorite,
  searchQuery,
  setSearchQuery,
  loading = false,
  hasMore = true,
}) => {
  const [showFavorites, setShowFavorites] = useState(false);
  const [selectedMood, setSelectedMood] = useState("All");
  const [searchText, setSearchText] = useState(searchQuery || "");

  useEffect(() => {
    setSearchText(searchQuery || "");
  }, [searchQuery]);

  const moods = [
    { name: "All", icon: "✦", query: "" },
    { name: "Nature", icon: "🌿", query: "nature" },
    { name: "Urban", icon: "🏙️", query: "urban city" },
    { name: "Portrait", icon: "👤", query: "portrait" },
    {
      name: "Warm",
      icon: "☀️",
      query: "warm sunset golden",
    },
    {
      name: "Cool",
      icon: "❄️",
      query: "blue cool winter",
    },
    {
      name: "Minimal",
      icon: "◯",
      query: "minimal aesthetic",
    },
  ];

  const filteredData = showFavorites
    ? userData.filter((photo) =>
        favorites.some(
          (item) => item.id === photo.id
        )
      )
    : userData;

  const submitSearch = () => {
    const value = searchText.trim();

    setShowFavorites(false);
    setSelectedMood("All");
    setIndex(1);
    setSearchQuery(value);
  };

  const handleSearchKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      submitSearch();
    }
  };

  const clearSearch = () => {
    setSearchText("");
    setShowFavorites(false);
    setSelectedMood("All");
    setIndex(1);
    setSearchQuery("");
  };

  const handleMood = (mood) => {
    setSelectedMood(mood.name);
    setShowFavorites(false);
    setSearchText(mood.query);
    setIndex(1);
    setSearchQuery(mood.query);
  };

  const toggleFavorites = () => {
    setShowFavorites((prev) => !prev);
    setSelectedMood("All");
    setIndex(1);
  };

  const resetFilters = () => {
    setSearchText("");
    setSearchQuery("");
    setSelectedMood("All");
    setShowFavorites(false);
    setIndex(1);
  };

  return (
    <section
      id="gallery"
      className="mx-auto w-full max-w-7xl px-4 py-16"
    >
      {/* =================================================
          HEADER
      ================================================= */}
      <div className="mb-10">
        <div className="mb-8 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p
              className={`pv-gallery-eyebrow text-xs font-bold uppercase tracking-[0.25em] ${
                darkMode
                  ? "text-blue-400"
                  : "text-blue-600"
              }`}
            >
              Curated Collection
            </p>

            <h2
              className={`pv-gallery-heading mt-2 text-3xl font-bold tracking-tight md:text-5xl ${
                darkMode
                  ? "text-white"
                  : "text-gray-900"
              }`}
            >
              Latest Photography
            </h2>

            <p
              className={`pv-gallery-description mt-3 max-w-xl text-sm leading-6 md:text-base ${
                darkMode
                  ? "text-gray-400"
                  : "text-gray-500"
              }`}
            >
              Discover beautiful moments, moods and
              visual stories from photographers around
              the world.
            </p>
          </div>

          <div
            className={`pv-gallery-page rounded-2xl border px-5 py-3 backdrop-blur-xl ${
              darkMode
                ? "border-white/10 bg-white/5 text-gray-400"
                : "border-gray-200 bg-white text-gray-500 shadow-sm"
            }`}
          >
            <span className="text-xs uppercase tracking-wider">
              Page
            </span>

            <span
              className={`ml-2 text-lg font-bold ${
                darkMode
                  ? "text-white"
                  : "text-gray-900"
              }`}
            >
              {index}
            </span>

            <span className="pv-page-dot" />
          </div>
        </div>

        {/* =================================================
            CONTROLS
        ================================================= */}
        <div
          className={`pv-gallery-controls rounded-3xl border p-4 shadow-xl backdrop-blur-xl md:p-5 ${
            darkMode
              ? "border-white/10 bg-white/[0.04] shadow-black/20"
              : "border-gray-200 bg-white shadow-gray-200/50"
          }`}
        >
          {/* SEARCH */}
          <div className="flex flex-col gap-3 lg:flex-row">
            <div className="pv-gallery-search-wrap relative flex-1">
              <span
                className={`pointer-events-none absolute left-4 top-1/2 z-10 -translate-y-1/2 text-lg ${
                  darkMode
                    ? "text-gray-500"
                    : "text-gray-400"
                }`}
              >
                ⌕
              </span>

              <input
                type="text"
                value={searchText}
                onChange={(event) =>
                  setSearchText(event.target.value)
                }
                onKeyDown={handleSearchKeyDown}
                placeholder="Search photos, moods, places..."
                className={`pv-gallery-search w-full rounded-2xl border py-3.5 pl-11 pr-24 text-sm outline-none transition-all duration-300 focus:ring-2 ${
                  darkMode
                    ? "border-white/10 bg-white/5 text-white placeholder:text-gray-500 focus:border-blue-500/50 focus:ring-blue-500/20"
                    : "border-gray-200 bg-gray-50 text-gray-900 placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500/10"
                }`}
              />

              <div className="absolute right-3 top-1/2 flex -translate-y-1/2 items-center gap-1.5">
                {searchText && (
                  <button
                    type="button"
                    onClick={clearSearch}
                    className={`pv-gallery-clear rounded-xl px-2.5 py-1.5 text-xs font-semibold ${
                      darkMode
                        ? "bg-white/10 text-gray-300"
                        : "bg-gray-200 text-gray-600"
                    }`}
                  >
                    Clear
                  </button>
                )}

                <button
                  type="button"
                  onClick={submitSearch}
                  aria-label="Search"
                  className="pv-gallery-search-button rounded-xl bg-gradient-to-r from-violet-500 to-blue-500 px-3 py-1.5 text-sm font-semibold text-white"
                >
                  ↗
                </button>
              </div>
            </div>

            {/* FAVORITES */}
            <button
              type="button"
              onClick={toggleFavorites}
              className={`pv-gallery-favorite group relative overflow-hidden rounded-2xl border px-5 py-3.5 text-sm font-semibold ${
                showFavorites
                  ? "border-red-500 bg-red-500 text-white"
                  : darkMode
                  ? "border-white/10 bg-white/5 text-gray-300 hover:bg-white/10"
                  : "border-gray-200 bg-gray-50 text-gray-700 hover:bg-gray-100"
              }`}
            >
              <span className="relative z-10 inline-flex items-center gap-2">
                <span className="pv-heart-icon">
                  {showFavorites ? "♥" : "♡"}
                </span>

                Favorites ({favorites.length})
              </span>

              <span className="pv-button-shine" />
            </button>
          </div>

          {/* MOODS */}
          <div className="mt-5 border-t border-white/10 pt-5">
            <div className="mb-3 flex items-center justify-between">
              <p
                className={`pv-mood-label text-xs font-semibold uppercase tracking-[0.2em] ${
                  darkMode
                    ? "text-slate-500"
                    : "text-slate-400"
                }`}
              >
                Explore by Mood
              </p>

              <span
                className={`pv-photo-count text-xs ${
                  darkMode
                    ? "text-gray-500"
                    : "text-gray-400"
                }`}
              >
                {filteredData.length} photos
              </span>
            </div>

            <div className="flex flex-wrap gap-2">
              {moods.map((mood, moodIndex) => (
                <button
                  key={mood.name}
                  type="button"
                  onClick={() => handleMood(mood)}
                  style={{
                    animationDelay: `${
                      150 + moodIndex * 55
                    }ms`,
                  }}
                  className={`pv-mood-button group relative overflow-hidden rounded-full border px-4 py-2 text-sm font-medium ${
                    selectedMood === mood.name
                      ? "border-violet-500 bg-gradient-to-r from-violet-500 to-blue-500 text-white shadow-[0_8px_25px_rgba(124,58,237,0.25)]"
                      : darkMode
                      ? "border-white/10 bg-white/5 text-slate-400 hover:border-violet-500/30 hover:bg-violet-500/10 hover:text-white"
                      : "border-black/10 bg-white/70 text-slate-600 hover:border-violet-300 hover:bg-violet-50 hover:text-violet-700"
                  }`}
                >
                  <span className="relative z-10 inline-flex items-center">
                    <span className="pv-mood-icon mr-1.5">
                      {mood.icon}
                    </span>

                    {mood.name}
                  </span>

                  <span className="pv-button-shine" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* =================================================
          LOADING
      ================================================= */}
      {loading ? (
        <div className="flex min-h-60 items-center justify-center">
          <div className="text-center">
            <div
              className={`pv-gallery-loader mx-auto mb-4 h-10 w-10 rounded-full border-2 ${
                darkMode
                  ? "border-white/20 border-t-white"
                  : "border-black/10 border-t-black"
              }`}
            />

            <p
              className={`text-sm ${
                darkMode
                  ? "text-gray-400"
                  : "text-gray-500"
              }`}
            >
              Discovering beautiful photos...
            </p>
          </div>
        </div>
      ) : filteredData.length === 0 ? (
        /* =================================================
            EMPTY
        ================================================= */
        <div className="flex min-h-60 items-center justify-center">
          <div className="pv-empty-state text-center">
            <div className="pv-empty-icon mb-3 text-4xl">
              ⌕
            </div>

            <h3
              className={`text-lg font-semibold ${
                darkMode
                  ? "text-white"
                  : "text-gray-900"
              }`}
            >
              No photos found
            </h3>

            <p
              className={`mt-1 text-sm ${
                darkMode
                  ? "text-gray-500"
                  : "text-gray-400"
              }`}
            >
              Try another search or explore a different
              mood.
            </p>

            <button
              type="button"
              onClick={resetFilters}
              className="pv-reset-button group relative mt-4 overflow-hidden rounded-xl bg-blue-500 px-5 py-2.5 text-sm font-medium text-white"
            >
              <span className="relative z-10">
                Reset Filters
              </span>

              <span className="pv-button-shine" />
            </button>
          </div>
        </div>
      ) : (
        /* =================================================
            RESPONSIVE MASONRY
        ================================================= */
        <div
          className="
            pv-gallery-grid
            columns-1
            gap-4
            sm:columns-2
            sm:gap-5
            lg:columns-3
            xl:columns-4
          "
        >
          {filteredData.map((photo, photoIndex) => (
            <ScrollReveal
              key={photo.id}
              delay={Math.min(photoIndex * 45, 450)}
            >
              <PhotoCard
                elem={photo}
                darkMode={darkMode}
                onSelect={onSelect}
                favorites={favorites}
                toggleFavorite={toggleFavorite}
              />
            </ScrollReveal>
          ))}
        </div>
      )}

      {/* =================================================
          PAGINATION
      ================================================= */}
      {!loading && filteredData.length > 0 && (
        <div className="mt-10">
          <Pagination
            index={index}
            setIndex={setIndex}
            hasMore={hasMore}
          />
        </div>
      )}
    </section>
  );
};

export default Gallery;

