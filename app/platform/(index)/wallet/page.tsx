import { Tabs } from "@/components/custom/ui/Tabs";
import { Button } from "@/components/ui/button";
import { HeartHandshake } from "lucide-react";
import Link from "next/link";
import { getSession } from "@/lib/session";
import {
  getUserContributions,
  getUserTotalContributed,
} from "@/lib/repositories/contribution.repository";

type Contribution = {
  id: string;
  amount: number;
  createdAt: Date;
  collection: {
    id: string;
    title: string;
    imageUrl: string;
    city: { name: string };
    sport: { name: string };
  };
};

const Helps = ({
  contributions,
  total,
}: {
  contributions: Contribution[];
  total: number;
}) => {
  return (
    <div className="space-y-5">
      <div className="flex flex-row rounded-2xl p-5 items-center justify-between bg-muted">
        <div className="flex flex-col gap-1">
          <p className="text-xs">ჯამური დახმარება</p>
          <p className="text-2xl font-bold">{total} ₾</p>
        </div>
        <Link href="/platform/piggy">
          <Button className="text-white text-sm font-semibold px-5 py-2.5 rounded-xl bg-default-blue">
            დახმარება
          </Button>
        </Link>
      </div>

      <div className="space-y-3">
        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
          აქტიური ქველმოქმედებები
        </p>

        {contributions.length === 0 ? (
          <div className="bg-white border-2 border-dashed border-gray-200 rounded-2xl p-6 flex flex-col items-center text-center gap-3">
            <div className="w-11 h-11 rounded-full bg-gray-100 flex items-center justify-center">
              <HeartHandshake size={20} className="text-gray-400" />
            </div>
            <div className="space-y-1">
              <p className="text-sm font-semibold text-gray-800">
                ჯერ არ გაქვთ აქტიური დახმარებები
              </p>
              <p className="text-xs text-gray-400 leading-relaxed">
                გადადით ქველმოქმედებების გვერდზე და აირჩიეთ ვისი დახმარება გსურთ
              </p>
            </div>
            <Link href="/platform">
              <Button className="bg-default-blue text-white text-xs px-5 py-2 rounded-xl mt-1">
                ქველმოქმედებები
              </Button>
            </Link>
          </div>
        ) : (
          <div className="space-y-3">
            {contributions.map((c) => (
              <Link key={c.id} href={`/platform/collection/${c.collection.id}`}>
                <div className="bg-muted rounded-2xl p-4 flex items-center justify-between gap-4">
                  <div className="flex flex-col gap-1">
                    <p className="text-sm font-semibold">
                      {c.collection.title}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {c.collection.city.name} · {c.collection.sport.name}
                    </p>
                  </div>
                  <p className="text-sm font-bold text-default-blue shrink-0">
                    {c.amount} ₾
                  </p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const Transactions = ({ contributions }: { contributions: Contribution[] }) => {
  if (contributions.length === 0) {
    return (
      <div className="bg-white border-2 border-dashed border-gray-200 rounded-2xl p-6 flex flex-col items-center text-center gap-3">
        <p className="text-sm font-semibold text-gray-800">
          გადარიცხვები არ არის
        </p>
        <p className="text-xs text-gray-400">
          გადარიცხვები გამოჩნდება გადახდის შემდეგ
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {contributions.map((c) => (
        <div
          key={c.id}
          className="bg-muted rounded-2xl px-4 py-3 flex items-center justify-between"
        >
          <div className="flex flex-col gap-1">
            <p className="text-sm font-semibold">{c.collection.title}</p>
            <p className="text-xs text-muted-foreground">
              {new Date(c.createdAt).toLocaleDateString("ka-GE")}
            </p>
          </div>
          <p className="text-sm font-bold text-default-blue">{c.amount} ₾</p>
        </div>
      ))}
    </div>
  );
};

const Page = async () => {
  const session = await getSession();

  const [contributions, total] = await Promise.all([
    getUserContributions(session!.user.id),
    getUserTotalContributed(session!.user.id),
  ]);

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">ჩემი დახმარებები</h1>
      <Tabs
        tabs={[
          { value: "helps", label: "დახმარებები" },
          { value: "transactions", label: "გადარიცხვები" },
        ]}
        defaultValue="helps"
        content={{
          helps: <Helps contributions={contributions} total={total} />,
          transactions: <Transactions contributions={contributions} />,
        }}
      />
    </div>
  );
};

export default Page;
