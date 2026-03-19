"use client";

import { Button } from "@/components/ui/button";

const Error = ({ reset }: { reset: () => void }) => {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center p-4 gap-4 text-center">
      <h1 className="text-2xl font-bold">შეცდომა</h1>
      <p className="text-sm text-muted-foreground">
        რაღაც არასწორად წავიდა. სცადეთ თავიდან.
      </p>
      <Button onClick={reset} className="bg-default-blue rounded-2xl px-8 py-6">
        თავიდან ცდა
      </Button>
    </div>
  );
};

export default Error;
