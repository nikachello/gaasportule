import { Button } from "@/components/ui/button";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center p-4 gap-4 text-center">
      <h1 className="text-2xl font-bold">404</h1>
      <p className="text-sm text-muted-foreground">გვერდი ვერ მოიძებნა.</p>
      <Link href="/platform">
        <Button className="bg-default-blue rounded-2xl px-8 py-6">
          მთავარ გვერდზე დაბრუნება
        </Button>
      </Link>
    </div>
  );
};

export default NotFound;
