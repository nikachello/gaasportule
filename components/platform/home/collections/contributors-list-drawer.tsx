"use client";

import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import Image from "next/image";

type Contributor = {
  id: string;
  name: string;
  avatarUrl?: string;
  contributedAmount: number;
};

type Props = {
  contributors: Contributor[];
  trigger: React.ReactNode;

  // add controlled props
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
};

const ContributorsListDrawer = ({
  contributors,
  trigger,
  open,
  onOpenChange,
}: Props) => {
  return (
    <Drawer open={open} onOpenChange={onOpenChange}>
      <DrawerTrigger asChild>
        <div>{trigger}</div>
      </DrawerTrigger>

      <DrawerContent className="px-6 pb-6">
        <DrawerHeader className="px-0">
          <DrawerTitle className="text-left text-2xl">
            უკვე დაეხმარნენ
          </DrawerTitle>
          <DrawerDescription className="text-left">
            სულ დაეხმარა {contributors.length} ადამიანი
          </DrawerDescription>
        </DrawerHeader>

        <div className="overflow-y-auto max-h-[70vh] no-scrollbar pr-2">
          {contributors.map((contributor, index) => (
            <div key={contributor.id}>
              <div className="flex items-center justify-between py-3 rounded-xl hover:bg-muted transition-colors px-2">
                <div className="flex items-center gap-3">
                  <Image
                    src={
                      contributor.avatarUrl ?? "/images/user/default-avatar.png"
                    }
                    alt={contributor.name}
                    width={40}
                    height={40}
                    className="rounded-full object-cover"
                    loading="eager"
                  />
                  <p className="text-base font-medium">{contributor.name}</p>
                </div>

                <p className="text-sm font-semibold">
                  {contributor.contributedAmount} ₾
                </p>
              </div>

              {index !== contributors.length - 1 && (
                <div className="h-px bg-border mx-2" />
              )}
            </div>
          ))}
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default ContributorsListDrawer;
