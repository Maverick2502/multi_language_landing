import { useEffect, useRef, useState, useCallback } from "react";

const THRESHOLD = 1500;

function useHeaderVisibility() {
  // use a ref to store the current scroll position
  const position = useRef<number>(typeof window !== "undefined" ? window.scrollY : 0);

  // use a state to store the visible state of the header
  const [visible, setVisible] = useState<boolean>(true);

  const handleScroll = useCallback(() => {
    // get the current scroll position
    let scrolling: number = window.scrollY;

    // set the visible state to true if the scroll position is below the threshold, otherwise false
    setVisible(position.current < THRESHOLD);
    // update the ref with the current scroll position
    position.current = scrolling;
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return visible;
}

export { useHeaderVisibility };
