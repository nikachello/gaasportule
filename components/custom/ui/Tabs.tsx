"use client";

import { useState } from "react";

interface Tab {
  value: string;
  label: string;
}

interface TabsProps {
  tabs: Tab[];
  defaultValue?: string;
  content: Record<string, React.ReactNode>;
}

export function Tabs({ tabs, defaultValue, content }: TabsProps) {
  const [active, setActive] = useState(defaultValue ?? tabs[0].value);

  return (
    <div className="space-y-4">
      <div className="flex w-full rounded-xl bg-gray-100 p-1 gap-1">
        {tabs.map((tab) => (
          <button
            key={tab.value}
            onClick={() => setActive(tab.value)}
            className="flex-1 py-3 px-4 rounded-lg text-sm font-medium transition-all duration-200"
            style={{
              background: active === tab.value ? "white" : "transparent",
              color: active === tab.value ? "#111" : "#888",
              boxShadow:
                active === tab.value ? "0 1px 4px rgba(0,0,0,0.1)" : "none",
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div>{content[active]}</div>
    </div>
  );
}
