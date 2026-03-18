"use client";

import { Trophy, Medal } from "lucide-react";

const mockRankings = [
  { id: "1", name: "გიორგი მ.", amount: 1200, avatar: null },
  { id: "2", name: "ნინო კ.", amount: 980, avatar: null },
  { id: "3", name: "დავით ლ.", amount: 750, avatar: null },
  { id: "4", name: "მარიამ ბ.", amount: 620, avatar: null },
  { id: "5", name: "ლუკა ჯ.", amount: 540, avatar: null },
  { id: "6", name: "სოფო გ.", amount: 430, avatar: null },
  { id: "7", name: "ანა ტ.", amount: 310, avatar: null },
  { id: "8", name: "ზურა მ.", amount: 280, avatar: null },
];

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

const Page = () => {
  return (
    <div className="flex flex-col min-h-screen p-4 pb-10 space-y-4">
      {/* Header */}
      <h1 className="font-bold text-2xl text-center">რეიტინგი</h1>
      {/* Top 3 podium */}
      <div className="flex items-end justify-center gap-3 mb-8">
        {/* 2nd */}
        <div className="flex flex-col items-center gap-2">
          <div className="w-14 h-14 rounded-full bg-muted flex items-center justify-center overflow-hidden border-2 border-gray-300">
            <span className="text-lg font-bold text-muted-foreground">
              {mockRankings[1].name[0]}
            </span>
          </div>
          <p className="text-xs font-semibold">{mockRankings[1].name}</p>
          <p className="text-xs text-muted-foreground">
            {mockRankings[1].amount} ₾
          </p>
          <div className="w-20 h-16 bg-gray-100 rounded-t-2xl flex items-center justify-center">
            <Medal className="w-5 h-5 text-gray-400" />
          </div>
        </div>

        {/* 1st */}
        <div className="flex flex-col items-center gap-2">
          <div className="w-16 h-16 rounded-full bg-yellow-50 flex items-center justify-center overflow-hidden border-2 border-yellow-400">
            <span className="text-xl font-bold text-yellow-600">
              {mockRankings[0].name[0]}
            </span>
          </div>
          <p className="text-xs font-semibold">{mockRankings[0].name}</p>
          <p className="text-xs text-muted-foreground">
            {mockRankings[0].amount} ₾
          </p>
          <div className="w-20 h-24 bg-yellow-50 rounded-t-2xl flex items-center justify-center">
            <Trophy className="w-6 h-6 text-yellow-400" />
          </div>
        </div>

        {/* 3rd */}
        <div className="flex flex-col items-center gap-2">
          <div className="w-14 h-14 rounded-full bg-muted flex items-center justify-center overflow-hidden border-2 border-amber-600">
            <span className="text-lg font-bold text-muted-foreground">
              {mockRankings[2].name[0]}
            </span>
          </div>
          <p className="text-xs font-semibold">{mockRankings[2].name}</p>
          <p className="text-xs text-muted-foreground">
            {mockRankings[2].amount} ₾
          </p>
          <div className="w-20 h-10 bg-amber-50 rounded-t-2xl flex items-center justify-center">
            <Medal className="w-5 h-5 text-amber-600" />
          </div>
        </div>
      </div>

      {/* Full list */}
      <div className="flex flex-col gap-3">
        {mockRankings.map((user, index) => (
          <div
            key={user.id}
            className="flex items-center gap-4 bg-muted rounded-2xl px-4 py-3"
          >
            <div className="w-6 flex items-center justify-center shrink-0">
              {rankIcon(index)}
            </div>
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0 border border-black/5">
              <span className="text-sm font-bold text-muted-foreground">
                {user.name[0]}
              </span>
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
