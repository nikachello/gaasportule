"use client";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Contributor } from "@/lib/types/collection";
import Image from "next/image";

type Props = {
  contributors: Contributor[];
  contributorsQn: number;
  trigger: React.ReactNode;
};

const ContributorsListDrawer = ({
  contributors,
  contributorsQn,
  trigger,
}: Props) => {
  return (
    <Drawer>
      <DrawerTrigger asChild>{trigger}</DrawerTrigger>
      <DrawerContent className="px-8">
        <DrawerHeader className="px-0">
          <DrawerTitle className="text-left text-2xl">
            უკვე დაეხმარნენ
          </DrawerTitle>
          <DrawerDescription className="text-left">
            სულ დაეხმარა {contributorsQn} ადამიანი
          </DrawerDescription>
        </DrawerHeader>
        <div className="overflow-y-auto no-scrollbar pb-8">
          {contributors.map((contributor) => (
            <div
              key={contributor.id}
              className="flex flex-row items-center justify-between py-3 hover:bg-muted transition-colors rounded-xl"
            >
              <div className="flex flex-row items-center gap-3">
                <Image
                  src={
                    contributor.avatarUrl ?? "/images/user/default-avatar.png"
                  }
                  alt={contributor.name}
                  width={10}
                  height={10}
                  className="rounded-full w-10 h-10 object-cover"
                  loading="eager"
                />
                <p className="text-lg font-medium">{contributor.name}</p>
              </div>
              <p>{contributor.contributedAmount} ლარი</p>
            </div>
          ))}
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default ContributorsListDrawer;
