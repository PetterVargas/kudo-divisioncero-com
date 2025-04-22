// hooks/useCountryData.ts
"use client";

import { useState, useEffect } from "react";
import { WorldData, CountryDetails } from "@/types/countries";

export const useCountryData = () => {
  const [worldData, setWorldData] = useState<WorldData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadCountryData = async () => {
      try {
        // Ajusta la ruta al archivo JSON según donde esté ubicado en tu proyecto
        const response = await fetch(
          "./standard_country_or_area_codes_for_statistical_use_m49.json",
        );
        if (!response.ok) {
          throw new Error(`Error loading country data: ${response.statusText}`);
        }
        const data = (await response.json()) as WorldData;
        setWorldData(data);
      } catch (err) {
        setError(
          err instanceof Error
            ? err.message
            : "Unknown error loading country data",
        );
        console.error("Error loading country data:", err);
      } finally {
        setLoading(false);
      }
    };

    loadCountryData();
  }, []);

  // Función para buscar un país por su código ISO alpha-2
  const findCountryByCode = (
    isoCode: string,
  ): [string, CountryDetails] | null => {
    if (!worldData) return null;

    for (const continent in worldData.World) {
      for (const region in worldData.World[continent]) {
        for (const countryObj of worldData.World[continent][region]) {
          for (const countryName in countryObj) {
            const details = countryObj[countryName];
            if (
              details["ISO-alpha2 Code"].toLowerCase() === isoCode.toLowerCase()
            ) {
              return [countryName, details];
            }
          }
        }
      }
    }

    return null;
  };

  return { worldData, loading, error, findCountryByCode };
};
