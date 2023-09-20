import Banner from "@components/Banner/Banner";
import CardAdvantages from "@components/CardAdvantages/CardAdvantages";
import Download from "@components/Download/Download";
import SellingPoints from "@components/SellingPoints/SellingPoints";
import Testimonials from "@components/Testimonials/Testimonials";
import Tutorial from "@components/Tutorial/Tutorial";
import { GetStaticProps, NextPage } from "next";
import { ElementRef, Fragment, useRef } from "react";
import { loadTranslation } from "../utils";
import Head from "next/head";
import { t } from "@lingui/macro";

export const getStaticProps: GetStaticProps = async ctx => {
  const translation = await loadTranslation(ctx.locale!);
  return {
    props: {
      translation,
    },
  };
};

const Index: NextPage = () => {
  const download_app_ref = useRef<ElementRef<"div">>(null);

  const isBrowser = () => typeof window !== "undefined";

  const getCurrentUrl = (isBrowser() && window.location.origin) || "https://transfer.humo.tj/";

  return (
    <Fragment>
      <Head>
        <meta name="description" content={t({ id: "meta_description" })} />
        <meta property="og:title" content={t({ id: "meta_title" })} />
        <meta property="og:description" content={t({ id: "meta_description" })} />
        <meta property="og:url" content={getCurrentUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:image:alt" content={t({ id: "meta_site_name" })} />
        <meta property="og:image" content="/images/countries_banner_mobile.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content={t({ id: "meta_site_name" })} />
        <meta http-equiv="Cache-Control" content="max-age=86400" />
        <meta name="theme-color" media="(prefers-color-scheme: light)" content="#da532c" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/manifest.webmanifest" />
        <title>{t({ id: "meta_title" })}</title>
      </Head>
      <Banner download_app_ref={download_app_ref} key="banner" />
      <SellingPoints key="selling_points" />
      <Testimonials key="testimonials" />
      <CardAdvantages key="card_advantages" />
      <Tutorial key="tutorial" />
      <Download download_app_ref={download_app_ref} key="download" />
    </Fragment>
  );
};

export default Index;
