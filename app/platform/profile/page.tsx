import { getSession } from "@/lib/session";
import { getUserById } from "@/lib/repositories/user.repository";
import { ProfileForm } from "./profile-form";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

const ProfilePage = async () => {
  const session = await getSession();
  const user = await getUserById(session!.user.id);

  if (!user) return null;

  return (
    <div className="flex flex-col min-h-screen p-4 pb-10 space-y-6">
      <div className="relative flex items-center justify-center">
        <Link
          href="/platform"
          className="absolute left-0 w-10 h-10 rounded-full bg-muted flex items-center justify-center"
        >
          <ArrowLeft className="w-5 h-5" />
        </Link>
        <h1 className="text-2xl font-bold">პროფილი</h1>
      </div>
      <ProfileForm user={user} />
    </div>
  );
};

export default ProfilePage;
