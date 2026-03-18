"use client";

import { useState } from "react";

interface Tab {
  value: string;
  label: string;
}

interface TabsProps {
  tabs: Tab[];
  defaultValue?: string;
  children: (activeTab: string) => React.ReactNode;
}

export function Tabs({ tabs, defaultValue, children }: TabsProps) {
  const [active, setActive] = useState(defaultValue ?? tabs[0].value);

  return (
    <div className="space-y-4">
      <div className="flex w-full rounded-4xl bg-muted p-1 gap-1">
        {tabs.map((tab) => (
          <button
            key={tab.value}
            onClick={() => setActive(tab.value)}
            className="flex-1 py-3 px-4 rounded-4xl text-sm font-medium transition-all duration-200"
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
      <div>{children(active)}</div>
    </div>
  );
}
