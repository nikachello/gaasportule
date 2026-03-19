"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Info } from "lucide-react";
import { submitSupportMessage } from "@/lib/actions/support.action";

const Page = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    const result = await submitSupportMessage({ email, message });
    setLoading(false);

    if (result.success) {
      setSent(true);
      setEmail("");
      setMessage("");
    }
  };

  if (sent) {
    return (
      <div className="flex flex-col min-h-screen items-center justify-center p-4 gap-4 text-center">
        <h1 className="text-2xl font-bold">გაგზავნილია</h1>
        <p className="text-muted-foreground text-sm">
          ჩვენი გუნდი დაგიკავშირდებათ 24 საათის განმავლობაში.
        </p>
        <Button
          onClick={() => setSent(false)}
          className="bg-default-blue rounded-2xl px-8 py-6"
        >
          დახურვა
        </Button>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen p-4 pb-10 space-y-4">
      <h1 className="font-bold text-2xl text-center">დახმარება</h1>
      <div className="flex flex-col gap-6 flex-1">
        <div className="flex flex-col gap-2">
          <label className="text-sm text-muted-foreground font-medium">
            ელ. ფოსტა
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="example@gmail.com"
            className="w-full text-base bg-muted rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-default-blue transition-all"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm text-muted-foreground font-medium">
            შეტყობინება
          </label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="აღწერეთ თქვენი პრობლემა..."
            rows={6}
            className="w-full text-base bg-muted rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-default-blue transition-all resize-none"
          />
        </div>

        <div className="bg-muted rounded-2xl p-4 flex gap-3">
          <Info className="w-4 h-4 mt-0.5 shrink-0 text-muted-foreground" />
          <div className="flex flex-col gap-1">
            <p className="text-sm font-semibold">საპასუხო დრო</p>
            <p className="text-xs text-muted-foreground leading-relaxed">
              ჩვენი გუნდი თქვენს შეტყობინებას განიხილავს 24 საათის განმავლობაში.
              გთხოვთ მიუთითოთ რაც შეიძლება დეტალური ინფორმაცია პრობლემის
              შესახებ.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <Button
          onClick={handleSubmit}
          disabled={!email || !message || loading}
          className="w-full py-7 text-lg font-semibold rounded-2xl bg-default-blue disabled:opacity-40"
        >
          {loading ? "იგზავნება..." : "გაგზავნა"}
        </Button>
      </div>
    </div>
  );
};

export default Page;
