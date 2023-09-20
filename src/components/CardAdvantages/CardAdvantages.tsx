import { Trans } from "@lingui/macro";
import * as I from "@models";
import Image from "next/image";
import advantages_percent from "@public/images/advantages_percent.svg";
import advantages_rate from "@public/images/advantages_rate.svg";
import advantages_security from "@public/images/advantages_security.svg";
import classes from "./cardAdvantages.module.scss";

const advantages: I.AdvantagesProps[] = [
  {
    id: 1,
    icon: advantages_rate,
    text: <Trans id="advantage_one">Перевод денег по выгодному курсу</Trans>,
    alt: "Favorable exchange rate",
  },
  {
    id: 2,
    icon: advantages_percent,
    text: <Trans id="advantage_two">Комиссия от 0% до 2,5% за отправку денег</Trans>,
    alt: "Low commission",
  },
  {
    id: 3,
    icon: advantages_security,
    text: <Trans id="advantage_three">Безопасность ваших личных данных</Trans>,
    alt: "Security of your data",
  },
];

function CardAdvantages() {
  return (
    <section>
      <div className={classes["advantages"]}>
        <h1 className={classes["advantages_title"]}>
          <Trans id="advantages_heading">Как совершить перевод</Trans>
        </h1>

        <div className={classes["grid"]}>
          {advantages.map(item => {
            return (
              <div key={item.id} className={classes["card"]}>
                <Image height={32} width={32} className={classes["card_image"]} src={item.icon} alt={item.alt} />
                <span className={classes["card_text"]}>{item.text}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default CardAdvantages;
