import { useBackgroundColor } from "@hooks";
import { Trans } from "@lingui/macro";
import classNames from "classnames";
import Image from "next/image";
import countries_flags from "@public/images/countries_flags.svg";
import graph_rates from "@public/images/graph_rates.svg";
import payment_systems from "@public/images/payment_systems.svg";
import percent from "@public/images/percent.svg";
import classes from "./sellingPoints.module.scss";

function SellingPoints() {
  const backgroundColor = useBackgroundColor();

  return (
    <section className={classes["container"]} style={{ background: backgroundColor }}>
      <div className={classes["sellingPoints"]}>
        <div className={classes["sellingPoints_cards"]}>
          {/* First card */}
          <div className={classNames(classes["card"], classes["card_orangeBg"])}>
            <span>
              <Trans id="selling_point_one">Один из самых выгодных курсов на рынке</Trans>
            </span>

            <Image
              height={200}
              width={425.5}
              className={classNames(classes["card_image"], classes["card_image_one"])}
              src={graph_rates.src}
              draggable="false"
              alt="Rates"
            />
          </div>

          {/* Second card */}
          <div className={classNames(classes["card"], classes["card_whiteBg"])}>
            <span>
              <Trans id="selling_point_two">Минимальная комиссия за переводы</Trans>
            </span>
            <Image
              height={398}
              width={440}
              className={classNames(classes["card_image"], classes["card_image_two"])}
              src={percent.src}
              draggable="false"
              alt="Percent"
            />
          </div>

          {/* Third card */}
          <div className={classNames(classes["card"], classes["card_whiteBg"])}>
            <span>
              <Trans id="selling_point_three">Приложение на нескольких языках</Trans>
            </span>
            <Image
              height={480}
              width={574}
              className={classNames(classes["card_image"], classes["card_image_three"])}
              src={countries_flags.src}
              draggable="false"
              alt="Countries flags"
            />
          </div>

          {/* Fourth card */}
          <div className={classNames(classes["card"], classes["card_whiteBg"])}>
            <span>
              <Trans id="selling_point_four">5 платёжных систем для вашего удобства</Trans>
            </span>
            <Image
              height={330}
              width={470}
              className={classNames(classes["card_image"], classes["card_image_four"])}
              src={payment_systems.src}
              draggable="false"
              alt="Payment systems"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default SellingPoints;
