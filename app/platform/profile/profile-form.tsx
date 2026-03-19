"use client";

import { useState } from "react";
import { updateUserProfile } from "@/lib/actions/user.action";
import { Button } from "@/components/ui/button";
import { signOut } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import Image from "next/image";

type User = {
  id: string;
  name: string;
  email: string;
  image: string | null;
  isAnonymous: boolean;
};

export const ProfileForm = ({ user }: { user: User }) => {
  const router = useRouter();
  const [name, setName] = useState(user.name);
  const [isAnonymous, setIsAnonymous] = useState(user.isAnonymous);
  const [loading, setLoading] = useState(false);
  const [saved, setSaved] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const result = await updateUserProfile({ name, isAnonymous });

    if (result.error) {
      setError(result.error);
    } else {
      setSaved(true);
      setTimeout(() => setSaved(false), 2000);
    }

    setLoading(false);
  };

  const handleSignOut = async () => {
    await signOut();
    router.push("/sign-in");
  };

  const inputClass =
    "w-full bg-muted rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-default-blue transition-all text-sm";

  return (
    <div className="flex flex-col gap-6">
      {/* Avatar */}
      <div className="flex items-center gap-4">
        <div className="w-16 h-16 rounded-2xl overflow-hidden bg-default-blue flex items-center justify-center shrink-0">
          {user.image ? (
            <Image
              src={user.image}
              alt={user.name}
              width={64}
              height={64}
              className="object-cover w-full h-full"
            />
          ) : (
            <span className="text-white text-2xl font-bold">
              {user.name[0].toUpperCase()}
            </span>
          )}
        </div>
        <div>
          <p className="font-semibold">{user.name}</p>
          <p className="text-sm text-muted-foreground">{user.email}</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        {/* Name */}
        <div className="flex flex-col gap-2">
          <label className="text-sm text-muted-foreground font-medium">
            სახელი
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className={inputClass}
          />
        </div>

        {/* Email — read only */}
        <div className="flex flex-col gap-2">
          <label className="text-sm text-muted-foreground font-medium">
            ელ. ფოსტა
          </label>
          <input
            type="email"
            value={user.email}
            disabled
            className={`${inputClass} opacity-50 cursor-not-allowed`}
          />
        </div>

        {/* Anonymous toggle */}
        <div
          className="flex items-center justify-between bg-muted rounded-2xl px-5 py-4 cursor-pointer"
          onClick={() => setIsAnonymous((p) => !p)}
        >
          <div className="flex flex-col gap-0.5">
            <p className="text-sm font-semibold">ანონიმური რეჟიმი</p>
            <p className="text-xs text-muted-foreground">
              სახელი არ გამოჩნდება რეიტინგსა და შემოწირულებების სიაში
            </p>
          </div>
          <div
            className="w-11 h-6 rounded-full transition-colors duration-200 flex items-center px-0.5 shrink-0"
            style={{
              background: isAnonymous ? "#1a3a6e" : "#d1d5db",
            }}
          >
            <div
              className="w-5 h-5 rounded-full bg-white shadow transition-transform duration-200"
              style={{
                transform: isAnonymous ? "translateX(20px)" : "translateX(0)",
              }}
            />
          </div>
        </div>

        {error && <p className="text-sm text-red-500">{error}</p>}

        <Button
          type="submit"
          disabled={loading}
          className="w-full py-7 text-base font-semibold rounded-2xl bg-default-blue disabled:opacity-40"
        >
          {saved ? "შენახულია ✓" : loading ? "ინახება..." : "შენახვა"}
        </Button>
      </form>

      {/* Sign out */}
      <button
        onClick={handleSignOut}
        className="w-full py-4 rounded-2xl border border-red-200 text-red-500 text-sm font-medium hover:bg-red-50 transition-colors"
      >
        გასვლა
      </button>
    </div>
  );
};
