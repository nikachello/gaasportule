"use client";
import Image from "next/image";
import { MapPin, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ContributorsListDrawer from "./contributors-list-drawer";
import { City, Collection } from "@/lib/types/collection";
import { useRouter } from "next/navigation";
import ProgressBarWithLabel from "./progress-bar-with-label";
import { useState } from "react";

type SportCategory = { id: string; name: string };

interface CollectionListProps {
  collections: Collection[];
  cities: City[];
  sports: SportCategory[];
}

const CollectionList = ({ collections, cities }: CollectionListProps) => {
  const router = useRouter();
  const [openCollectionId, setOpenCollectionId] = useState<string | null>(null);

  if (collections.length === 0) {
    return (
      <p className="text-muted-foreground text-sm py-4 text-center">
        ქველმოქმედება ვერ მოიძებნა
      </p>
    );
  }

  return (
    <div className="space-y-6 w-full">
      {collections.map((collection) => {
        const city = cities.find((ci) => ci.id === collection.cityId);
        const visibleContributors = collection.contributors.slice(0, 3);
        const drawerOpen = openCollectionId === collection.id;

        return (
          <div
            key={collection.id}
            className="relative shadow-xl rounded-3xl cursor-pointer"
            onClick={() => {
              if (!drawerOpen) {
                router.push(`/platform/collection/${collection.id}`);
              }
            }}
          >
            {/* Collection Image */}
            <div className="relative w-full aspect-[3/4] rounded-3xl overflow-hidden">
              <Image
                src="/images/landing/collectings/children-football-1.webp"
                fill
                alt={collection.title}
                className="object-cover"
              />
            </div>

            {/* Card Content */}
            <div className="absolute bottom-2 left-2 right-2 bg-white rounded-3xl shadow-lg p-4">
              <div className="flex flex-col gap-4">
                {/* City */}
                <div className="flex items-center gap-1 bg-muted p-2 rounded-3xl text-xs w-fit">
                  <MapPin className="w-4 h-4" />
                  <span>{city?.name}</span>
                </div>

                {/* Title */}
                <p className="font-bold">{collection.title}</p>

                {/* Progress */}
                <ProgressBarWithLabel
                  goal={collection.goal}
                  raised={collection.raised}
                />

                {/* Contributors + Help Button */}
                <div className="flex items-center justify-between gap-10">
                  {/* Contributors */}
                  <div className="flex flex-col gap-2">
                    <span className="text-xs text-muted-foreground">
                      {collection.contributors.length} დაეხმარა
                    </span>

                    <ContributorsListDrawer
                      contributors={collection.contributors}
                      trigger={
                        <div
                          className="flex items-center cursor-pointer"
                          onClick={(e) => {
                            e.stopPropagation(); // prevent card click
                            setOpenCollectionId(
                              drawerOpen ? null : collection.id
                            );
                          }}
                        >
                          {visibleContributors.map((contributor, index) => (
                            <div
                              key={contributor.id}
                              className="w-8 h-8 rounded-full border-2 border-white overflow-hidden"
                              style={{
                                marginLeft: index === 0 ? 0 : "-10px",
                                zIndex: index,
                              }}
                            >
                              <Image
                                src={
                                  contributor.avatarUrl ??
                                  "/images/user/default-avatar.png"
                                }
                                alt="user-image"
                                height={32}
                                width={32}
                                className="rounded-full object-cover w-full h-full"
                              />
                            </div>
                          ))}
                          <div
                            className="w-8 h-8 rounded-full border-2 border-white bg-default-blue flex items-center justify-center"
                            style={{
                              marginLeft: "-10px",
                              zIndex: visibleContributors.length,
                            }}
                          >
                            <ChevronRight className="w-4 h-4 text-white" />
                          </div>
                        </div>
                      }
                      open={drawerOpen}
                      onOpenChange={(open) =>
                        setOpenCollectionId(open ? collection.id : null)
                      }
                    />
                  </div>

                  {/* Help Button */}
                  <div onClick={(e) => e.stopPropagation()} className="w-full">
                    <Button className="w-full p-7 bg-default-blue text-xl">
                      დაეხმარე
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CollectionList;
