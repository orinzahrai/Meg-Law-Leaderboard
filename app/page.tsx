'use client';

import { useEffect, useState } from "react";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Crown } from "lucide-react";

const mockData = [
  { name: "Alex G.", points: 134, avatar: "🧑‍⚖️" },
  { name: "Jamie L.", points: 121, avatar: "👩‍💼" },
  { name: "Chris T.", points: 113, avatar: "👨‍💼" },
  { name: "Taylor R.", points: 108, avatar: "👩‍⚖️" },
  { name: "Morgan D.", points: 102, avatar: "👨‍⚖️" },
];

export default function Leaderboard() {
  const [data, setData] = useState(mockData);

  useEffect(() => {
    const interval = setInterval(() => {
      setData((prevData) =>
        [...prevData]
          .map((item) => ({
            ...item,
            points: item.points + Math.floor(Math.random() * 5),
          }))
          .sort((a, b) => b.points - a.points)
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-6 bg-gradient-to-r from-indigo-900 via-indigo-700 to-indigo-900 min-h-screen text-white">
      <h1 className="text-4xl font-bold text-center mb-8">⚖️ Case Manager Clash: Live Leaderboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((item, index) => (
          <div
            key={item.name}
            className={`${
              index === 0 ? "bg-yellow-300 text-black" : "bg-white/10 text-white"
            } border-2 border-white shadow-xl rounded-2xl p-4 animate-fade-in`}
          >
            <div className="flex flex-col items-center gap-2">
              <div className="text-5xl">{item.avatar}</div>
              <h2 className="text-xl font-semibold">{item.name}</h2>
              <p className="text-lg">{item.points} points</p>
              <Progress value={(item.points / data[0].points) * 100} className="w-full h-2" />
              {index === 0 && (
                <Badge className="mt-2 text-sm flex items-center gap-1">
                  <Crown className="w-4 h-4" /> Leader
                </Badge>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}