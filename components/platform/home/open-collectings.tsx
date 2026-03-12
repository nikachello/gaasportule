import React from "react";
import CollectingFilter from "./collecting-filter";

const OpenCollectings = () => {
  return (
    <div className="space-y-2">
      <h1 className="font-bold text-lg tracking-wider">
        აქტიური ქველმოქმედებები
      </h1>
      <CollectingFilter type="city" />
      <CollectingFilter type="sport_category" />
    </div>
  );
};

export default OpenCollectings;
