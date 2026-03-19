import { requireAdmin } from "@/lib/admin";
import Link from "next/link";

const navLinks = [
  { href: "/manage-gsp-m-c", label: "მთავარი" },
  { href: "/manage-gsp-m-c/collections", label: "ქველმოქმედებები" },
  { href: "/manage-gsp-m-c/support", label: "მხარდაჭერა" },
  { href: "/manage-gsp-m-c/users", label: "მომხმარებლები" },
];

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  await requireAdmin();

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white border-b px-6 py-3 flex items-center gap-6">
        <p className="font-bold text-sm shrink-0">⚙ Admin</p>
        <div className="flex items-center gap-4 overflow-x-auto no-scrollbar">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-gray-500 hover:text-black whitespace-nowrap transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
      <main className="p-6">{children}</main>
    </div>
  );
}
