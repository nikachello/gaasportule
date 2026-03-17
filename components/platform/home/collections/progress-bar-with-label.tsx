interface ProgressBarWithLabelProps {
  raised: number;
  goal: number;
}

const ProgressBarWithLabel = ({ raised, goal }: ProgressBarWithLabelProps) => {
  const percent = Math.min(Math.round((raised / goal) * 100), 100);
  return (
    <div className="space-y-2">
      <div className="w-full bg-gray-100 rounded-full h-8">
        <div
          className="bg-default-blue h-8 rounded-full transition-all relative"
          style={{ width: `${percent}%` }}
        >
          <span className="text-white text-xs absolute top-1/2 -translate-y-1/2 right-3">
            {percent}%
          </span>
        </div>
      </div>

      <div className="flex flex-row justify-between w-full">
        <p className="text-default-blue text-lg font-bold">{raised} ლარი</p>
        <p className="text-black text-lg font-bold">{goal}-დან</p>
      </div>
    </div>
  );
};

export default ProgressBarWithLabel;
