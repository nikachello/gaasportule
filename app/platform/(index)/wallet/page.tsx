"use client";
import { Tabs } from "@/components/custom/ui/Tabs";
import { Button } from "@/components/ui/button";
import { HeartHandshake } from "lucide-react";
import Link from "next/link";

const Helps = () => {
  return (
    <div className="space-y-5">
      {/* Balance card */}
      <div className="flex flex-row rounded-2xl p-5 items-center justify-between bg-muted">
        <div className="flex flex-col gap-1">
          <p className="text-xs">ჯამური დახმარება</p>
          <p className="text-2xl font-bold ">0 ლ</p>
        </div>
        <Link href="/platform/piggy">
          <Button className="text-white text-sm font-semibold px-5 py-2.5 rounded-xl bg-default-blue">
            დახმარება
          </Button>
        </Link>
      </div>

      {/* Active section */}
      <div className="space-y-3">
        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
          აქტიური ქველმოქმედებები
        </p>

        {/* Empty state */}
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
      </div>
    </div>
  );
};

const Page = () => {
  return (
    <div className="space-y-4">
      <div className="space-y-4">
        <h1 className="text-2xl font-bold">ჩემი დახმარებები</h1>
        <Tabs
          tabs={[
            { value: "helps", label: "დახმარებები" },
            { value: "transactions", label: "გადარიცხვები" },
          ]}
          defaultValue="helps"
        >
          {(activeTab) => (
            <>
              {activeTab === "helps" && <Helps />}
              {activeTab === "transactions" && <div>ჩემი გადარიცხვები</div>}
            </>
          )}
        </Tabs>
      </div>
      <div></div>
    </div>
  );
};

export default Page;
