import { useHeaderVisibility } from "@hooks";
import flag_en from "@public/images/flags/en.webp";
import flag_ru from "@public/images/flags/ru.webp";
import flag_tj from "@public/images/flags/tj.webp";
import flag_uz from "@public/images/flags/uz.webp";
import classNames from "classnames";
import Image, { StaticImageData } from "next/image";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import classes from "./header.module.scss";

type LOCALES = "ru" | "en" | "uz" | "tj";

const languages: Record<LOCALES, string> = {
  ru: `Русский`,
  tj: `Тоҷикӣ`,
  uz: `O'zbek`,
  en: `English`,
};

const images: Record<LOCALES, StaticImageData> = {
  ru: flag_ru,
  tj: flag_tj,
  uz: flag_uz,
  en: flag_en,
};

export function Switcher() {
  const router = useRouter();
  const visible = useHeaderVisibility();
  const [isVisible, setIsVisible] = useState(false);
  const [locale, setLocale] = useState<LOCALES>(router.locale!.split("-")[0] as LOCALES);

  function handleChange(event: React.MouseEvent<HTMLLIElement>) {
    const locale = (event.target as HTMLButtonElement).dataset.value as LOCALES;
    setLocale(locale);
    router.push(router.pathname, router.pathname, { locale });

    setIsVisible(false);
  }

  const handleToggle = () => {
    setIsVisible(prev => !prev);
  };

  const handleClickOutside = useCallback(
    (e: any) => {
      if (!e.target.closest("#language-" + locale)) {
        setIsVisible(false);
      }
    },
    [locale],
  );

  useEffect(() => {
    window.addEventListener("mousedown", handleClickOutside);
    return () => window.removeEventListener("mousedown", handleClickOutside);
  }, [handleClickOutside]);

  useEffect(() => {
    if (!visible) {
      setIsVisible(false);
    }
  }, [visible]);

  return (
    <div className={classes["dropdown"]} id={"language-" + locale}>
      <button
        aria-expanded={isVisible}
        aria-controls={"dropdown_button"}
        type="button"
        onClick={handleToggle}
        className={classes["btn"]}
      >
        <Image
          priority
          className={classes["btn_flag"]}
          width={160}
          height={160}
          src={images[locale]}
          alt="Flag of the countries to choose the language of the website"
        />
        <span className={classes["btn_text"]}>{languages[locale]}</span>

        <div className={classNames(isVisible ? classes["arrow_close"] : classes["arrow_open"])}>
          <svg
            className={classes["arrow"]}
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M3.31976 9.27424L7.38184 5.16854C7.47015 5.07929 7.56582 5.01622 7.66884 4.97933C7.77186 4.94243 7.88225 4.92369 7.99999 4.9231C8.11773 4.9231 8.22811 4.94184 8.33114 4.97933C8.43416 5.01681 8.52983 5.07989 8.61813 5.16854L12.6802 9.27424C12.8421 9.43787 12.9231 9.64613 12.9231 9.89902C12.9231 10.1519 12.8421 10.3602 12.6802 10.5238C12.5183 10.6874 12.3123 10.7692 12.0621 10.7692C11.8119 10.7692 11.6058 10.6874 11.4439 10.5238L7.99999 7.04288L4.55604 10.5238C4.39415 10.6874 4.1881 10.7692 3.9379 10.7692C3.6877 10.7692 3.48165 10.6874 3.31976 10.5238C3.15786 10.3602 3.07691 10.1519 3.07691 9.89902C3.07691 9.64613 3.15786 9.43787 3.31976 9.27424Z"
              fill="#333333"
            />
          </svg>
        </div>
      </button>

      {isVisible && (
        <ul className={classes["menu"]}>
          {Object.keys(languages).map(language => {
            return (
              <li
                onClick={handleChange}
                tabIndex={0}
                role="button"
                aria-label={`Change language to ${languages[language as LOCALES]}`}
                key={language}
              >
                <button type="button" data-value={language} className={classes["menu_item"]}>
                  {languages[language as LOCALES]}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
