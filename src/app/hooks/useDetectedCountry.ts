"use client";

import { useEffect, useState } from "react";

const SESSION_KEY = "detectedCountry";

const readSessionCountry = () => {
  if (typeof window === "undefined") {
    return null;
  }

  try {
    return sessionStorage.getItem(SESSION_KEY);
  } catch {
    return null;
  }
};

export const useDetectedCountry = () => {
  const [countryCode, setCountryCode] = useState<string | null>(() => {
    const cached = readSessionCountry();
    return cached ? cached.toUpperCase() : null;
  });

  useEffect(() => {
    if (countryCode || typeof window === "undefined") {
      return;
    }

    const cached = readSessionCountry();
    if (cached) {
      setCountryCode(cached.toUpperCase());
      return;
    }

    const controller = new AbortController();
    let isActive = true;

    const loadCountry = async () => {
      try {
        const response = await fetch("/api/geo", {
          signal: controller.signal,
          headers: {
            accept: "application/json"
          }
        });

        if (!response.ok) {
          return;
        }

        const data = (await response.json()) as { countryCode?: string | null };
        const normalized =
          typeof data.countryCode === "string"
            ? data.countryCode.trim().toUpperCase()
            : null;

        if (!normalized || !/^[A-Z]{2}$/.test(normalized)) {
          return;
        }

        if (!isActive) {
          return;
        }

        try {
          sessionStorage.setItem(SESSION_KEY, normalized);
        } catch {
          // Ignore storage errors.
        }

        setCountryCode(normalized);
      } catch {
        // Ignore fetch errors.
      }
    };

    void loadCountry();

    return () => {
      isActive = false;
      controller.abort();
    };
  }, [countryCode]);

  return countryCode;
};
