import Image from "next/image";
import app_store from "@public/images/app_store.svg";
import ellipsis from "@public/images/ellipsis.svg";
import ellipsis_md from "@public/images/ellipsis_md.svg";
import globe from "@public/images/globe.webp";
import globe_md from "@public/images/globe_md.webp";
import google_play from "@public/images/google_play.svg";
import qr_code from "@public/images/qr_code.svg";
import classes from "./download.module.scss";
import { Trans } from "@lingui/macro";

function Download({ download_app_ref }: any) {
  return (
    <section ref={download_app_ref}>
      <div className={classes["download"]}>
        <div className={classes["card"]}>
          <div className={classes["card_links"]}>
            <Image width={620} className={classes["card_ellipsis"]} src={ellipsis} alt="ellipsis" />
            <Image width={500} className={classes["card_ellipsis_md"]} src={ellipsis_md} alt="ellipsis" />
            <h3 className={classes["card_text"]}>
              <Trans id="app_humo_transfers">Приложение Хумо Переводы</Trans>
            </h3>

            <div className={classes["card_icons"]}>
              <a
                href="https://play.google.com/store/apps/details?id=tj.humo.transfer"
                aria-label="Download Humo Transfer on Google Play"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src={google_play} alt="Google Play's icon" />
              </a>
              <a
                href="https://apps.apple.com/ru/app/%D1%85%D1%83%D0%BC%D0%BE-%D0%BF%D0%B5%D1%80%D0%B5%D0%B2%D0%BE%D0%B4%D1%8B-%D0%B2-%D1%82%D0%B0%D0%B4%D0%B6%D0%B8%D0%BA%D0%B8%D1%81%D1%82%D0%B0%D0%BD/id1497473277"
                aria-label="Download Humo Transfer on App Store"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src={app_store} alt="App Store's icon" />
              </a>
            </div>

            <div className={classes["card_qrCode"]}>
              <Image src={qr_code} alt="QR code via which the app can be downloaded" />
              <span>
                <Trans id="scan_qr">Наведите камеру и скачайте приложение Хумо Переводы</Trans>
              </span>
            </div>
          </div>
          <div>
            <Image
              className={classes["card_globe"]}
              height={410}
              width={500}
              src={globe}
              placeholder="blur"
              draggable="false"
              alt="Globe's icon for desktops"
            />
            <Image
              className={classes["card_globe_md"]}
              height={560}
              width={500}
              src={globe_md}
              placeholder="blur"
              draggable="false"
              alt="Globe's icon for tablets"
            />
            <Image
              className={classes["card_globe_sm"]}
              height={415}
              width={415}
              src={globe_md}
              placeholder="blur"
              draggable="false"
              alt="Globe's icon for mobile devices"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Download;
