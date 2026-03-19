"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const Error = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col min-h-screen items-center justify-center p-4 gap-4 text-center">
      <h1 className="text-2xl font-bold">ვერ მოიძებნა</h1>
      <p className="text-sm text-muted-foreground">
        ქველმოქმედება ვერ მოიძებნა ან წაიშალა.
      </p>
      <Button
        onClick={() => router.push("/platform")}
        className="bg-default-blue rounded-2xl px-8 py-6"
      >
        უკან დაბრუნება
      </Button>
    </div>
  );
};

export default Error;
