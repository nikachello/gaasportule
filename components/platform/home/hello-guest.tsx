"use client";

import { useSessionContext } from "@/providers/session-provider";
import Image from "next/image";

const HelloGuest = () => {
  const session = useSessionContext();
  const name = session?.user.name ?? "სტუმარი";
  const image = session?.user.image;
  const initials = name.charAt(0).toUpperCase();

  return (
    <div>
      <div className="flex flex-row gap-3 items-center">
        {image ? (
          <div className="relative w-12 h-12 rounded-2xl overflow-hidden shrink-0">
            <Image src={image} alt={name} fill className="object-cover" />
          </div>
        ) : (
          <div className="w-12 h-12 rounded-2xl bg-default-blue flex items-center justify-center shrink-0">
            <span className="text-white font-bold text-lg">{initials}</span>
          </div>
        )}
        <div className="flex flex-col">
          <p className="text-muted-foreground text-sm tracking-wide">
            გამარჯობა,
          </p>
          <p className="font-bold tracking-wide">{name}</p>
        </div>
      </div>
    </div>
  );
};

export default HelloGuest;
