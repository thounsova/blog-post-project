import React, { useState, useEffect, useCallback, memo } from "react";

interface ScrollProgressBarProps {
  color?: string;
  height?: number;
  zIndex?: number;
  showPercentage?: boolean;
  position?: "top" | "bottom";
  animate?: boolean;
  barClassName?: string;
  containerClassName?: string;
  percentageClassName?: string;
}

const ScrollProgressBar: React.FC<ScrollProgressBarProps> = ({
  color = "white",
  height = 4,
  zIndex = 50,
  showPercentage = false,
  position = "top",
  animate = true,
  barClassName = "",
  containerClassName = "",
  percentageClassName = "",
}) => {
  const [scrollPos, setScrollPos] = useState(0);

  // Optimize scroll handler with useCallback to prevent unnecessary re-renders
  const handleScroll = useCallback(() => {
    const winScroll =
      document.documentElement.scrollTop || document.body.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    // Prevent division by zero and handle edge cases
    const scrollPercentage = height > 0 ? (winScroll / height) * 100 : 0;

    // Round to one decimal place for better performance
    setScrollPos(Math.round(scrollPercentage * 10) / 10);
  }, []);

  // Add passive: true for better scroll performance
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Initial calculation on mount
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  // Position styles
  const positionStyles = position === "top" ? { top: 0 } : { bottom: 0 };

  return (
    <div
      className={`fixed left-0 w-full ${containerClassName}`}
      style={{
        height: `${height}px`,
        zIndex,
        backgroundColor: "transparent",
        ...positionStyles,
      }}
      aria-hidden="true"
    >
      <div
        className={`h-full transition-transform ${
          animate ? "duration-150 ease-out" : ""
        } ${barClassName}`}
        style={{
          width: "100%",
          backgroundColor: color,
          transform: `translateX(${scrollPos - 100}%)`,
        }}
        role="progressbar"
        aria-valuenow={scrollPos}
        aria-valuemin={0}
        aria-valuemax={100}
      />

      {showPercentage && (
        <div
          className={`absolute right-2 ${
            position === "top" ? "top-1" : "bottom-1"
          } text-xs font-medium ${percentageClassName}`}
          style={{ color }}
        >
          {Math.round(scrollPos)}%
        </div>
      )}
    </div>
  );
};

// Memoize component to prevent unnecessary re-renders
export default memo(ScrollProgressBar);
