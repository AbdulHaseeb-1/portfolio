import { useExpanded } from "@/contexts/expand-provider";
import clsx from "clsx";
import { useState, useEffect } from "react";

type Stats = {
  experience: number;
  projects: number;
  clients: number;
  satisfaction: number;
};

export default function StatsCard({ index }: { index: number }) {
  const { collapse } = useExpanded();
  const finalStats: Stats = {
    experience: 3,
    projects: 25,
    clients: 12,
    satisfaction: 98,
  };
  const [animatedStats, setAnimatedStats] = useState<Stats>(finalStats);

  const statsConfig = [
    {
      key: "experience",
      value: finalStats.experience,
      color: "amber",
      suffix: "+",
      title: "Years",
      subtitle: "Experience",
      gradient: "from-amber-500 to-orange-500",
    },
    {
      key: "projects",
      value: finalStats.projects,
      color: "green",
      suffix: "+",
      title: "Projects",
      subtitle: "Completed",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      key: "clients",
      value: finalStats.clients,
      color: "blue",
      suffix: "+",
      title: "Happy",
      subtitle: "Clients",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      key: "satisfaction",
      value: finalStats.satisfaction,
      color: "purple",
      suffix: "%",
      title: "Client",
      subtitle: "Satisfaction",
      gradient: "from-neutral-500 to-neutral-500",
    },
  ];

  useEffect(() => {
    const duration = 2000,
      steps = 60,
      stepDuration = duration / steps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const progress = Math.min(step / steps, 1);
      const eased = 1 - Math.pow(1 - progress, 4);

      setAnimatedStats(
        Object.fromEntries(
          Object.entries(finalStats).map(([k, v]) => [k, Math.floor(v * eased)])
        ) as Stats
      );

      if (progress >= 1) {
        clearInterval(timer);
        setAnimatedStats(finalStats);
      }
    }, stepDuration);

    return () => clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      onClick={() => collapse(index)}
      className={clsx(
        "relative rounded-xl p-4 sm:p-6 text-white flex flex-col gap-4 w-full h-full transition-all duration-300 hover:shadow-2xl  border  hover:border-neutral-700/50 overflow-hidden group",
    
      )}
    >
      <div className="relative z-10 flex-1 grid grid-cols-2 md:grid-cols-4 gap-3">
        {statsConfig.map(({ key, suffix, title, subtitle }) => {
          const statKey = key as keyof Stats;
          return (
            <div
              key={key}
              className=" dark:bg-neutral-900 bg-gradient-to-br from-neutral-800/5 to-neutral-900/5 rounded-lg p-4 flex flex-col items-center justify-center text-center border-neutral-700/30  transition-all duration-300"
            >
              <div
                className={`text-2xl sm:text-3xl font-bold text-primary-foreground/60 mb-1`}
              >
                {animatedStats[statKey]}
                {suffix}
              </div>
              <div className="text-xs text-neutral-400 dark:text-neutral-500 font-medium">
                {title}
              </div>
              <div className="text-xs dark:text-neutral-400 text-neutral-500">
                {subtitle}
              </div>
              {/* <div className="w-full h-1 bg-neutral-700/50 rounded-full mt-2 overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r ${gradient} rounded-full transition-all duration-2000 ease-out`}
                    style={{
                      width: `${
                        (animatedStats[statKey] / finalStats[statKey]) * 100
                      }%`,
                    }}
                  />
                </div> */}
            </div>
          );
        })}
      </div>
    </div>
  );
}
