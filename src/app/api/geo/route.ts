export const runtime = "edge";

const GEO_TIMEOUT_MS = 2000;
const GEO_CACHE_SECONDS = 3600;

const extractClientIp = (request: Request): string | null => {
  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) {
    const [first] = forwardedFor.split(",");
    if (first) {
      return first.trim();
    }
  }

  const realIp = request.headers.get("x-real-ip");
  return realIp?.trim() ?? null;
};

const fetchGeo = async (ip?: string | null) => {
  const url = ip ? `https://ipapi.co/${ip}/json/` : "https://ipapi.co/json/";
  const response = await fetch(url, {
    signal: AbortSignal.timeout(GEO_TIMEOUT_MS),
    headers: {
      "User-Agent": "aguadelgrifo-geo"
    }
  });

  if (!response.ok) {
    return null;
  }

  const data = (await response.json()) as {
    country_code?: string;
    country_name?: string;
  };

  if (!data?.country_code) {
    return null;
  }

  return {
    iso2: data.country_code.toUpperCase(),
    name: data.country_name ?? null
  };
};

export async function GET(request: Request) {
  try {
    const ip = extractClientIp(request);
    const geo = await fetchGeo(ip);
    if (!geo) {
      return new Response(null, { status: 204 });
    }

    return new Response(JSON.stringify(geo), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": `public, s-maxage=${GEO_CACHE_SECONDS}, stale-while-revalidate=600`
      }
    });
  } catch {
    return new Response(null, { status: 204 });
  }
}
