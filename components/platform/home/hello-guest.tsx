import React from "react";

const HelloGuest = () => {
  return (
    <div>
      <div className="flex flex-row gap-2 items-center">
        <div className="w-15 h-15 bg-muted rounded-2xl" />
        <div className="flex flex-col">
          <p className="text-muted-foreground tracking-wide">გამარჯობა,</p>
          <p className="font-bold tracking-wide">სტუმარი</p>
        </div>
      </div>
    </div>
  );
};

export default HelloGuest;
