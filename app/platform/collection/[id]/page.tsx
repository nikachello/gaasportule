import CollectionList from "@/components/platform/home/collections/collection-list";
import ContributorsListDrawer from "@/components/platform/home/collections/contributors-list-drawer";
import ProgressBarWithLabel from "@/components/platform/home/collections/progress-bar-with-label";
import { Separator } from "@/components/ui/separator";
import {
  getCollectionById,
  getSimilarCollections,
} from "@/lib/repositories/collection.repository";
import {
  ArrowRight,
  GalleryVerticalEnd,
  HandCoins,
  Lock,
  ShieldCheck,
} from "lucide-react";
import Image from "next/image";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ id: string }>;
};

const CollectionPage = async ({ params }: Props) => {
  const { id } = await params;

  const collection = await getCollectionById(id);

  if (!collection) return notFound();

  const similarCollections = await getSimilarCollections(
    collection.sportId,
    collection.id
  );

  const contributors = collection.contributions.map((c) => ({
    id: c.id,
    name: c.user.name,
    avatarUrl: c.user.image ?? undefined,
    contributedAmount: c.amount,
  }));

  return (
    <div className="w-full space-y-4">
      {/* Image */}
      <div className="relative w-full h-[40vh]">
        <Image
          src={collection.imageUrl ?? "/images/landing/collectings/1.jpg"}
          fill
          alt={collection.title}
          className="object-cover"
          sizes="100vw"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative -mt-8 bg-white rounded-t-3xl px-5 pt-6 pb-10 space-y-6 shadow-sm">
        {/* Title */}
        <div className="space-y-2 text-center">
          <p className="font-bold text-2xl">{collection.title}</p>
          <p className="text-muted-foreground text-base">
            {collection.description}
          </p>
          <p className="text-sm text-muted-foreground">
            {collection.city.name}
          </p>
        </div>

        {/* Sport tag */}
        <div className="flex justify-center">
          <span className="bg-muted px-4 py-2 rounded-xl text-xs">
            {collection.sport.name}
          </span>
        </div>

        {/* Progress */}
        <ProgressBarWithLabel
          goal={collection.goal}
          raised={collection.raised}
        />

        {/* Contributors card */}
        <div className="rounded-xl bg-muted p-4 space-y-4">
          <ContributorsListDrawer
            contributors={contributors}
            trigger={
              <div className="flex items-center gap-4">
                <HandCoins className="bg-white w-10 h-10 p-2 rounded-lg shrink-0" />
                <div className="flex flex-col w-full">
                  <span className="text-xs text-muted-foreground">
                    უკვე დაეხმარა
                  </span>
                  <span className="font-semibold text-base">
                    {contributors.length} ადამიანი
                  </span>
                </div>
                <ArrowRight className="shrink-0" />
              </div>
            }
          />

          <Separator />

          <div className="flex gap-2 overflow-x-auto no-scrollbar">
            {contributors.slice(-10).map((contributor) => (
              <div
                key={contributor.id}
                className="flex items-center gap-2 bg-white rounded-full px-3 py-1.5 shrink-0"
              >
                <Image
                  src={
                    contributor.avatarUrl ?? "/images/user/default-avatar.png"
                  }
                  alt="User avatar"
                  height={24}
                  width={24}
                  className="rounded-full w-6 h-6 object-cover"
                />
                <span className="text-sm font-medium">
                  + {contributor.contributedAmount}₾
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* How will help */}
        {collection.howWillHelp && (
          <div className="space-y-4">
            <h1 className="text-left font-bold text-lg">როგორ დავეხმარებით</h1>
            <p>{collection.howWillHelp}</p>
          </div>
        )}

        {/* Documents */}
        <div className="bg-muted rounded-2xl p-4 space-y-4">
          <p className="font-bold">დოკუმენტები და ანგარიში</p>
          <p>
            ჩვენ ყოველკვირეულად ვამოწმებთ დასახმარებელი პიროვნების სიტუციას და
            ასევე ვაქვეყნებთ ანგარიშებს თუ რაში იხარჯება თანხა
          </p>
          <div className="flex items-center gap-2">
            <ShieldCheck />
            <p>გადამოწმებული საჭიროება</p>
          </div>
          <div className="flex items-center gap-2">
            <GalleryVerticalEnd />
            <p>სრული გამჭირვალობა</p>
          </div>
          <div className="flex items-center gap-2">
            <Lock />
            <p>დაცული ტრანზაქციები</p>
          </div>
        </div>

        {/* Similar collections */}
        <div className="space-y-4">
          <h1 className="font-bold text-lg">მსგავსი ქველმოქმედებები</h1>
          <CollectionList
            collections={similarCollections}
            cities={similarCollections.map((c) => c.city)}
          />
        </div>
      </div>
    </div>
  );
};

export default CollectionPage;
