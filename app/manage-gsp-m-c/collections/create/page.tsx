import { getCities } from "@/lib/repositories/city.repository";
import { getSports } from "@/lib/repositories/sport.repository";
import { CreateCollectionForm } from "./create-collection-form";

const CreateCollectionPage = async () => {
  const [cities, sports] = await Promise.all([getCities(), getSports()]);

  return (
    <div className="space-y-6 max-w-2xl">
      <h1 className="text-2xl font-bold">ახალი ქველმოქმედება</h1>
      <CreateCollectionForm cities={cities} sports={sports} />
    </div>
  );
};

export default CreateCollectionPage;
