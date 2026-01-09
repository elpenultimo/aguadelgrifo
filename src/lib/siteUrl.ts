const getUrlWithProtocol = (value: string): string => {
  if (value.startsWith("http://") || value.startsWith("https://")) {
    return value;
  }

  return `https://${value}`;
};

export const getSiteUrl = (): string => {
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL ??
    (process.env.VERCEL_URL
      ? getUrlWithProtocol(process.env.VERCEL_URL)
      : "https://aguadelgrifo.com");

  return siteUrl.replace(/\/$/, "");
};
