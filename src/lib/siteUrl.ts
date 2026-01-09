const SITE_URL = "https://aguadelgrifo.org";

const getUrlWithProtocol = (value: string): string => {
  if (value.startsWith("http://") || value.startsWith("https://")) {
    return value;
  }

  return `https://${value}`;
};

export const getSiteUrl = (): string => {
  const envSiteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? process.env.SITE_URL;
  const siteUrl = envSiteUrl ? getUrlWithProtocol(envSiteUrl) : SITE_URL;

  return siteUrl.replace(/\/$/, "");
};
