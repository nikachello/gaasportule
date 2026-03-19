import { Trophy, Medal } from "lucide-react";
import { getRankings } from "@/lib/repositories/ranking.repository";
import Image from "next/image";

const rankIcon = (index: number) => {
  if (index === 0) return <Trophy className="w-5 h-5 text-yellow-400" />;
  if (index === 1) return <Medal className="w-5 h-5 text-gray-400" />;
  if (index === 2) return <Medal className="w-5 h-5 text-amber-600" />;
  return (
    <span className="text-sm font-bold text-muted-foreground w-5 text-center">
      {index + 1}
    </span>
  );
};

const Page = async () => {
  const rawRankings = await getRankings();

  const rankings = rawRankings
    .map((user) => ({
      id: user.id,
      name: user.name,
      image: user.image,
      amount: user.contributions.reduce((sum, c) => sum + c.amount, 0),
    }))
    .sort((a, b) => b.amount - a.amount);

  if (rankings.length === 0) {
    return (
      <div className="flex flex-col min-h-screen p-4 items-center justify-center">
        <p className="text-muted-foreground text-sm">ჯერ არ არის მონაცემები</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen p-4 pb-10 space-y-4">
      <h1 className="font-bold text-2xl text-center">რეიტინგი</h1>

      {/* Top 3 podium */}
      {rankings.length >= 3 && (
        <div className="flex items-end justify-center gap-3 mb-8">
          {/* 2nd */}
          <div className="flex flex-col items-center gap-2">
            <div className="w-14 h-14 rounded-full bg-muted flex items-center justify-center overflow-hidden border-2 border-gray-300">
              {rankings[1].image ? (
                <Image
                  src={rankings[1].image}
                  alt={rankings[1].name}
                  width={56}
                  height={56}
                  className="object-cover"
                />
              ) : (
                <span className="text-lg font-bold text-muted-foreground">
                  {rankings[1].name[0]}
                </span>
              )}
            </div>
            <p className="text-xs font-semibold">{rankings[1].name}</p>
            <p className="text-xs text-muted-foreground">
              {rankings[1].amount} ₾
            </p>
            <div className="w-20 h-16 bg-gray-100 rounded-t-2xl flex items-center justify-center">
              <Medal className="w-5 h-5 text-gray-400" />
            </div>
          </div>

          {/* 1st */}
          <div className="flex flex-col items-center gap-2">
            <div className="w-16 h-16 rounded-full bg-yellow-50 flex items-center justify-center overflow-hidden border-2 border-yellow-400">
              {rankings[0].image ? (
                <Image
                  src={rankings[0].image}
                  alt={rankings[0].name}
                  width={64}
                  height={64}
                  className="object-cover"
                />
              ) : (
                <span className="text-xl font-bold text-yellow-600">
                  {rankings[0].name[0]}
                </span>
              )}
            </div>
            <p className="text-xs font-semibold">{rankings[0].name}</p>
            <p className="text-xs text-muted-foreground">
              {rankings[0].amount} ₾
            </p>
            <div className="w-20 h-24 bg-yellow-50 rounded-t-2xl flex items-center justify-center">
              <Trophy className="w-6 h-6 text-yellow-400" />
            </div>
          </div>

          {/* 3rd */}
          <div className="flex flex-col items-center gap-2">
            <div className="w-14 h-14 rounded-full bg-muted flex items-center justify-center overflow-hidden border-2 border-amber-600">
              {rankings[2].image ? (
                <Image
                  src={rankings[2].image}
                  alt={rankings[2].name}
                  width={56}
                  height={56}
                  className="object-cover"
                />
              ) : (
                <span className="text-lg font-bold text-muted-foreground">
                  {rankings[2].name[0]}
                </span>
              )}
            </div>
            <p className="text-xs font-semibold">{rankings[2].name}</p>
            <p className="text-xs text-muted-foreground">
              {rankings[2].amount} ₾
            </p>
            <div className="w-20 h-10 bg-amber-50 rounded-t-2xl flex items-center justify-center">
              <Medal className="w-5 h-5 text-amber-600" />
            </div>
          </div>
        </div>
      )}

      {/* Full list */}
      <div className="flex flex-col gap-3">
        {rankings.map((user, index) => (
          <div
            key={user.id}
            className="flex items-center gap-4 bg-muted rounded-2xl px-4 py-3"
          >
            <div className="w-6 flex items-center justify-center shrink-0">
              {rankIcon(index)}
            </div>
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0 border border-black/5 overflow-hidden">
              {user.image ? (
                <Image
                  src={user.image}
                  alt={user.name}
                  width={40}
                  height={40}
                  className="object-cover"
                />
              ) : (
                <span className="text-sm font-bold text-muted-foreground">
                  {user.name[0]}
                </span>
              )}
            </div>
            <p className="flex-1 text-sm font-semibold">{user.name}</p>
            <p className="text-sm font-bold text-default-blue">
              {user.amount} ₾
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
