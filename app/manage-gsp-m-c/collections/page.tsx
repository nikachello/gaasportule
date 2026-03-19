import { CollectionStatus } from "@/lib/generated/prisma/client";
import Link from "next/link";
import { Plus } from "lucide-react";
import prisma from "@/lib/prisma";

const statusLabel = (status: CollectionStatus) => {
  if (status === "ACTIVE")
    return { label: "აქტიური", color: "text-green-600 bg-green-50" };
  if (status === "COMPLETED")
    return { label: "დასრულებული", color: "text-blue-600 bg-blue-50" };
  return { label: "დახურული", color: "text-red-600 bg-red-50" };
};

const CollectionsPage = async () => {
  const collections = await prisma.collection.findMany({
    include: {
      city: true,
      sport: true,
      _count: { select: { contributions: true } },
    },
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">ქველმოქმედებები</h1>
        <Link
          href="/manage-gsp-m-c/collections/create"
          className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-xl text-sm font-medium hover:bg-gray-800 transition-colors"
        >
          <Plus className="w-4 h-4" />
          დამატება
        </Link>
      </div>

      <div className="space-y-3">
        {collections.map((c) => {
          const { label, color } = statusLabel(c.status);
          const progress = Math.round((c.raised / c.goal) * 100);

          return (
            <div
              key={c.id}
              className="bg-white rounded-2xl border border-gray-100 p-4 space-y-3"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-1 flex-1">
                  <p className="font-semibold text-sm">{c.title}</p>
                  <p className="text-xs text-gray-500">
                    {c.city.name} · {c.sport.name}
                  </p>
                </div>
                <span
                  className={`text-xs px-2 py-1 rounded-full font-medium shrink-0 ${color}`}
                >
                  {label}
                </span>
              </div>

              {/* Progress */}
              <div className="space-y-1">
                <div className="flex justify-between text-xs text-gray-500">
                  <span>{c.raised} ₾</span>
                  <span>
                    {c.goal} ₾ · {progress}%
                  </span>
                </div>
                <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-black rounded-full"
                    style={{ width: `${Math.min(progress, 100)}%` }}
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <p className="text-xs text-gray-500">
                  {c._count.contributions} შემოწირულება
                </p>
                <Link
                  href={`/manage-gsp-m-c/collections/${c.id}`}
                  className="text-xs font-medium text-black underline underline-offset-2"
                >
                  მართვა
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CollectionsPage;
