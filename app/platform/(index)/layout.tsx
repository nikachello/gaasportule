import { BottomNavbar } from "@/components/platform/home/bottom-navbar";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="px-3 py-5 space-y-5 pb-24">{children}</div>
      <BottomNavbar />
    </>
  );
};

export default Layout;
