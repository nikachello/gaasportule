import FinishedCollecting from "@/components/platform/home/collections/finished-collecting";
import HelloGuest from "@/components/platform/home/hello-guest";
import OpenCollectings from "@/components/platform/home/open-collectings";
import { getCities } from "@/lib/repositories/city.repository";
import { getCollections } from "@/lib/repositories/collection.repository";
import { getSports } from "@/lib/repositories/sport.repository";

const Page = async () => {
  const [collections, cities, sports] = await Promise.all([
    getCollections(),
    getCities(),
    getSports(),
  ]);
  return (
    <div className="space-y-5">
      <HelloGuest />
      <FinishedCollecting />
      <OpenCollectings
        collections={collections}
        cities={cities}
        sports={sports}
      />
    </div>
  );
};

export default Page;
