import { ArrowLeft } from "lucide-react";
import Link from "next/link";

const CollectionLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Link
        href="/platform"
        className="fixed top-5 left-5 z-50 bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-md"
      >
        <ArrowLeft className="w-5 h-5" />
      </Link>
      {children}
    </div>
  );
};

export default CollectionLayout;
