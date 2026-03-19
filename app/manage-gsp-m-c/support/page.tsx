import prisma from "@/lib/prisma";
import { MarkAsRead } from "./mark-as-read";

const SupportPage = async () => {
  const messages = await prisma.supportMessage.findMany({
    orderBy: { createdAt: "desc" },
  });

  const unread = messages.filter((m) => !m.isRead).length;

  return (
    <div className="space-y-6 max-w-2xl">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">მხარდაჭერა</h1>
        {unread > 0 && (
          <span className="text-xs bg-red-100 text-red-600 px-3 py-1 rounded-full font-medium">
            {unread} წაუკითხავი
          </span>
        )}
      </div>

      {messages.length === 0 ? (
        <p className="text-sm text-gray-500">შეტყობინებები არ არის</p>
      ) : (
        <div className="space-y-3">
          {messages.map((m) => (
            <div
              key={m.id}
              className="bg-white rounded-2xl border p-4 space-y-3"
              style={{
                borderColor: m.isRead ? "#f3f4f6" : "#fca5a5",
              }}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-1">
                  <p className="text-sm font-semibold">{m.email}</p>
                  <p className="text-xs text-gray-500">
                    {new Date(m.createdAt).toLocaleDateString("ka-GE", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </p>
                </div>
                {!m.isRead && <MarkAsRead id={m.id} />}
              </div>
              <p className="text-sm text-gray-700 leading-relaxed">
                {m.message}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SupportPage;
