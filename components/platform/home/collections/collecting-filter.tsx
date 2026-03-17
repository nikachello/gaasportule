"use client";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { City, SportCategory } from "@/lib/types/collection";

interface CollectingFilterProps {
  type: "sport_category" | "city";
  selectedRegions?: City[];
  onRegionsChange?: (regions: City[]) => void;
  sports?: SportCategory[];
  cities?: City[];
  selectedSportId?: string | null;
  onSportChange?: (sportId: string | null) => void;
}

const CollectingFilter = ({
  type,
  selectedRegions = [],
  onRegionsChange,
  cities,
  sports,
  selectedSportId,
  onSportChange,
}: CollectingFilterProps) => {
  const handleRegionToggle = (city: City) => {
    if (!onRegionsChange) return;
    const exists = selectedRegions.some((c) => c.id === city.id);
    onRegionsChange(
      exists
        ? selectedRegions.filter((c) => c.id !== city.id)
        : [...selectedRegions, city]
    );
  };

  const handleSportToggle = (sportId: string) => {
    if (!onSportChange) return;
    onSportChange(selectedSportId === sportId ? null : sportId);
  };

  if (type === "city") {
    const label =
      selectedRegions.length === 0
        ? "📍 რეგიონი"
        : `📍 რეგიონი (${selectedRegions.length})`;

    return (
      <Drawer>
        <DrawerTrigger asChild>
          <Button
            variant="secondary"
            className={`rounded-3xl shrink-0 ${
              selectedRegions.length > 0
                ? "bg-default-blue text-white"
                : "bg-muted text-black"
            }`}
          >
            {label}
          </Button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>აირჩიეთ რეგიონი</DrawerTitle>
            <DrawerDescription>
              გაფილტრეთ ქველმოქმედება რეგიონის მიხედვით
            </DrawerDescription>
          </DrawerHeader>
          <div className="overflow-y-auto no-scrollbar pb-8">
            {cities?.map((city) => {
              const isSelected = selectedRegions.some((c) => c.id === city.id);
              return (
                <div
                  key={city.id}
                  className={`p-5 flex flex-row items-center justify-between cursor-pointer transition-colors
                    ${isSelected ? "bg-muted" : "hover:bg-muted"}`}
                  onClick={() => handleRegionToggle(city)}
                >
                  <p>{city.name}</p>
                  <div
                    className={`w-4 h-4 rounded-full border-2 transition-colors
                      ${
                        isSelected
                          ? "bg-default-blue border-default-blue"
                          : "border-gray-300"
                      }`}
                  />
                </div>
              );
            })}
          </div>
        </DrawerContent>
      </Drawer>
    );
  }

  if (type === "sport_category") {
    return (
      <div className="flex flex-row gap-1">
        {sports?.map((sport) => (
          <Button
            key={sport.id}
            onClick={() => handleSportToggle(sport.id)}
            className={`rounded-3xl shrink-0 transition-colors ${
              selectedSportId === sport.id
                ? "bg-default-blue text-white"
                : "bg-muted text-black"
            }`}
          >
            {sport.name}
          </Button>
        ))}
      </div>
    );
  }
};

export default CollectingFilter;
