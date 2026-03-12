import { ArrowRight } from "lucide-react";

const FinishedCollecting = () => {
  return (
    <div className="w-full bg-muted p-4 rounded-3xl cursor-pointer">
      <div className="flex flex-row items-center justify-between align-center gap-2">
        <div className="flex flex-row items-center gap-2">
          <span>🏁</span>
          <span> დასრულებული ქველმოქმედებები</span>
        </div>
        <div className="flex flex-row gap-2 items-center">
          <span className="font-bold bg-light-blue px-4 py-2 rounded-4xl">
            27
          </span>
          <ArrowRight size={20} />
        </div>
      </div>
    </div>
  );
};

export default FinishedCollecting;
