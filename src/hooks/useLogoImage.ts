import { StaticImageData } from "next/image";
import { useRouter } from "next/router";

interface LogoProps {
  logo_cyrillic: string | StaticImageData;
  logo_en: string | StaticImageData;
}

// Hook takes the logo images as arguments and returns the image based on the router locale
function useLogoImage({ logo_cyrillic, logo_en }: LogoProps) {
  // Get the router object
  const router = useRouter();
  // Check if the locale is "tj" or "ru"
  let change_image = ["tj", "ru"].some((lang: string) => lang === router?.locale);

  return change_image ? logo_cyrillic : logo_en;
}

export { useLogoImage };
