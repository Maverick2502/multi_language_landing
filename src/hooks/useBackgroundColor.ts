import { useCallback, useEffect, useState } from "react";

type Scrolling = number;

type BackgroundColor = string;

function useBackgroundColor(): BackgroundColor {
  const [backgroundColor, setBackgroundColor] = useState<BackgroundColor>("#F3F4F5");

  // Define a function that generates the background color based on the scrolling value
  function getBackgroundColor(scrolling: Scrolling): BackgroundColor {
    // Define the minimum and maximum scrolling values
    const minScroll: Scrolling = 1805;
    const maxScroll: Scrolling = 2195;

    // Define the minimum and maximum color values in hexadecimal
    const minColor: number = 0xf3;
    const maxColor: number = 0x0d;

    // Calculate the color difference per scroll unit
    const colorDiff: number = (maxColor - minColor) / (maxScroll - minScroll);

    // Clamp the scrolling value between the minimum and maximum
    scrolling = Math.max(minScroll, Math.min(maxScroll, scrolling));

    // Calculate the color value based on the scrolling value
    let color: number = Math.round(minColor + (scrolling - minScroll) * colorDiff);

    // Declare a new variable with type string
    let colorString: string = color.toString(16).padStart(2, "0");

    // Return the background color in CSS format
    return `#${colorString}${colorString}${colorString}`;
  }

  const handleScroll = useCallback(() => {
    let scrolling: Scrolling = window.scrollY;
    let backgroundColor: BackgroundColor = getBackgroundColor(scrolling);

    setBackgroundColor(backgroundColor);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return backgroundColor;
}

export { useBackgroundColor };
