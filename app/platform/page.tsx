import FinishedCollecting from "@/components/platform/home/finished-collecting";
import HelloGuest from "@/components/platform/home/hello-guest";
import OpenCollectings from "@/components/platform/home/open-collectings";

const Page = () => {
  return (
    <>
      <HelloGuest />
      <FinishedCollecting />
      <div className="mb-5" />
      <OpenCollectings />
    </>
  );
};

export default Page;
