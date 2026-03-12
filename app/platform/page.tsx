import FinishedCollecting from "@/components/platform/home/finished-collecting";
import HelloGuest from "@/components/platform/home/hello-guest";
import OpenCollectings from "@/components/platform/home/open-collectings";

const Page = () => {
  return (
    <div className="space-y-5">
      <HelloGuest />
      <FinishedCollecting />
      <OpenCollectings />
    </div>
  );
};

export default Page;
