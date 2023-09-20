/** @type {import('next').NextConfig} */
module.exports = {
  i18n: {
    locales: ["ru", "en", "uz", "tj"],
    defaultLocale: "ru",
    localeDetection: false,
  },
  experimental: {
    swcPlugins: [["@lingui/swc-plugin", {}]],
  },
};
