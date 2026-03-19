const Loading = () => {
  return (
    <div className="w-full">
      <div className="w-full h-[40vh] bg-muted animate-pulse" />
      <div className="relative -mt-8 bg-white rounded-t-3xl px-5 pt-6 pb-10 space-y-6">
        <div className="space-y-2 flex flex-col items-center">
          <div className="h-7 w-64 bg-muted rounded-xl animate-pulse" />
          <div className="h-4 w-48 bg-muted rounded-full animate-pulse" />
        </div>
        <div className="h-3 w-full bg-muted rounded-full animate-pulse" />
        <div className="h-24 w-full bg-muted rounded-2xl animate-pulse" />
        <div className="h-32 w-full bg-muted rounded-2xl animate-pulse" />
      </div>
    </div>
  );
};

export default Loading;
