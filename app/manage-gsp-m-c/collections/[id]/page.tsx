import { notFound } from "next/navigation";
import prisma from "@/lib/prisma";
import { CollectionStatusForm } from "./collection-status-form";

type Props = {
  params: Promise<{ id: string }>;
};

const ManageCollectionPage = async ({ params }: Props) => {
  const { id } = await params;

  const collection = await prisma.collection.findUnique({
    where: { id },
    include: {
      city: true,
      sport: true,
      contributions: {
        include: {
          user: { select: { id: true, name: true, email: true } },
        },
        orderBy: { amount: "desc" },
      },
    },
  });

  if (!collection) return notFound();

  return (
    <div className="space-y-6 max-w-2xl">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold">{collection.title}</h1>
      </div>

      {/* Info */}
      <div className="bg-white rounded-2xl border border-gray-100 p-4 space-y-2">
        <div className="flex justify-between text-sm">
          <span className="text-gray-500">სტატუსი</span>
          <span className="font-medium">{collection.status}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-500">შეგროვებული</span>
          <span className="font-medium">
            {collection.raised} / {collection.goal} ₾
          </span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-500">ქალაქი</span>
          <span className="font-medium">{collection.city.name}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-500">სპორტი</span>
          <span className="font-medium">{collection.sport.name}</span>
        </div>
      </div>

      {/* Status management */}
      <CollectionStatusForm
        id={collection.id}
        currentStatus={collection.status}
      />

      {/* Contributors */}
      <div className="space-y-3">
        <h2 className="font-bold">
          შემოწირულებები ({collection.contributions.length})
        </h2>
        {collection.contributions.length === 0 ? (
          <p className="text-sm text-gray-500">შემოწირულებები არ არის</p>
        ) : (
          <div className="space-y-2">
            {collection.contributions.map((c) => (
              <div
                key={c.id}
                className="bg-white rounded-xl border border-gray-100 px-4 py-3 flex items-center justify-between"
              >
                <div>
                  <p className="text-sm font-medium">{c.user.name}</p>
                  <p className="text-xs text-gray-500">{c.user.email}</p>
                </div>
                <p className="text-sm font-bold">{c.amount} ₾</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ManageCollectionPage;
