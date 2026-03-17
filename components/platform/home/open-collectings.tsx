"use client";
import React, { useState } from "react";
import CollectingFilter from "./collections/collecting-filter";
import CollectionList from "./collections/collection-list";
import { City } from "@/lib/types/collection";
import { MOCK_CITIES, MOCK_COLLECTIONS, MOCK_SPORTS } from "@/lib/mock/data";

const OpenCollectings = () => {
  const [selectedRegions, setSelectedRegions] = useState<City[]>([]);
  const [selectedSportId, setSelectedSportId] = useState<string | null>(null);

  const filtered = MOCK_COLLECTIONS.filter((c) => {
    const regionMatch =
      selectedRegions.length === 0 ||
      selectedRegions.some((r) => r.id === c.cityId);
    const sportMatch = !selectedSportId || c.sportId === selectedSportId;
    return regionMatch && sportMatch;
  });

  return (
    <div className="space-y-4">
      <h1 className="font-bold text-lg tracking-wider">
        აქტიური ქველმოქმედებები
      </h1>
      <div className="flex flex-row items-center gap-1 overflow-x-scroll no-scrollbar">
        <CollectingFilter
          type="city"
          selectedRegions={selectedRegions}
          onRegionsChange={setSelectedRegions}
          cities={MOCK_CITIES}
        />
        <CollectingFilter
          type="sport_category"
          selectedSportId={selectedSportId}
          onSportChange={setSelectedSportId}
          sports={MOCK_SPORTS}
        />
      </div>
      <CollectionList
        collections={filtered}
        cities={MOCK_CITIES}
        sports={MOCK_SPORTS}
      />
    </div>
  );
};

export default OpenCollectings;
