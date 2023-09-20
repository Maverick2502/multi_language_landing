import Image from "next/image";
import { Trans } from "@lingui/macro";
import classNames from "classnames";
import { useRouter } from "next/router";
// Images in Russian
import tutorial_step_one_ru from "@public/images/tutorials/ru/tutorial_step_one_ru.webp";
import tutorial_step_two_ru from "@public/images/tutorials/ru/tutorial_step_two_ru.webp";
import tutorial_step_three_ru from "@public/images/tutorials/ru/tutorial_step_three_ru.webp";
// Images in Tajik
import tutorial_step_one_tj from "@public/images/tutorials/tj/tutorial_step_one_tj.webp";
import tutorial_step_two_tj from "@public/images/tutorials/tj/tutorial_step_two_tj.webp";
import tutorial_step_three_tj from "@public/images/tutorials/tj/tutorial_step_three_tj.webp";
// Images in Uzbek
import tutorial_step_one_uz from "@public/images/tutorials/uz/tutorial_step_one_uz.webp";
import tutorial_step_two_uz from "@public/images/tutorials/uz/tutorial_step_two_uz.webp";
import tutorial_step_three_uz from "@public/images/tutorials/uz/tutorial_step_three_uz.webp";
// Images in English
import tutorial_step_one_en from "@public/images/tutorials/en/tutorial_step_one_en.webp";
import tutorial_step_two_en from "@public/images/tutorials/en/tutorial_step_two_en.webp";
import tutorial_step_three_en from "@public/images/tutorials/en/tutorial_step_three_en.webp";

import classes from "./tutorial.module.scss";
import * as I from "@models";

const images: Record<I.Language, I.ImageProps> = {
  [I.Language.RU]: {
    tutorial_step_one: tutorial_step_one_ru,
    tutorial_step_two: tutorial_step_two_ru,
    tutorial_step_three: tutorial_step_three_ru,
  },
  [I.Language.TJ]: {
    tutorial_step_one: tutorial_step_one_tj,
    tutorial_step_two: tutorial_step_two_tj,
    tutorial_step_three: tutorial_step_three_tj,
  },
  [I.Language.UZ]: {
    tutorial_step_one: tutorial_step_one_uz,
    tutorial_step_two: tutorial_step_two_uz,
    tutorial_step_three: tutorial_step_three_uz,
  },
  [I.Language.EN]: {
    tutorial_step_one: tutorial_step_one_en,
    tutorial_step_two: tutorial_step_two_en,
    tutorial_step_three: tutorial_step_three_en,
  },
};

const languageMap: Record<I.Language, I.ImageProps> = {
  [I.Language.RU]: images[I.Language.RU],
  [I.Language.UZ]: images[I.Language.UZ],
  [I.Language.TJ]: images[I.Language.TJ],
  [I.Language.EN]: images[I.Language.EN],
};

function Tutorial() {
  const router = useRouter();

  const image: I.ImageProps =
    router.locale !== undefined ? languageMap[router.locale as I.Language] : images[I.Language.RU];

  return (
    <section>
      <div className={classes["tutorial"]}>
        <h1 className={classes["tutorial_title"]}>
          <Trans id="tutorials_heading">Как совершить перевод</Trans>
        </h1>

        <div className={classes["wrapper"]}>
          <div className={classes["leftSide"]}>
            <h2 className={classes["card_title"]}>
              <Trans id="tutorial_heading_one">Выберите страну для перевода</Trans>
            </h2>

            <span className={classes["description"]}>
              <Trans id="tutorial_sub_heading_one">
                Вы можете выбрать страну из популярных. Если вам нужная другая, нажмите на «Отправить переводы». Там
                появится список всех доступных стран
              </Trans>
            </span>

            <Image
              width={300}
              height={500}
              placeholder="blur"
              src={image.tutorial_step_one}
              draggable="false"
              alt="Step one of tutorial. Select country for the transfer"
            />
          </div>

          <div className={classes["rightSide"]}>
            <div className={classes["child"]}>
              <div className={classes["child_information"]}>
                <h2 className={classes["child_title"]}>
                  <Trans id="tutorial_heading_two">Выберите тип перевода</Trans>
                </h2>
                <span className={classes["child_description"]}>
                  <Trans id="tutorial_sub_heading_two">
                    Определите нужный тип перевода: по номеру телефону или на банковскую карту. Нажмите продолжить.
                  </Trans>
                </span>
              </div>
              <Image
                className={classNames(classes["child_image"], classes["child_image_one"])}
                width={240}
                placeholder="blur"
                draggable="false"
                src={image.tutorial_step_two}
                alt="Step two of tutorial. Select transfer type"
              />
            </div>

            <div className={classes["child"]}>
              <div className={classes["child_information"]}>
                <h2 className={classes["child_title"]}>
                  <Trans id="tutorial_heading_three">Введите данные получателя</Trans>
                </h2>
                <span className={classes["child_description"]}>
                  <Trans id="tutorial_sub_heading_three">
                    Для завершения перевода введите данные получателя. Выберите счет для списания средств. Укажите сумму
                    перевода и подтвердите. Деньги уже у получателя.
                  </Trans>
                </span>
              </div>
              <Image
                className={classNames(classes["child_image"], classes["child_image_two"])}
                width={240}
                draggable="false"
                placeholder="blur"
                src={image.tutorial_step_three}
                alt="Step three of tutorial. Enter recipient's details"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Tutorial;
