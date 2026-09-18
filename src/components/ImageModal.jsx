import React, { useEffect, useMemo, useState } from "react";

const ImageModal = ({
  selectedImage,
  onClose,
  userData = [],
  favorites = [],
  toggleFavorite,
  onViewPhoto,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const [shareMessage, setShareMessage] = useState("");

  /*
   * Check whether the selected image actually belongs
   * to the current dataset.
   *
   * Hero / Photo of the Day photos may not belong to
   * Gallery data, so they should not suddenly navigate
   * through Gallery photos.
   */
  const selectedIndex = useMemo(() => {
    if (!selectedImage || userData.length === 0) {
      return -1;
    }

    return userData.findIndex(
      (photo) => photo.id === selectedImage.id
    );
  }, [selectedImage, userData]);

  const canNavigate = selectedIndex !== -1;

  useEffect(() => {
    if (!selectedImage) return;

    setIsImageLoaded(false);
    setShareMessage("");

    if (selectedIndex !== -1) {
      setCurrentIndex(selectedIndex);
    } else {
      setCurrentIndex(0);
    }
  }, [selectedImage, selectedIndex]);

  const currentPhoto =
    canNavigate && userData[currentIndex]
      ? userData[currentIndex]
      : selectedImage;

  const imageUrl =
    currentPhoto?.src?.large ||
    currentPhoto?.src?.original ||
    currentPhoto?.src?.medium ||
    "";

  const photographer =
    currentPhoto?.photographer ||
    "Unknown Photographer";

  const photoUrl = currentPhoto?.url || "";

  const isFavorite = favorites.some(
    (item) => item.id === currentPhoto?.id
  );

  const handleNext = () => {
    if (!canNavigate || userData.length <= 1) return;

    const nextIndex =
      currentIndex === userData.length - 1
        ? 0
        : currentIndex + 1;

    const nextPhoto = userData[nextIndex];

    setCurrentIndex(nextIndex);
    setIsImageLoaded(false);

    if (nextPhoto && onViewPhoto) {
      onViewPhoto(nextPhoto);
    }
  };

  const handlePrevious = () => {
    if (!canNavigate || userData.length <= 1) return;

    const previousIndex =
      currentIndex === 0
        ? userData.length - 1
        : currentIndex - 1;

    const previousPhoto = userData[previousIndex];

    setCurrentIndex(previousIndex);
    setIsImageLoaded(false);

    if (previousPhoto && onViewPhoto) {
      onViewPhoto(previousPhoto);
    }
  };

  useEffect(() => {
    if (!selectedImage) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }

      if (!canNavigate) return;

      if (event.key === "ArrowRight") {
        event.preventDefault();
        handleNext();
      }

      if (event.key === "ArrowLeft") {
        event.preventDefault();
        handlePrevious();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [
    selectedImage,
    currentIndex,
    canNavigate,
    userData,
    onClose,
  ]);

  useEffect(() => {
    if (!selectedImage) return;

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [selectedImage]);

  const handleDownload = async () => {
    if (!imageUrl || isDownloading) return;

    setIsDownloading(true);

    try {
      const response = await fetch(imageUrl);

      if (!response.ok) {
        throw new Error("Failed to download image");
      }

      const blob = await response.blob();
      const blobUrl = window.URL.createObjectURL(blob);

      const link = document.createElement("a");

      link.href = blobUrl;
      link.download = `pixelvault-${currentPhoto?.id || "photo"}.jpg`;

      document.body.appendChild(link);
      link.click();
      link.remove();

      window.URL.revokeObjectURL(blobUrl);
    } catch (error) {
      console.log("Download failed:", error);

      /*
       * Fallback:
       * If browser blocks cross-origin download,
       * open the image instead.
       */
      if (imageUrl) {
        window.open(imageUrl, "_blank", "noopener,noreferrer");
      }
    } finally {
      setIsDownloading(false);
    }
  };

  const handleShare = async () => {
    if (!photoUrl && !imageUrl) return;

    const shareUrl = photoUrl || imageUrl;

    try {
      if (navigator.share) {
        await navigator.share({
          title: `PixelVault — Photo by ${photographer}`,
          text: `Beautiful photography by ${photographer}`,
          url: shareUrl,
        });

        return;
      }

      if (navigator.clipboard) {
        await navigator.clipboard.writeText(shareUrl);

        setShareMessage("Link copied ✦");

        window.setTimeout(() => {
          setShareMessage("");
        }, 1800);
      }
    } catch (error) {
      if (error?.name !== "AbortError") {
        console.log("Share failed:", error);
      }
    }
  };

  if (!selectedImage || !currentPhoto) {
    return null;
  }

  return (
    <div
      className="
        fixed inset-0 z-[100]
        flex items-center justify-center
        bg-black/90
        p-3
        backdrop-blur-xl
        sm:p-5
        md:p-8
      "
      role="dialog"
      aria-modal="true"
      aria-label="Photo preview"
      onClick={onClose}
    >
      {/* BACKDROP GLOW */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[70vh]
          w-[70vw]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-violet-600/10
          blur-[120px]
        "
      />

      {/* CLOSE */}
      <button
        type="button"
        onClick={onClose}
        aria-label="Close photo"
        className="
          absolute
          right-3
          top-3
          z-[120]
          flex
          h-10
          w-10
          items-center
          justify-center
          rounded-full
          border
          border-white/15
          bg-white/10
          text-lg
          text-white
          backdrop-blur-xl
          transition-all
          duration-300
          hover:scale-110
          hover:bg-white/20
          active:scale-95
          sm:right-5
          sm:top-5
          sm:h-11
          sm:w-11
        "
      >
        ✕
      </button>

      {/* PREVIOUS */}
      {canNavigate && userData.length > 1 && (
        <button
          type="button"
          onClick={(event) => {
            event.stopPropagation();
            handlePrevious();
          }}
          aria-label="Previous photo"
          className="
            absolute
            left-2
            top-1/2
            z-[110]
            flex
            h-10
            w-10
            -translate-y-1/2
            items-center
            justify-center
            rounded-full
            border
            border-white/15
            bg-white/10
            text-2xl
            text-white
            backdrop-blur-xl
            transition-all
            duration-300
            hover:-translate-x-1
            hover:bg-white/20
            active:scale-95
            sm:left-5
            sm:h-12
            sm:w-12
            sm:text-3xl
          "
        >
          ‹
        </button>
      )}

      {/* NEXT */}
      {canNavigate && userData.length > 1 && (
        <button
          type="button"
          onClick={(event) => {
            event.stopPropagation();
            handleNext();
          }}
          aria-label="Next photo"
          className="
            absolute
            right-2
            top-1/2
            z-[110]
            flex
            h-10
            w-10
            -translate-y-1/2
            items-center
            justify-center
            rounded-full
            border
            border-white/15
            bg-white/10
            text-2xl
            text-white
            backdrop-blur-xl
            transition-all
            duration-300
            hover:translate-x-1
            hover:bg-white/20
            active:scale-95
            sm:right-5
            sm:h-12
            sm:w-12
            sm:text-3xl
          "
        >
          ›
        </button>
      )}

      {/* CONTENT */}
      <div
        className="
          relative
          z-[105]
          flex
          max-h-[94vh]
          w-full
          max-w-5xl
          flex-col
          items-center
        "
        onClick={(event) => event.stopPropagation()}
      >
        {/* IMAGE */}
        <div
          className="
            relative
            flex
            max-h-[72vh]
            w-full
            items-center
            justify-center
            overflow-hidden
            rounded-2xl
            border
            border-white/10
            bg-black/20
            shadow-[0_25px_100px_rgba(0,0,0,0.45)]
            sm:rounded-3xl
            md:max-h-[76vh]
          "
        >
          {!isImageLoaded && imageUrl && (
            <div
              className="
                absolute
                left-1/2
                top-1/2
                z-10
                h-9
                w-9
                -translate-x-1/2
                -translate-y-1/2
                animate-spin
                rounded-full
                border-2
                border-white/15
                border-t-white
              "
            />
          )}

          {imageUrl ? (
            <img
              src={imageUrl}
              alt={`Photography by ${photographer}`}
              onLoad={() => setIsImageLoaded(true)}
              className={`
                max-h-[72vh]
                max-w-full
                object-contain
                transition-all
                duration-500
                md:max-h-[76vh]
                ${
                  isImageLoaded
                    ? "scale-100 opacity-100"
                    : "scale-[0.98] opacity-0"
                }
              `}
            />
          ) : (
            <div
              className="
                flex
                h-64
                w-full
                items-center
                justify-center
                text-sm
                text-white/60
              "
            >
              Image unavailable
            </div>
          )}
        </div>

        {/* INFO PANEL */}
        <div
          className="
            mt-3
            w-full
            rounded-2xl
            border
            border-white/10
            bg-white/[0.07]
            p-3
            backdrop-blur-2xl
            sm:mt-4
            sm:rounded-2xl
            sm:p-4
            md:p-5
          "
        >
          <div className="flex items-center justify-between gap-3">
            {/* PHOTO INFO */}
            <div className="min-w-0">
              <p
                className="
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.18em]
                  text-white/45
                  sm:text-xs
                "
              >
                Photographer
              </p>

              <p
                className="
                  mt-1
                  truncate
                  text-sm
                  font-semibold
                  text-white
                  sm:text-base
                "
              >
                {photographer}
              </p>

              <p className="mt-0.5 text-[10px] text-white/40 sm:text-xs">
                Photo #{currentPhoto.id}
              </p>
            </div>

            {/* ACTIONS */}
            <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
              {/* FAVORITE */}
              <button
                type="button"
                onClick={() =>
                  toggleFavorite(currentPhoto)
                }
                aria-label={
                  isFavorite
                    ? "Remove from favorites"
                    : "Add to favorites"
                }
                className={`
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-full
                  border
                  text-lg
                  transition-all
                  duration-300
                  hover:scale-110
                  active:scale-90
                  sm:h-11
                  sm:w-11
                  sm:text-xl
                  ${
                    isFavorite
                      ? "border-red-400/30 bg-red-500 text-white"
                      : "border-white/10 bg-white/10 text-white hover:bg-white/20"
                  }
                `}
              >
                {isFavorite ? "♥" : "♡"}
              </button>

              {/* DOWNLOAD */}
              <button
                type="button"
                onClick={handleDownload}
                disabled={isDownloading}
                aria-label="Download photo"
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/10
                  bg-white/10
                  text-lg
                  text-white
                  transition-all
                  duration-300
                  hover:scale-110
                  hover:bg-white/20
                  active:scale-90
                  disabled:cursor-wait
                  disabled:opacity-50
                  sm:h-11
                  sm:w-11
                  sm:text-xl
                "
              >
                {isDownloading ? "…" : "↓"}
              </button>

              {/* SHARE */}
              <button
                type="button"
                onClick={handleShare}
                aria-label="Share photo"
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/10
                  bg-white/10
                  text-lg
                  text-white
                  transition-all
                  duration-300
                  hover:scale-110
                  hover:bg-white/20
                  active:scale-90
                  sm:h-11
                  sm:w-11
                  sm:text-xl
                "
              >
                ↗
              </button>
            </div>
          </div>

          {/* SHARE MESSAGE */}
          {shareMessage && (
            <p className="mt-2 text-center text-[10px] font-medium text-violet-300 sm:text-xs">
              {shareMessage}
            </p>
          )}

          {/* COUNTER */}
          {canNavigate && userData.length > 1 && (
            <div className="mt-3 text-center text-[10px] text-white/35 sm:text-xs">
              {currentIndex + 1} / {userData.length}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ImageModal;

