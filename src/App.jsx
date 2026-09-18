import React, { useEffect, useState } from "react";
import axios from "axios";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Footer from "./components/Footer";
import ImageModal from "./components/ImageModal";
import Gallery from "./components/Gallery";
import AutoScrollCards from "./components/AutoScrollCards";
import BackgroundEffects from "./components/BackgroundEffects";
import CursorGlow from "./components/CursorGlow";
import PhotoOfTheDay from "./components/PhotoOfTheDay";

const API_URL = "https://api.pexels.com/v1";

const App = () => {
  // =====================================================
  // FIXED DATA
  // Hero + Photo of the Day
  // NEVER changes when Gallery is searched
  // =====================================================
  const [userData, setUserData] = useState([]);

  // =====================================================
  // GALLERY DATA
  // Only Gallery uses this
  // =====================================================
  const [galleryData, setGalleryData] = useState([]);

  // =====================================================
  // GALLERY
  // =====================================================
  const [index, setIndex] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [hasMore, setHasMore] = useState(true);
  const [galleryLoading, setGalleryLoading] = useState(false);

  // =====================================================
  // MODAL
  // =====================================================
  const [selectedImage, setSelectedImage] = useState(null);

  // =====================================================
  // THEME
  // =====================================================
  const [darkMode, setDarkMode] = useState(true);

  // =====================================================
  // RESPONSIVE PAGE SIZE
  // Mobile  = 10
  // Desktop = 20
  // =====================================================
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== "undefined"
      ? window.innerWidth < 768
      : false
  );

  useEffect(() => {
    const media = window.matchMedia("(max-width: 767px)");

    const handleChange = (event) => {
      setIsMobile(event.matches);
    };

    setIsMobile(media.matches);

    media.addEventListener("change", handleChange);

    return () => {
      media.removeEventListener("change", handleChange);
    };
  }, []);

  const perPage = isMobile ? 10 : 20;

  // =====================================================
  // FAVORITES
  // =====================================================
  const [favorites, setFavorites] = useState(() => {
    try {
      const saved = localStorage.getItem(
        "pixelvault-favorites"
      );

      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // =====================================================
  // PEXELS HEADERS
  // =====================================================
  const pexelsConfig = {
    headers: {
      Authorization:
        import.meta.env.VITE_PEXELS_API_KEY,
    },
  };

  // =====================================================
  // LOAD FIXED DATA
  //
  // ONE TIME ONLY
  //
  // Hero + POTD never change after search
  // =====================================================
  useEffect(() => {
    let cancelled = false;

    const loadFixedData = async () => {
      try {
        const response = await axios.get(
          `${API_URL}/curated`,
          {
            ...pexelsConfig,
            params: {
              page: 1,
              per_page: 20,
            },
          }
        );

        if (cancelled) return;

        setUserData(response.data.photos || []);
      } catch (error) {
        if (!cancelled) {
          console.error(
            "Failed to load fixed Pexels data:",
            error
          );
        }
      }
    };

    loadFixedData();

    return () => {
      cancelled = true;
    };
  }, []);

  // =====================================================
  // LOAD GALLERY
  //
  // Gallery only
  // =====================================================
  useEffect(() => {
    let cancelled = false;

    const query = searchQuery.trim();

    const loadGallery = async () => {
      setGalleryLoading(true);

      try {
        // -------------------------------------------------
        // PAGE 1 + NO SEARCH
        //
        // Reuse already-loaded fixed curated data.
        // This avoids duplicate API request.
        // -------------------------------------------------
        if (!query && index === 1 && userData.length > 0) {
          const firstPage = userData.slice(0, perPage);

          setGalleryData(firstPage);
          setHasMore(true); // ✅ FIX
          setGalleryLoading(false);

          return;
        }

        let response;

        // -------------------------------------------------
        // CURATED
        // -------------------------------------------------
        if (!query) {
          response = await axios.get(
            `${API_URL}/curated`,
            {
              ...pexelsConfig,
              params: {
                page: index,
                per_page: perPage,
              },
            }
          );
        }

        // -------------------------------------------------
        // SEARCH
        // -------------------------------------------------
        else {
          response = await axios.get(
            `${API_URL}/search`,
            {
              ...pexelsConfig,
              params: {
                query,
                page: index,
                per_page: perPage,
              },
            }
          );
        }

        if (cancelled) return;

        const photos = response.data?.photos || [];

        setGalleryData(photos);

        // Pexels gives next_page when another page exists.
        setHasMore(Boolean(response.data?.next_page));
      } catch (error) {
        if (!cancelled) {
          console.error(
            "Failed to load gallery photos:",
            error
          );

          setGalleryData([]);
          setHasMore(false);
        }
      } finally {
        if (!cancelled) {
          setGalleryLoading(false);
        }
      }
    };

    loadGallery();

    return () => {
      cancelled = true;
    };
  }, [searchQuery, index, perPage, userData]);

  // =====================================================
  // FAVORITES STORAGE
  // =====================================================
  useEffect(() => {
    localStorage.setItem(
      "pixelvault-favorites",
      JSON.stringify(favorites)
    );
  }, [favorites]);

  // =====================================================
  // FAVORITE TOGGLE
  // =====================================================
  const toggleFavorite = (photo) => {
    setFavorites((prev) => {
      const exists = prev.some(
        (item) => item.id === photo.id
      );

      if (exists) {
        return prev.filter(
          (item) => item.id !== photo.id
        );
      }

      return [...prev, photo];
    });
  };

  // =====================================================
  // SELECT PHOTO
  // =====================================================
  const handleSelectPhoto = (photo) => {
    setSelectedImage(photo);
  };

  // =====================================================
  // SURPRISE ME
  //
  // Uses FIXED userData
  // Search cannot change it
  // =====================================================
  const surpriseMe = () => {
    if (userData.length === 0) return;

    const randomIndex = Math.floor(
      Math.random() * userData.length
    );

    handleSelectPhoto(userData[randomIndex]);
  };

  // =====================================================
  // CLOSE MODAL
  // =====================================================
  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div
      className={`
        relative min-h-screen overflow-x-hidden
        transition-colors duration-700
        ${darkMode
          ? "bg-[#030712] text-white"
          : "bg-[#f8faff] text-gray-900"
        }
      `}
    >
      <BackgroundEffects darkMode={darkMode} />

      <CursorGlow darkMode={darkMode} />

      <div className="relative z-10">
        {/* NAVBAR */}
        <Navbar
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          setSearchQuery={(query) => {
            setIndex(1);
            setSearchQuery(query.trim());
          }}
        />

        {/* HERO */}
        <Hero
          darkMode={darkMode}
          surpriseMe={surpriseMe}
          userData={userData}
        />

        {/* AUTO SCROLL */}
        <AutoScrollCards darkMode={darkMode} />

        {/* PHOTO OF THE DAY */}
        <PhotoOfTheDay
          userData={userData}
          darkMode={darkMode}
          onSelect={handleSelectPhoto}
        />

        {/* GALLERY */}
        <Gallery
          userData={galleryData}
          darkMode={darkMode}
          onSelect={handleSelectPhoto}
          index={index}
          setIndex={setIndex}
          favorites={favorites}
          toggleFavorite={toggleFavorite}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          loading={galleryLoading}
          hasMore={hasMore}
        />

        {/* ABOUT */}
        <About darkMode={darkMode} />

        {/* MODAL */}
        <ImageModal
          selectedImage={selectedImage}
          onClose={closeModal}
          darkMode={darkMode}
          userData={galleryData}
          favorites={favorites}
          toggleFavorite={toggleFavorite}
        />

        {/* FOOTER */}
        <Footer darkMode={darkMode} />
      </div>
    </div>
  );
};

export default App;

