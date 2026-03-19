"use client";

import { updateCollectionStatus } from "@/lib/actions/collection.action";
import { CollectionStatus } from "@/lib/generated/prisma/client";
import { useState } from "react";

type Props = {
  id: string;
  currentStatus: CollectionStatus;
};

export const CollectionStatusForm = ({ id, currentStatus }: Props) => {
  const [status, setStatus] = useState<CollectionStatus>(currentStatus);
  const [loading, setLoading] = useState(false);

  const handleChange = async (newStatus: CollectionStatus) => {
    setLoading(true);
    setStatus(newStatus);
    await updateCollectionStatus({ id, status: newStatus });
    setLoading(false);
  };

  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-4 space-y-3">
      <p className="text-sm font-semibold">სტატუსის შეცვლა</p>
      <div className="flex gap-2">
        {(["ACTIVE", "COMPLETED", "CLOSED"] as CollectionStatus[]).map((s) => (
          <button
            key={s}
            onClick={() => handleChange(s)}
            disabled={loading || status === s}
            className="flex-1 py-2 rounded-xl text-xs font-medium border transition-all"
            style={{
              background: status === s ? "black" : "transparent",
              color: status === s ? "white" : "black",
              borderColor: status === s ? "black" : "#e5e7eb",
              opacity: loading ? 0.5 : 1,
            }}
          >
            {s === "ACTIVE"
              ? "აქტიური"
              : s === "COMPLETED"
              ? "დასრულებული"
              : "დახურული"}
          </button>
        ))}
      </div>
    </div>
  );
};
