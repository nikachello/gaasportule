const Loading = () => {
  return (
    <div className="flex flex-col gap-5 p-4">
      <div className="h-8 w-48 bg-muted rounded-2xl animate-pulse" />
      <div className="h-24 w-full bg-muted rounded-2xl animate-pulse" />
      <div className="h-4 w-32 bg-muted rounded-full animate-pulse" />
      {[1, 2, 3].map((i) => (
        <div
          key={i}
          className="h-16 w-full bg-muted rounded-2xl animate-pulse"
        />
      ))}
    </div>
  );
};

export default Loading;
