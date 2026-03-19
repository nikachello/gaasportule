const Loading = () => {
  return (
    <div className="flex flex-col gap-5 p-4">
      {/* Header skeleton */}
      <div className="h-8 w-48 bg-muted rounded-2xl animate-pulse" />

      {/* Card skeletons */}
      {[1, 2, 3].map((i) => (
        <div key={i} className="rounded-3xl overflow-hidden shadow-xl">
          <div className="w-full aspect-[3/4] bg-muted animate-pulse" />
          <div className="p-4 space-y-3">
            <div className="h-4 w-24 bg-muted animate-pulse rounded-full" />
            <div className="h-5 w-full bg-muted animate-pulse rounded-xl" />
            <div className="h-3 w-full bg-muted animate-pulse rounded-full" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Loading;
