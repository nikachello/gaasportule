import { CollectionStatus } from "@/lib/generated/prisma/client";
import Link from "next/link";
import { HeartHandshake, Users, MessageSquare, FolderOpen } from "lucide-react";
import prisma from "@/lib/prisma";

const AdminPage = async () => {
  const [
    totalUsers,
    totalCollections,
    activeCollections,
    totalSupport,
    unreadSupport,
  ] = await Promise.all([
    prisma.user.count(),
    prisma.collection.count(),
    prisma.collection.count({ where: { status: CollectionStatus.ACTIVE } }),
    prisma.supportMessage.count(),
    prisma.supportMessage.count({ where: { isRead: false } }),
  ]);

  const totalRaised = await prisma.contribution.aggregate({
    _sum: { amount: true },
  });

  const stats = [
    {
      label: "მომხმარებლები",
      value: totalUsers,
      icon: Users,
      href: "/manage-gsp-m-c/users",
    },
    {
      label: "ქველმოქმედებები",
      value: `${activeCollections} / ${totalCollections}`,
      icon: FolderOpen,
      href: "/manage-gsp-m-c/collections",
    },
    {
      label: "შეგროვებული",
      value: `${totalRaised._sum.amount ?? 0} ₾`,
      icon: HeartHandshake,
      href: "/manage-gsp-m-c/collections",
    },
    {
      label: "მხარდაჭერა",
      value: unreadSupport > 0 ? `${unreadSupport} ახალი` : totalSupport,
      icon: MessageSquare,
      href: "/manage-gsp-m-c/support",
      alert: unreadSupport > 0,
    },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Dashboard</h1>

      <div className="grid grid-cols-2 gap-4">
        {stats.map((stat) => (
          <Link key={stat.label} href={stat.href}>
            <div
              className="bg-white rounded-2xl p-4 border flex flex-col gap-3 hover:shadow-md transition-shadow"
              style={{
                borderColor: stat.alert ? "#ef4444" : "#e5e7eb",
              }}
            >
              <div className="flex items-center justify-between">
                <stat.icon
                  className="w-5 h-5"
                  style={{ color: stat.alert ? "#ef4444" : "#6b7280" }}
                />
                {stat.alert && (
                  <span className="text-xs bg-red-100 text-red-600 px-2 py-0.5 rounded-full font-medium">
                    ახალი
                  </span>
                )}
              </div>
              <div>
                <p className="text-2xl font-bold">{stat.value}</p>
                <p className="text-xs text-gray-500 mt-0.5">{stat.label}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AdminPage;
