import { NextRequest, NextResponse } from "next/server";

export const runtime = "edge";

const resolveCountryCode = (request: NextRequest) => {
  const header =
    request.headers.get("x-vercel-ip-country") ??
    request.headers.get("x-edge-country") ??
    request.headers.get("cf-ipcountry");

  if (!header) {
    return null;
  }

  const normalized = header.trim().toUpperCase();
  if (!/^[A-Z]{2}$/.test(normalized)) {
    return null;
  }

  return normalized;
};

export const GET = (request: NextRequest) => {
  const countryCode = resolveCountryCode(request);

  return NextResponse.json(
    { countryCode },
    {
      headers: {
        "Cache-Control": "public, max-age=3600, s-maxage=3600"
      }
    }
  );
};
