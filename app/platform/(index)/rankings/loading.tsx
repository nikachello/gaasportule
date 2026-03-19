const Loading = () => {
  return (
    <div className="flex flex-col gap-5 p-4">
      <div className="h-8 w-32 bg-muted rounded-2xl animate-pulse mx-auto" />

      {/* Podium skeleton */}
      <div className="flex items-end justify-center gap-3 mb-4">
        <div className="flex flex-col items-center gap-2">
          <div className="w-14 h-14 rounded-full bg-muted animate-pulse" />
          <div className="w-20 h-16 bg-muted rounded-t-2xl animate-pulse" />
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="w-16 h-16 rounded-full bg-muted animate-pulse" />
          <div className="w-20 h-24 bg-muted rounded-t-2xl animate-pulse" />
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="w-14 h-14 rounded-full bg-muted animate-pulse" />
          <div className="w-20 h-10 bg-muted rounded-t-2xl animate-pulse" />
        </div>
      </div>

      {/* List skeleton */}
      {[1, 2, 3, 4, 5].map((i) => (
        <div
          key={i}
          className="h-14 w-full bg-muted rounded-2xl animate-pulse"
        />
      ))}
    </div>
  );
};

export default Loading;
