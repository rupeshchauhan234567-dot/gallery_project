import React, { useEffect, useState } from "react";
import axios from "axios";
import { ReactLenis } from "lenis/react";

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

const App = () => {
  // =====================================================
  // FIXED DATA
  // =====================================================

  const [userData, setUserData] = useState([]);

  // =====================================================
  // GALLERY DATA
  // =====================================================

  const [galleryData, setGalleryData] = useState([]);

  // Gallery page
  const [index, setIndex] = useState(1);

  // Search query
  const [searchQuery, setSearchQuery] = useState("");

  // Image modal
  const [selectedImage, setSelectedImage] = useState(null);

  // Theme
  const [darkMode, setDarkMode] = useState(true);

  // =====================================================
  // FAVORITES
  // =====================================================

  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem("pixelvault-favorites");

    return saved ? JSON.parse(saved) : [];
  });

  // =====================================================
  // LOAD FIXED DATA
  // =====================================================

  useEffect(() => {
    let cancelled = false;

    const getInitialData = async () => {
      try {
        const response = await axios.get(
          "https://api.pexels.com/v1/curated",
          {
            headers: {
              Authorization:
                import.meta.env.VITE_PEXELS_API_KEY,
            },
            params: {
              page: 1,
              per_page: 20,
            },
          }
        );

        if (cancelled) return;

        console.log(
          "INITIAL PEXELS DATA:",
          response.data
        );

        // Fixed data
        setUserData(response.data.photos);

        // Initial Gallery data
        setGalleryData(response.data.photos);
      } catch (error) {
        if (!cancelled) {
          console.log(
            "Failed to load initial Pexels photos:",
            error
          );
        }
      }
    };

    getInitialData();

    return () => {
      cancelled = true;
    };
  }, []);

  // =====================================================
  // GALLERY DATA
  // =====================================================

  useEffect(() => {
    let cancelled = false;

    const query = searchQuery.trim();

    const loadGallery = async () => {
      try {
        let response;

        // -----------------------------------------------
        // NO SEARCH
        // -----------------------------------------------

        if (!query) {
          response = await axios.get(
            "https://api.pexels.com/v1/curated",
            {
              headers: {
                Authorization:
                  import.meta.env.VITE_PEXELS_API_KEY,
              },
              params: {
                page: index,
                per_page: 20,
              },
            }
          );
        }

        // -----------------------------------------------
        // SEARCH
        // -----------------------------------------------

        else {
          response = await axios.get(
            "https://api.pexels.com/v1/search",
            {
              headers: {
                Authorization:
                  import.meta.env.VITE_PEXELS_API_KEY,
              },
              params: {
                query: query,
                page: index,
                per_page: 20,
              },
            }
          );
        }

        if (cancelled) return;

        console.log(
          query
            ? "GALLERY SEARCH RESULTS:"
            : "GALLERY CURATED RESULTS:",
          response.data
        );

        // ONLY Gallery changes
        setGalleryData(response.data.photos);
      } catch (error) {
        if (!cancelled) {
          console.log(
            "Failed to load gallery photos:",
            error
          );
        }
      }
    };

    loadGallery();

    return () => {
      cancelled = true;
    };
  }, [searchQuery, index]);

  // =====================================================
  // SAVE FAVORITES
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
    setFavorites((prev) =>
      prev.some((item) => item.id === photo.id)
        ? prev.filter((item) => item.id !== photo.id)
        : [...prev, photo]
    );
  };

  // =====================================================
  // SELECT PHOTO
  // =====================================================

  const handleSelectPhoto = (photo) => {
    setSelectedImage(photo);
  };

  // =====================================================
  // SURPRISE ME
  // =====================================================

  const surpriseMe = () => {
    if (userData.length === 0) return;

    const randomIndex = Math.floor(
      Math.random() * userData.length
    );

    const randomPhoto = userData[randomIndex];

    handleSelectPhoto(randomPhoto);
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
          ${
            darkMode
              ? "bg-[#030712] text-white"
              : "bg-[#f8faff] text-gray-900"
          }
        `}
      >
        {/* =================================================
            BACKGROUND
        ================================================= */}

        <BackgroundEffects darkMode={darkMode} />

        {/* =================================================
            CURSOR
        ================================================= */}

        <CursorGlow darkMode={darkMode} />

        <div className="relative z-10">

          {/* =================================================
              NAVBAR
          ================================================= */}

          <Navbar
            darkMode={darkMode}
            setDarkMode={setDarkMode}
            setSearchQuery={(query) => {
              // New search starts from page 1
              setIndex(1);

              setSearchQuery(query);
            }}
          />

          {/* =================================================
              HERO / BEAUTIFUL MOMENTS
          ================================================= */}

          <Hero
            darkMode={darkMode}
            surpriseMe={surpriseMe}
            userData={userData}
          />

          {/* =================================================
              AUTO SCROLL CARDS
          ================================================= */}

          <AutoScrollCards darkMode={darkMode} />

          {/* =================================================
              PHOTO OF THE DAY
          ================================================= */}

          <PhotoOfTheDay
            userData={userData}
            darkMode={darkMode}
            onSelect={handleSelectPhoto}
          />

          {/* =================================================
              GALLERY
          ================================================= */}

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
          />

          {/* =================================================
              ABOUT
          ================================================= */}

          <About darkMode={darkMode} />

          {/* =================================================
              IMAGE MODAL
          ================================================= */}

          <ImageModal
            selectedImage={selectedImage}
            onClose={closeModal}
            darkMode={darkMode}
            userData={galleryData}
            favorites={favorites}
            toggleFavorite={toggleFavorite}
          />

          {/* =================================================
              FOOTER
          ================================================= */}

          <Footer darkMode={darkMode} />

        </div>
      </div>
  );
};

export default App;

