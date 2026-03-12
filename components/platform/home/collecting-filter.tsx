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
import { useState } from "react";

type City = {
  id: number;
  name: string;
};

const cities: City[] = [
  {
    id: 0,
    name: "თბილისი",
  },
  {
    id: 1,
    name: "იმერეთი",
  },
  {
    id: 2,
    name: "აჭარა",
  },
  {
    id: 3,
    name: "ქვემო ქართლი",
  },
  {
    id: 4,
    name: "სამეგრელო-ზემო სვანეთი",
  },
  {
    id: 5,
    name: "კახეთი",
  },
  {
    id: 6,
    name: "შიდა ქართლი",
  },
  {
    id: 7,
    name: "აფხაზეთი",
  },
  {
    id: 8,
    name: "სამცხე-ჯავახეთი",
  },
  {
    id: 9,
    name: "გურია",
  },
  {
    id: 10,
    name: "მცხეთა-მთიანეთი",
  },
  {
    id: 11,
    name: "რაჭა-ლეჩხუმი და ქვემო სვანეთი",
  },
];

type SportCategories = {
  id: string;
  name: string;
};

interface CollectingFilterProps {
  type?: "sport_category" | "city";
  sports?: SportCategories[];
}

const CollectingFilter = ({ type, sports }: CollectingFilterProps) => {
  const [choosenRegions, setChoosenRegions] = useState<City[] | null>([]);

  const handleRegionChoose = (city: City) => {
    setChoosenRegions((prev) => {
      if (!prev) return [city];
      const exists = prev.some((c) => c.id == city.id);
      return exists ? prev.filter((c) => c.id !== city.id) : [...prev, city];
    });
  };

  if (type == "city") {
    return (
      <div>
        <Drawer>
          <DrawerTrigger>
            <Button className="bg-muted p-3 rounded-3xl text-black">
              📍 რეგიონი
            </Button>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>აირჩიეთ რეგიონი</DrawerTitle>
              <DrawerDescription>
                გაფილტრეთ ქველმოქმედება რეგიონის მიხედვით
              </DrawerDescription>
            </DrawerHeader>
            <div className="overflow-y-auto no-scrollbar">
              {cities.map((city) => {
                const isSelected = choosenRegions?.some(
                  (c) => c.id === city.id
                );
                return (
                  <div
                    className={`p-5 flex flex-row items-center justify-between cursor-pointer transition-colors
                      ${isSelected ? "bg-muted" : "hover:bg-muted"}`}
                    onClick={() => handleRegionChoose(city)}
                    key={city.id}
                  >
                    <p>{city.name}</p>
                    <div
                      className={`w-4 h-4 rounded-full border-3 transition-colors
                      ${
                        isSelected ? "bg-default-blue border-default-blue" : ""
                      }`}
                    />
                  </div>
                );
              })}
            </div>
          </DrawerContent>
        </Drawer>
      </div>
    );
  }

  return (
    <div>
      {/* {cities.map((city) => (
        <Button className="bg-muted p-3 rounded-3xl text-black">
          📍 რეგიონი
        </Button>
      ))} */}
    </div>
  );
};

export default CollectingFilter;
