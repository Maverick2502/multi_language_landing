import { Trans } from "@lingui/macro";
import Image from "next/image";
import { ElementRef, useRef, useState } from "react";
import arrow from "@public/icons/arrow.svg";
import logo_cyrillic from "@public/icons/logo_light_cyrillic.png";
import logo_en from "@public/icons/logo_light_en.png";
import socials_fb from "@public/images/socials_fb.svg";
import socials_instagram from "@public/images/socials_instagram.svg";
import socials_tg from "@public/images/socials_tg.svg";
import socials_vk from "@public/images/socials_vk.svg";
import classes from "./footer.module.scss";
import * as I from "@models";
import { useLogoImage } from "@hooks";

const faqs: I.FaqProps[] = [
  {
    id: 1,
    question: <Trans id="faq_question_one">Какой размер комиссии за перевод денег?</Trans>,
    answer: (
      <Trans id="faq_answer_one">
        Комиссия за денежный перевод может меняться в зависимости от страны и способа перевода - от 0 до 2,5 %. Точный
        размер комиссии будет указан внутри приложения перед подтверждением перевода.,
      </Trans>
    ),
  },
  {
    id: 2,
    question: <Trans id="faq_question_two">Есть ли комиссия при переводе денег из России в Таджикистан?</Trans>,
    answer: (
      <Trans id="faq_answer_two">
        Да. Комиссия за перевод денег из России в Таджикистан составляет 0,5%. Также комиссию могут брать другие банки,
        на карты которых вы отправите деньги. Чтобы узнать размер комиссии другого банка, напишите в нашу службу
        поддержки.
      </Trans>
    ),
  },
  {
    id: 3,
    question: <Trans id="faq_question_three">Какие лимиты при переводе?</Trans>,
    answer: (
      <Trans id="faq_answer_three">
        Минимальная сумма перевода составляет 500 рублей, максимальная сумма - 50 000 рублей.
      </Trans>
    ),
  },
  {
    id: 4,
    question: <Trans id="faq_question_four">Я сделал перевод через вас. Как быстро вы отправите деньги?</Trans>,
    answer: (
      <Trans id="faq_answer_four">
        В большинстве случаев мы отправляем деньги мгновенно. Следует учитывать, что время, необходимое для выполнения
        перевода, зависит от банка, который выпустил карту получателя денег. Поэтому, в редких случаях перевод денег
        может занять до 3-х дней.
      </Trans>
    ),
  },
  {
    id: 5,
    question: <Trans id="faq_question_five">Что делать, если получатель всё ещё не получил денежный перевод?</Trans>,
    answer: (
      <Trans id="faq_answer_five">
        Если ваши деньги не дошли до получателя и прошло уже несколько часов, не волнуйтесь. Возможно, транзакция ещё не
        обработана. Свяжитесь с нашим контактным центром по номеру (+992) 88-777-55-44 или 544. Вы также можете написать
        нам через раздел &quot;Помощь&quot; в приложении. Наши специалисты обязательно помогут вам.
      </Trans>
    ),
  },
  {
    id: 6,
    question: <Trans id="faq_question_six">Безопасно ли мне отправлять через вас деньги?</Trans>,
    answer: (
      <Trans id="faq_answer_six">
        Конечно. Мы заботимся о безопасности и конфиденциальности ваших данных. Все финансовые операции в нашем
        приложении защищены с использованием современных технологий шифрования данных. Мы строго соблюдаем законы и
        требования в области защиты данных и конфиденциальности, чтобы гарантировать безопасность ваших переводов.
      </Trans>
    ),
  },
  {
    id: 7,
    question: <Trans id="faq_question_seven">Что мне сделать ещё для безопасности моих данных?</Trans>,
    answer: (
      <div>
        <Trans id="faq_answer_seven">
          Мы делаем всё, чтобы защитить ваши деньги и персональные данные при работе в приложении. Но для полной
          безопасности соблюдайте следующие правила:
        </Trans>
        <div>
          <Trans id="faq_answer_seven_sub_one">
            - Никогда и никому не передавайте пароль для входа в мобильное приложение;
          </Trans>
        </div>
        <div>
          <Trans id="faq_answer_seven_sub_two">
            - Используйте только официальные приложения банка, доступные в Google Play и App Store для загрузки на
            устройства Android и iOS;
          </Trans>
        </div>
        <div>
          <Trans id="faq_answer_seven_sub_three">- Если вы потеряли телефон, срочно заблокируйте сим-карту;</Trans>
        </div>
        <div>
          <Trans id="faq_answer_seven_sub_four">
            - Если вы сменили номер телефона, сообщите об этом банку, позвонив по номеру 544;
          </Trans>
        </div>
        <div>
          <Trans id="faq_answer_seven_sub_five">- Установите пароль на своем телефоне для дополнительной защиты.</Trans>
        </div>
      </div>
    ),
  },
];

function Footer() {
  const logo_image = useLogoImage({ logo_cyrillic, logo_en });

  const [clicked, setClicked] = useState<number>(0);

  const contentEl = useRef<ElementRef<"div">>(null);

  const handleToggle = (index: number) => {
    if (clicked === index) {
      return setClicked(0);
    }
    setClicked(index);
  };

  const getCurrentYear = new Date().getFullYear();

  return (
    <footer role="contentinfo" className={classes["component"]}>
      <div className={classes["container"]}>
        <section className={classes["faq"]}>
          <h1 className={classes["faq_title"]}>
            <Trans id="faq_heading">Часто задаваемые вопросы</Trans>
          </h1>

          <ul className={classes["accordion"]}>
            {faqs.map(item => {
              return (
                <li key={item.id} className={classes["accordion_item"]}>
                  <button
                    aria-expanded={clicked === item.id}
                    aria-controls={`accordion_panel_${item.id}`}
                    role="button"
                    type="button"
                    className={classes["button"]}
                    onClick={() => handleToggle(item.id)}
                  >
                    {item.question}
                    <Image
                      src={arrow}
                      alt="Arrow icon"
                      className={classes["button_arrow"]}
                      style={{
                        transform: clicked === item.id ? "rotate(180deg)" : "rotate(0deg)",
                        transition: "transform ease 0.2s",
                      }}
                    />
                  </button>
                  <div
                    ref={contentEl}
                    className={classes["answer_wrapper"]}
                    style={clicked === item.id ? { height: "auto" } : { height: "0px" }}
                  >
                    <div className={classes["answer"]}>{item.answer}</div>
                  </div>
                  <hr className={classes["hr"]} />
                </li>
              );
            })}
          </ul>
        </section>

        <section className={classes["footer"]}>
          <div className={classes["footer_links"]}>
            <Image
              className={classes["footer_logo"]}
              width={150}
              height={48}
              src={logo_image}
              draggable="false"
              alt="Light logotype of the company"
            />
            <ul className={classes["footer_socials"]}>
              <li>
                <a
                  href="https://www.instagram.com/humo.tj/"
                  aria-label="Go to an account of Humo on Instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    className={classes["footer_socials_img"]}
                    width={40}
                    height={40}
                    src={socials_instagram}
                    alt="Link to an account of Humo on Instagram"
                  />
                </a>
              </li>

              <li>
                <a
                  href="https://t.me/humocallcenter"
                  aria-label="Go to an account of Humo on Telegram"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    className={classes["footer_socials_img"]}
                    width={40}
                    height={40}
                    src={socials_tg}
                    alt="Link to an account of Humo on Telegram"
                  />
                </a>
              </li>

              <li>
                <a
                  href="https://vk.com/humotj"
                  aria-label="Go to an account of Humo on VK"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    className={classes["footer_socials_img"]}
                    width={40}
                    height={40}
                    src={socials_vk}
                    alt="Link to an account of Humo on VK"
                  />
                </a>
              </li>

              <li>
                <a
                  href="https://facebook.com/mdohumo"
                  aria-label="Go to an account of Humo on Facebook"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    className={classes["footer_socials_img"]}
                    width={40}
                    height={40}
                    src={socials_fb}
                    alt="Link to an account of Humo on Facebook"
                  />
                </a>
              </li>
            </ul>
          </div>

          <hr className={classes["hr_footer"]} />

          <div className={classes["footer_information"]}>
            <div className={classes["footer_contactDetails"]}>
              <a href="tel:+992446405544" aria-label="International hotline's phone number">
                +992 (44) 640 55 44
              </a>

              <span>
                <Trans id="hotline">Горячая линия Хумо</Trans>
              </span>
            </div>

            <ul className={classes["footer_products"]}>
              <li>
                <a
                  href="https://humo.tj/ru/"
                  aria-label="Read more about Humo on its official page"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Trans id="product_humo">Хумо</Trans>
                </a>
              </li>

              <li>
                <a
                  href="https://online.humo.tj"
                  aria-label="Read more about Humo Online"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Trans id="product_humo_online">Хумо Онлайн</Trans>
                </a>
              </li>

              <li>
                <a
                  href="https://deposit.humo.tj"
                  aria-label="Read more about Deposit Sarchashma"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Trans id="product_sarchashma">Депозит — Сарчашма</Trans>
                </a>
              </li>

              <li>
                <a
                  href="https://orzu.humo.tj/"
                  aria-label="Read more about Orzu"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Trans id="product_orzu">Орзу</Trans>
                </a>
              </li>

              <li>
                <a
                  href="https://visa.humo.tj/"
                  aria-label="Read more about Humo's Visa cards"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Trans id="product_visa">Карты Visa</Trans>
                </a>
              </li>

              <li>
                <a
                  href="https://web.humo.tj/landing"
                  aria-label="Read more about Agent Banking"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Trans id="product_agent_banking">Агентский банкинг</Trans>
                </a>
              </li>
            </ul>
          </div>

          <div className={classes["footer_companyInformation"]}>
            <span>
              <Trans id="footer_description">
                Прогрессивная и одна из лидирующих микрофинансовых организаций в Таджикистане, предоставляющая
                банковские услуги более 100 тысячам клиентов.
              </Trans>
              <address>
                <Trans id="footer_address">734061, г. Душанбе, ул. Н. Карабаева, 148/1. </Trans>
              </address>
              <a href="tel: 544" aria-label="Local hotline's phone number">
                <Trans id="footer_hotline">Тел.: 544</Trans>
              </a>
            </span>
            <span>
              © {getCurrentYear + " "}
              <Trans id="footer_license">ЗАО МДО «Хумо» Лицензия НБТ №0000077 от 24 мая 2017 г.</Trans>
            </span>
          </div>
        </section>
      </div>
    </footer>
  );
}

export default Footer;
