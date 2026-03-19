"use client";

import { markSupportMessageAsRead } from "@/lib/actions/support.action";
import { useState } from "react";

export const MarkAsRead = ({ id }: { id: string }) => {
  const [loading, setLoading] = useState(false);

  const handle = async () => {
    setLoading(true);
    await markSupportMessageAsRead(id);
  };

  return (
    <button
      onClick={handle}
      disabled={loading}
      className="text-xs font-medium text-gray-500 underline underline-offset-2 shrink-0 disabled:opacity-40 cursor-pointer"
    >
      {loading ? "..." : "წაკითხულია"}
    </button>
  );
};
