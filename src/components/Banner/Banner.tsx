import { Trans } from "@lingui/macro";
import classNames from "classnames";
import Image from "next/image";
import countries_banner from "@public/images/countries_banner.webp";
import countries_banner_mobile from "@public/images/countries_banner_mobile.svg";
import blurImage from "@public/images/countries_banner_mobile.webp";
import classes from "./banner.module.scss";
import { useParallax } from "@hooks";

function Banner({ download_app_ref }: any) {
  const imageOffsetY = useParallax(-0.4);

  return (
    <section role="banner" className={classes["banner"]}>
      <Image
        priority
        loading="eager"
        height={1150}
        width={2824}
        className={classNames(classes["banner_countriesIcon"], classes["banner_countriesIcon_desktop"])}
        src={countries_banner.src}
        alt="Flags of several countries. Desktop version."
        style={{ transform: `translateY(${imageOffsetY}px)` }}
      />

      <Image
        priority
        loading="eager"
        blurDataURL={blurImage.blurDataURL}
        height={264}
        width={320}
        className={classNames(classes["banner_countriesIcon"], classes["banner_countriesIcon_mobile"])}
        src={countries_banner_mobile.src}
        alt="Flags of several countries. Mobile version"
      />
      <div className={classes["banner_overlay"]}>
        <h1>
          <Trans id="banner_tagline">Одно приложение, для всех переводов</Trans>
        </h1>

        <h2>
          <Trans id="banner_sub_tagline">Переводите деньги в 20+ страну мира через популярные платежные системы</Trans>
        </h2>

        <button
          onClick={() => download_app_ref?.current.scrollIntoView({ behavior: "smooth", block: "center" })}
          className={classes["btn"]}
          role="button"
          type="button"
        >
          <Trans id="download_app">Скачать</Trans>
        </button>
      </div>
    </section>
  );
}

export default Banner;
