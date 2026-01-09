import "server-only";

import { headers } from "next/headers";

export type GeoCountry = {
  iso2: string;
  name?: string | null;
  source: "vercel" | "api";
};

const getVercelCountry = (headerList: Headers): string | null => {
  const value = headerList.get("x-vercel-ip-country");
  if (!value) {
    return null;
  }
  const normalized = value.trim().toUpperCase();
  return /^[A-Z]{2}$/.test(normalized) ? normalized : null;
};

const buildOrigin = (headerList: Headers): string | null => {
  const host =
    headerList.get("x-forwarded-host") ?? headerList.get("host") ?? null;
  if (!host) {
    return null;
  }
  const protocol = headerList.get("x-forwarded-proto") ?? "https";
  return `${protocol}://${host}`;
};

const buildForwardedHeaders = (headerList: Headers): Headers => {
  const forwarded = new Headers();
  const forwardedFor = headerList.get("x-forwarded-for");
  const realIp = headerList.get("x-real-ip");

  if (forwardedFor) {
    forwarded.set("x-forwarded-for", forwardedFor);
  }
  if (realIp) {
    forwarded.set("x-real-ip", realIp);
  }

  return forwarded;
};

export const getGeoCountry = async (): Promise<GeoCountry | null> => {
  const headerList = await headers();
  const vercelCountry = getVercelCountry(headerList);
  if (vercelCountry) {
    return { iso2: vercelCountry, source: "vercel" };
  }

  const origin = buildOrigin(headerList);
  if (!origin) {
    return null;
  }

  try {
    const response = await fetch(`${origin}/api/geo`, {
      headers: buildForwardedHeaders(headerList),
      cache: "force-cache",
      next: { revalidate: 3600 }
    });

    if (!response.ok) {
      return null;
    }

    const data = (await response.json()) as {
      iso2?: string;
      name?: string | null;
    };

    if (!data?.iso2) {
      return null;
    }

    return { iso2: data.iso2, name: data.name, source: "api" };
  } catch {
    return null;
  }
};
