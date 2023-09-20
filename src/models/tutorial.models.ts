import { StaticImageData } from "next/image";

export interface ImageProps {
  tutorial_step_one: StaticImageData;
  tutorial_step_two: StaticImageData;
  tutorial_step_three: StaticImageData;
}

export enum Language {
  RU = "ru",
  TJ = "tj",
  UZ = "uz",
  EN = "en",
}
