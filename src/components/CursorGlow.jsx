import React, {
  useEffect,
  useRef,
  useState,
} from "react";

const CursorGlow = ({ darkMode }) => {
  const frameRef = useRef(null);
  const targetRef = useRef({
    x: 0,
    y: 0,
  });

  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    /*
     * No cursor tracking on touch devices.
     */
    const mediaQuery = window.matchMedia(
      "(pointer: fine)"
    );

    if (!mediaQuery.matches) {
      return undefined;
    }

    const handleMouseMove = (event) => {
      targetRef.current = {
        x: event.clientX,
        y: event.clientY,
      };

      if (frameRef.current) return;

      frameRef.current = requestAnimationFrame(() => {
        setPosition({
          x: targetRef.current.x,
          y: targetRef.current.y,
        });

        frameRef.current = null;
      });
    };

    window.addEventListener(
      "mousemove",
      handleMouseMove,
      { passive: true }
    );

    return () => {
      window.removeEventListener(
        "mousemove",
        handleMouseMove
      );

      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  return (
    <div
      className="
        pointer-events-none
        fixed
        z-[9999]
        hidden
        h-40
        w-40
        -translate-x-1/2
        -translate-y-1/2
        rounded-full
        blur-3xl
        transition-[left,top]
        duration-300
        ease-out
        md:block
      "
      style={{
        left: position.x,
        top: position.y,
        background: darkMode
          ? "radial-gradient(circle, rgba(124,58,237,0.18) 0%, rgba(37,99,235,0.10) 35%, transparent 70%)"
          : "radial-gradient(circle, rgba(139,92,246,0.14) 0%, rgba(59,130,246,0.08) 35%, transparent 70%)",
      }}
      aria-hidden="true"
    />
  );
};

export default CursorGlow;

