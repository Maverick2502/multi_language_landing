import { useBackgroundColor } from "@hooks";
import * as I from "@models";
import phone_ru from "@public/images/testimonials/phone_ru.svg";
import phone_tj from "@public/images/testimonials/phone_tj.svg";
import phone_en from "@public/images/testimonials/phone_en.svg";
import phone_uz from "@public/images/testimonials/phone_uz.svg";
import blur_phone_en from "@public/images/testimonials/blur_phone_en.webp";
import blur_phone_ru from "@public/images/testimonials/blur_phone_ru.webp";
import blur_phone_tj from "@public/images/testimonials/blur_phone_tj.webp";
import blur_phone_uz from "@public/images/testimonials/blur_phone_uz.webp";
import five_stars from "@public/images/testimonials/five_stars.svg";
import germany_flag from "@public/images/testimonials/germany_flag.svg";
import korti_milli from "@public/images/testimonials/korti_milli.svg";
import malaysia_flag from "@public/images/testimonials/malaysia_flag.svg";
import south_korea_flag from "@public/images/testimonials/south_korea_flag.svg";
import star_circle from "@public/images/testimonials/star_circle.svg";
import turkey_flag from "@public/images/testimonials/turkey_flag.svg";
import union_pay from "@public/images/testimonials/union_pay.svg";
import uz_card from "@public/images/testimonials/uz_card.svg";
import visa from "@public/images/testimonials/visa.svg";
import { LazyMotion, domAnimation, m, useScroll, useTransform } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { ElementRef, useRef } from "react";
import classes from "./testimonials.module.scss";
import { useRouter } from "next/router";
import { t } from "@lingui/macro";

const fadeInUp = {
  start: {
    translateX: 0,
    translateY: 0,
    translateZ: 0,
  },
  end: {
    translateX: 25,
    translateY: 15,
    translateZ: 5,
  },
};

type LOCALES = "ru" | "en" | "uz" | "tj";

const images: Record<LOCALES, StaticImageData> = {
  ru: phone_ru,
  tj: phone_tj,
  uz: phone_uz,
  en: phone_en,
};

const blur_images: Record<LOCALES, StaticImageData> = {
  ru: blur_phone_ru,
  tj: blur_phone_tj,
  uz: blur_phone_uz,
  en: blur_phone_en,
};

const CardReviews = ({ comments, className }: I.CardReviewsProps) => {
  return (
    <LazyMotion features={domAnimation}>
      <m.div className={className} initial={fadeInUp.start} whileInView={fadeInUp.end}>
        <div className={classes["card"]}>
          <div className={classes["card_inner"]}>
            <div className={classes["card_inner_top"]}>
              <Image src={star_circle} alt="A yellow star" />
              <div className={classes["card_inner_top_column"]}>
                <span>{t({ id: "reviews" })}</span>
                <Image src={five_stars} alt="A yellow five-pointed star" />
              </div>
            </div>
            <div className={classes["card_inner_bottom"]}>
              <span>{comments}</span>
            </div>
          </div>
        </div>
      </m.div>
    </LazyMotion>
  );
};

const CardTopUp = ({ transfer, headerSection, bodySection, src, alt, className }: I.CardTopUpProps) => {
  return (
    <LazyMotion features={domAnimation}>
      <m.div className={className} initial={fadeInUp.start} whileInView={fadeInUp.end}>
        <div className={classes["cardPayments"]}>
          <Image src={src} alt={alt} />
          <div className={classes["cardPayments_inner"]}>
            <span>{headerSection}</span>
            <span style={{ color: transfer ? "#00D45C" : "#fff" }}>{bodySection}</span>
          </div>
        </div>
      </m.div>
    </LazyMotion>
  );
};

function Testimonials() {
  const backgroundColor = useBackgroundColor();

  const router = useRouter();
  const locale = router.locale as LOCALES;

  const ref = useRef<ElementRef<"section">>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.4 1.22"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [1.4, 1]);

  return (
    <section style={{ background: backgroundColor }} className={classes["testimonials"]}>
      <div className={classes["testimonials_inner"]}>
        <div className={classes["testimonials_inner_left"]}>
          <CardReviews className={classes["popup_left_one"]} key="review_one" comments={t({ id: "review_one" })} />

          <CardTopUp
            className={classes["popup_left_two"]}
            src={uz_card}
            key="uz_card"
            transfer={true}
            headerSection={t({ id: "topup" })}
            bodySection="+250$"
            alt="Payment system: UZ card"
          />

          <CardTopUp
            className={classes["popup_left_three"]}
            src={south_korea_flag}
            key="south_korea_flag"
            transfer={false}
            headerSection={t({ id: "transfer_to" })}
            bodySection={t({ id: "transfer_to_south_korea" })}
            alt="South Korea's flag"
          />

          <CardTopUp
            className={classes["popup_left_four"]}
            src={union_pay}
            key="union_pay"
            transfer={true}
            headerSection={t({ id: "topup" })}
            bodySection="+300$"
            alt="Payment system: Union Pay"
          />

          <CardTopUp
            className={classes["popup_left_five"]}
            src={germany_flag}
            key="germany_flag"
            transfer={false}
            headerSection={t({ id: "transfer_to" })}
            bodySection={t({ id: "transfer_to_germany" })}
            alt="Germany's flag"
          />
        </div>

        <div className={classes["testimonials_inner_center"]}>
          <div className={classes["sticky"]}>
            <LazyMotion features={domAnimation}>
              <m.section ref={ref} style={{ scale: scaleProgress, opacity: scrollYProgress }}>
                <Image
                  priority
                  loading="eager"
                  draggable="false"
                  blurDataURL={blur_images[locale].src}
                  placeholder="blur"
                  width={240}
                  height={485}
                  src={images[locale]}
                  alt="Image of the mobile device"
                />
              </m.section>
            </LazyMotion>
          </div>
        </div>

        <div className={classes["testimonials_inner_right"]}>
          <CardTopUp
            className={classes["popup_right_one"]}
            src={visa}
            key="visa"
            transfer={true}
            headerSection={t({ id: "topup" })}
            bodySection="+1000$"
            alt="Payment system: Visa"
          />

          <CardTopUp
            className={classes["popup_right_two"]}
            src={korti_milli}
            key="korti_milli"
            transfer={true}
            headerSection={t({ id: "topup" })}
            bodySection={"+500 " + t({ id: "currency_name_tj" })}
            alt="Payment system: Korti milli"
          />

          <CardTopUp
            className={classes["popup_right_three"]}
            src={turkey_flag}
            key="turkey_flag"
            transfer={false}
            headerSection={t({ id: "transfer_to" })}
            bodySection={t({ id: "transfer_to_turkey" })}
            alt="Turkey's flag"
          />

          <CardReviews className={classes["popup_right_four"]} key="review_two" comments={t({ id: "review_two" })} />

          <CardTopUp
            className={classes["popup_right_five"]}
            src={malaysia_flag}
            key="malaysia_flag"
            transfer={false}
            headerSection={t({ id: "transfer_to" })}
            bodySection={t({ id: "transfer_to_malaysia" })}
            alt="Malaysia's flag"
          />
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
