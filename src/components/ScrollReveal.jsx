
import React, {
  useEffect,
  useRef,
  useState,
} from "react";

const ScrollReveal = ({
  children,
  delay = 0,
}) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    /*
     * Respect reduced-motion preference.
     */
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reducedMotion) {
      setVisible(true);
      return;
    }

    /*
     * Mobile devices get a lighter reveal.
     * Desktop keeps the slightly more cinematic effect.
     */
    const isMobile = window.matchMedia(
      "(max-width: 767px)"
    ).matches;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        setVisible(true);
        observer.unobserve(element);
      },
      {
        threshold: isMobile ? 0.06 : 0.12,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={ref}
      style={{
        transitionDelay: `${delay}ms`,
      }}
      className={`
        transform
        transition-[opacity,transform]
        duration-700
        ease-[cubic-bezier(0.22,1,0.36,1)]
        ${
          visible
            ? "translate-y-0 opacity-100"
            : "translate-y-8 opacity-0"
        }
      `}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;

