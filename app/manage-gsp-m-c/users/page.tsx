import prisma from "@/lib/prisma";
import Image from "next/image";

const UsersPage = async () => {
  const users = await prisma.user.findMany({
    include: {
      contributions: {
        select: { amount: true },
      },
    },
    orderBy: { createdAt: "desc" },
  });

  const usersWithTotals = users.map((u) => ({
    ...u,
    total: u.contributions.reduce((sum, c) => sum + c.amount, 0),
  }));

  return (
    <div className="space-y-6 max-w-2xl">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">მომხმარებლები</h1>
        <span className="text-sm text-gray-500">{users.length} სულ</span>
      </div>

      <div className="space-y-3">
        {usersWithTotals.map((user) => (
          <div
            key={user.id}
            className="bg-white rounded-2xl border border-gray-100 px-4 py-3 flex items-center gap-4"
          >
            {/* Avatar */}
            <div className="w-10 h-10 rounded-full bg-gray-100 overflow-hidden shrink-0 flex items-center justify-center">
              {user.image ? (
                <Image
                  src={user.image}
                  alt={user.name}
                  width={40}
                  height={40}
                  className="object-cover"
                />
              ) : (
                <span className="text-sm font-bold text-gray-400">
                  {user.name[0]}
                </span>
              )}
            </div>

            {/* Info */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <p className="text-sm font-semibold truncate">{user.name}</p>
                {user.role === "ADMIN" && (
                  <span className="text-xs bg-black text-white px-2 py-0.5 rounded-full shrink-0">
                    Admin
                  </span>
                )}
              </div>
              <p className="text-xs text-gray-500 truncate">{user.email}</p>
            </div>

            {/* Stats */}
            <div className="text-right shrink-0">
              <p className="text-sm font-bold">
                {user.total > 0 ? `${user.total} ₾` : "—"}
              </p>
              <p className="text-xs text-gray-500">
                {user.contributions.length} შემოწ.
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UsersPage;
