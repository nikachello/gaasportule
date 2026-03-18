"use client";

import { createContext, useContext } from "react";
import { Session } from "@/lib/auth-client";

const SessionContext = createContext<Session | null>(null);

export const useSessionContext = () => useContext(SessionContext);

export const SessionProvider = ({
  children,
  session,
}: {
  children: React.ReactNode;
  session: Session | null;
}) => {
  return (
    <SessionContext.Provider value={session}>
      {children}
    </SessionContext.Provider>
  );
};
