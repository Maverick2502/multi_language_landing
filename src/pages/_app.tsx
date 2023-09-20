import Layout from "@components/Layout/Layout";
import { i18n } from "@lingui/core";
import { I18nProvider } from "@lingui/react";
import type { AppProps } from "next/app";
import localFont from "next/font/local";
import { useRouter } from "next/router";
import { Fragment, useEffect, useRef } from "react";
import "../styles/globals.scss";
import { activateLocale } from "../utils";
import Head from "next/head";

const local_font = localFont({ src: "../../public/fonts/golos_text_var.ttf", variable: "--font-golos_text" });

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const locale = router.locale || router.defaultLocale!;
  const firstRender = useRef(true);

  if (pageProps.translation && firstRender.current) {
    activateLocale(i18n, locale, pageProps.translation);
    firstRender.current = false;
  }

  useEffect(() => {
    if (pageProps.translation) {
      activateLocale(i18n, locale, pageProps.translation);
    }
  }, [locale, pageProps.translation]);

  const isBrowser = () => typeof window !== "undefined";

  return (
    <Fragment>
      <Head>
        {router.locales!.concat("x-default").map((locale: string) => {
          const localePath = locale === "x-default" ? "" : `${locale}`;
          const location = isBrowser() && window.location.href;
          const href = `${location}/${localePath}${router.asPath}`;
          return locale === "pseudo" ? null : <link key={locale} rel="alternate" hrefLang={locale} href={href} />;
        })}
      </Head>
      <I18nProvider i18n={i18n}>
        <Layout className={local_font.className} key="layout">
          <Component {...pageProps} />
        </Layout>
      </I18nProvider>
    </Fragment>
  );
}

export default MyApp;
