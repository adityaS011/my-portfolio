/* eslint-disable react/prop-types */
import { useEffect, useRef, useState, useCallback } from "react";

const Carousel = ({ children, ariaLabel, className = "", gapClassName = "gap-4 sm:gap-7" }) => {
  const trackRef = useRef(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  const updateEdges = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    setCanPrev(track.scrollLeft > 4);
    setCanNext(track.scrollLeft + track.clientWidth < track.scrollWidth - 4);
  }, []);

  useEffect(() => {
    updateEdges();
    const track = trackRef.current;
    if (!track) return undefined;

    const observer = new ResizeObserver(updateEdges);
    observer.observe(track);

    return () => observer.disconnect();
  }, [updateEdges, children]);

  const scrollByDir = (dir) => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollBy({ left: dir * track.clientWidth * 0.9, behavior: "smooth" });
  };

  const handleKeyDown = (event) => {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      scrollByDir(1);
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      scrollByDir(-1);
    }
  };

  return (
    <div className={`relative ${className}`}>
      <button
        type="button"
        aria-label="Scroll left"
        onClick={() => scrollByDir(-1)}
        disabled={!canPrev}
        className="absolute left-0 top-1/2 z-10 hidden -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] w-10 h-10 backdrop-blur-xl transition disabled:opacity-30 disabled:cursor-not-allowed hover:bg-white/10 sm:flex"
      >
        <span className="text-white text-lg leading-none">&#8249;</span>
      </button>

      <div
        ref={trackRef}
        onScroll={updateEdges}
        onKeyDown={handleKeyDown}
        tabIndex={0}
        role="region"
        aria-label={ariaLabel}
        className={`no-scrollbar flex overflow-x-auto snap-x snap-mandatory scroll-smooth pb-2 ${gapClassName}`}
      >
        {children.map((child, index) => (
          <div key={child.key ?? index} className="snap-center shrink-0">
            {child}
          </div>
        ))}
      </div>

      <button
        type="button"
        aria-label="Scroll right"
        onClick={() => scrollByDir(1)}
        disabled={!canNext}
        className="absolute right-0 top-1/2 z-10 hidden translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] w-10 h-10 backdrop-blur-xl transition disabled:opacity-30 disabled:cursor-not-allowed hover:bg-white/10 sm:flex"
      >
        <span className="text-white text-lg leading-none">&#8250;</span>
      </button>
    </div>
  );
};

export default Carousel;
