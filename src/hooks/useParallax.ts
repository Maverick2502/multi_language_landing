import { useEffect, useState, useMemo } from "react";

function useParallax(speed: number) {
  const [offsetY, setOffsetY] = useState<number>(0);

  // Use memoization to cache the scroll handler function
  const scrollHandler = useMemo(() => () => setOffsetY(window.scrollY * speed), [speed]);

  // Use the custom hook to handle the scroll event with the memoized handler
  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    // Cleanup
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [scrollHandler]);

  return offsetY;
}

export { useParallax };
