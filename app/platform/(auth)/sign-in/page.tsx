"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { signIn } from "@/lib/auth-client";

const SignInPage = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const { error } = await signIn.email({
      email,
      password,
    });

    if (error) {
      setError(error.message ?? "შესვლა ვერ მოხერხდა");
      setLoading(false);
      return;
    }

    router.push("/platform");
  };

  return (
    <div className="w-full max-w-sm flex flex-col gap-6">
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl font-bold">შესვლა</h1>
        <p className="text-sm text-muted-foreground">
          არ გაქვთ ანგარიში?{" "}
          <Link href="/sign-up" className="text-default-blue font-medium">
            რეგისტრაცია
          </Link>
        </p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <label className="text-sm text-muted-foreground font-medium">
            ელ. ფოსტა
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="example@gmail.com"
            required
            className="w-full bg-muted rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-default-blue transition-all text-sm"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm text-muted-foreground font-medium">
            პაროლი
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            required
            className="w-full bg-muted rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-default-blue transition-all text-sm"
          />
        </div>

        {error && <p className="text-sm text-red-500 text-center">{error}</p>}

        <Button
          type="submit"
          disabled={loading}
          className="w-full py-7 text-base font-semibold rounded-2xl bg-default-blue disabled:opacity-40"
        >
          {loading ? "იტვირთება..." : "შესვლა"}
        </Button>
      </form>
    </div>
  );
};

export default SignInPage;
