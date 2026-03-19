"use client";
import { useState } from "react";
import CollectingFilter from "./collections/collecting-filter";
import CollectionList from "./collections/collection-list";

import { City, SportCategory } from "@/lib/generated/prisma/client";
import { CollectionWithRelations } from "@/lib/types/collection";

interface OpenCollectingsProps {
  collections: CollectionWithRelations[];
  cities: City[];
  sports: SportCategory[];
}

const OpenCollectings = ({
  collections,
  cities,
  sports,
}: OpenCollectingsProps) => {
  const [selectedRegions, setSelectedRegions] = useState<City[]>([]);
  const [selectedSportId, setSelectedSportId] = useState<string | null>(null);

  const filtered = collections.filter((c) => {
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
          cities={cities}
        />
        <CollectingFilter
          type="sport_category"
          selectedSportId={selectedSportId}
          onSportChange={setSelectedSportId}
          sports={sports}
        />
      </div>
      <CollectionList collections={filtered} cities={cities} sports={sports} />
    </div>
  );
};

export default OpenCollectings;
