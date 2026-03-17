"use client";
import React, { useState } from "react";
import CollectingFilter from "./collections/collecting-filter";
import CollectionList from "./collections/collection-list";
import { City, Collection, SportCategory } from "@/lib/types/collection";

export const sports: SportCategory[] = [
  { id: "0", name: "ჩოგბურთი" },
  { id: "1", name: "რაგბი" },
  { id: "2", name: "ფეხბურთი" },
  { id: "3", name: "კალათბურთი" },
  { id: "4", name: "ჭადრაკი" },
  { id: "5", name: "ცურვა" },
  { id: "6", name: "ჭიდაობა" },
];

export const cities: City[] = [
  { id: "0", name: "თბილისი" },
  { id: "1", name: "იმერეთი" },
  { id: "2", name: "აჭარა" },
  { id: "3", name: "ქვემო ქართლი" },
  { id: "4", name: "სამეგრელო-ზემო სვანეთი" },
  { id: "5", name: "კახეთი" },
  { id: "6", name: "შიდა ქართლი" },
  { id: "7", name: "აფხაზეთი" },
  { id: "8", name: "სამცხე-ჯავახეთი" },
  { id: "9", name: "გურია" },
  { id: "10", name: "მცხეთა-მთიანეთი" },
  { id: "11", name: "რაჭა-ლეჩხუმი და ქვემო სვანეთი" },
];

const allCollections: Collection[] = [
  {
    id: "0",
    title: "ახალგაზრდა ჩოგბურთელების მხარდაჭერა",
    cityId: "0",
    sportId: "0",
    raised: 1200,
    goal: 3000,
    description:
      "ფეხბურთს გუნდს სჭირდება შეკრებაზე წასვლა, აუცილებელია გარკვეული ეკიპირებისა და თანხის შეგროვება",
    contributors: [
      {
        id: "0",
        name: "asdasd",
        avatarUrl: "/images/user/user-1.jpg",
        contributedAmount: 100,
      },
      { id: "1", name: "asdasd", contributedAmount: 100 },
      { id: "2", name: "asdasd", contributedAmount: 100 },
      {
        id: "3",
        name: "asdasd",
        avatarUrl: "/images/user/user-2.webp",
        contributedAmount: 100,
      },
      { id: "4", name: "asdasd", contributedAmount: 100 },
    ],
  },
  {
    id: "1",
    title: "ახალგაზრდა ჩოგბურთელების მხარდაჭერა",
    cityId: "0",
    sportId: "0",
    raised: 1200,
    goal: 3000,
    description:
      "ფეხბურთს გუნდს სჭირდება შეკრებაზე წასვლა, აუცილებელია გარკვეული ეკიპირებისა და თანხის შეგროვება",
    contributors: [
      {
        id: "0",
        name: "asdasd",
        avatarUrl: "/images/user/user-1.jpg",
        contributedAmount: 100,
      },
      { id: "1", name: "asdasd", contributedAmount: 100 },
      { id: "2", name: "asdasd", contributedAmount: 100 },
      {
        id: "3",
        name: "asdasd",
        avatarUrl: "/images/user/user-2.webp",
        contributedAmount: 100,
      },
      { id: "4", name: "asdasd", contributedAmount: 100 },
    ],
  },
  {
    id: "2",
    title: "ახალგაზრდა ჩოგბურთელების მხარდაჭერა",
    cityId: "0",
    sportId: "0",
    raised: 1200,
    goal: 3000,
    description:
      "ფეხბურთს გუნდს სჭირდება შეკრებაზე წასვლა, აუცილებელია გარკვეული ეკიპირებისა და თანხის შეგროვება",
    contributors: [
      {
        id: "0",
        name: "asdasd",
        avatarUrl: "/images/user/user-1.jpg",
        contributedAmount: 100,
      },
      { id: "1", name: "asdasd", contributedAmount: 100 },
      { id: "2", name: "asdasd", contributedAmount: 100 },
      {
        id: "3",
        name: "asdasd",
        avatarUrl: "/images/user/user-2.webp",
        contributedAmount: 100,
      },
      { id: "4", name: "asdasd", contributedAmount: 100 },
    ],
  },
  {
    id: "3",
    title: "ახალგაზრდა ჩოგბურთელების მხარდაჭერა",
    cityId: "0",
    sportId: "0",
    raised: 1200,
    goal: 3000,
    description:
      "ფეხბურთს გუნდს სჭირდება შეკრებაზე წასვლა, აუცილებელია გარკვეული ეკიპირებისა და თანხის შეგროვება",
    contributors: [
      {
        id: "0",
        name: "asdasd",
        avatarUrl: "/images/user/user-1.jpg",
        contributedAmount: 100,
      },
      { id: "1", name: "asdasd", contributedAmount: 100 },
      { id: "2", name: "asdasd", contributedAmount: 100 },
      {
        id: "3",
        name: "asdasd",
        avatarUrl: "/images/user/user-2.webp",
        contributedAmount: 100,
      },
      { id: "4", name: "asdasd", contributedAmount: 100 },
    ],
  },
];

const OpenCollectings = () => {
  const [selectedRegions, setSelectedRegions] = useState<City[]>([]);
  const [selectedSportId, setSelectedSportId] = useState<string | null>(null);

  const filtered = allCollections.filter((c) => {
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
