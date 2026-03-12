import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <div className="px-2 py-5 space-y-5">{children}</div>;
};

export default Layout;
