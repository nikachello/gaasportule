"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Info, ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

const PRESET_AMOUNTS = [5, 50, 500];

const Page = () => {
  const [amount, setAmount] = useState<string>("");
  const router = useRouter();

  const handlePreset = (value: number) => {
    setAmount(value.toString());
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.replace(/[^0-9]/g, "");
    setAmount(val);
  };

  return (
    <div className="flex flex-col min-h-screen p-4 pb-10">
      {/* Header */}
      <div className="relative flex items-center justify-center mb-8">
        <button
          onClick={() => router.back()}
          className="absolute left-0 w-10 h-10 rounded-full bg-muted flex items-center justify-center"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <h1 className="text-2xl font-bold">პროექტის დახმარება</h1>
      </div>

      <div className="flex flex-col gap-6 flex-1">
        {/* Amount input */}
        <div className="flex flex-col gap-2">
          <label className="text-sm text-muted-foreground font-medium">
            თანხა
          </label>
          <div className="relative">
            <input
              type="text"
              inputMode="numeric"
              value={amount}
              onChange={handleChange}
              placeholder="0"
              className="w-full text-4xl font-bold bg-muted rounded-2xl px-5 py-5 pr-16 outline-none focus:ring-2 focus:ring-default-blue transition-all"
            />
            <span className="absolute right-5 top-1/2 -translate-y-1/2 text-2xl font-bold text-muted-foreground">
              ₾
            </span>
          </div>
        </div>

        {/* Preset pills */}
        <div className="flex gap-2">
          {PRESET_AMOUNTS.map((preset) => (
            <button
              key={preset}
              onClick={() => handlePreset(preset)}
              className={`flex-1 py-3 rounded-2xl text-sm font-semibold border transition-all duration-200 ${
                amount === preset.toString()
                  ? "bg-muted border-transparent"
                  : "border-black/10"
              }`}
            >
              {preset} ₾
            </button>
          ))}
        </div>

        {/* Disclaimer */}
        <div className="bg-muted rounded-2xl p-4 flex gap-3">
          <Info className="w-4 h-4 mt-0.5 shrink-0 text-muted-foreground" />
          <div className="flex flex-col gap-1">
            <p className="text-sm font-semibold">მნიშვნელოვანი ინფორმაცია</p>
            <p className="text-xs text-muted-foreground leading-relaxed">
              ამ გვერდიდან თქვენ შეგიძლიათ უშუალოდ პროექტს დაეხმაროთ. ეს თანხა
              აისახება პროექტის ანგარიშზე და მოხმარდება სხვადასხვა ხარჯებს
              როგორიცაა პროგრამული უზრუნველყოფა, სხვადასხვა აქტივობების
              დაფინანსება და კონკრეტულ შემთხვევებში კადრების ანაზღაურება
            </p>
          </div>
        </div>
      </div>

      {/* Submit button */}
      <div className="mt-6">
        <Button
          disabled={!amount || amount === "0"}
          className="w-full py-7 text-lg font-semibold rounded-2xl bg-default-blue disabled:opacity-40"
        >
          გადარიცხვა {amount ? `${amount} ₾` : ""}
        </Button>
      </div>
    </div>
  );
};

export default Page;
