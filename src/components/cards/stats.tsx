import { useState, useEffect } from "react";

export default function StatsCard() {
  const [animatedStats, setAnimatedStats] = useState({
    experience: 0,
    projects: 0,
    clients: 0,
    satisfaction: 0,
  });

  const finalStats = {
    experience: 3,
    projects: 25,
    clients: 12,
    satisfaction: 98,
  };

  // Animate numbers on mount
  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const progress = Math.min(currentStep / steps, 1);

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);

      setAnimatedStats({
        experience: Math.floor(finalStats.experience * easeOutQuart),
        projects: Math.floor(finalStats.projects * easeOutQuart),
        clients: Math.floor(finalStats.clients * easeOutQuart),
        satisfaction: Math.floor(finalStats.satisfaction * easeOutQuart),
      });

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
      className="relative     bg-gradient-to-br from-neutral-950/80 via-black/70 to-neutral-900/80 rounded-xl 
                    p-4 sm:p-6 text-white flex flex-col gap-4 w-full h-full lg:h-48
                    hover:shadow-2xl hover:shadow-amber-500/10 transition-all duration-300 
                    border border-neutral-800/50 hover:border-neutral-700/50 
                    overflow-hidden group "
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-blue-500/5 to-transparent rounded-full blur-2xl" />
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-purple-500/5 to-transparent rounded-full blur-3xl" />

      {/* Stats Grid */}
      <div className="relative z-10 flex-1 grid  grid-cols-2 md:grid-cols-4 gap-3">
        {/* Experience Card */}
        <div
          className="bg-gradient-to-br from-neutral-800/40 to-neutral-900/60 bg-no  backdrop-blur-2xl rounded-lg p-4 
                        flex flex-col items-center justify-center text-center
                        hover:from-neutral-700/40 hover:to-neutral-800/60 transition-all duration-300
                        border border-neutral-700/30 hover:border-neutral-600/50"
        >
          <div className="text-2xl sm:text-3xl font-bold text-amber-400 mb-1">
            {animatedStats.experience}+
          </div>
          <div className="text-xs text-neutral-300 font-medium">Years</div>
          <div className="text-xs text-neutral-400">Experience</div>

          {/* Progress bar */}
          <div className="w-full h-1 bg-neutral-700/50 rounded-full mt-2 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-amber-500 to-orange-500 rounded-full transition-all duration-2000 ease-out"
              style={{
                width: `${
                  (animatedStats.experience / finalStats.experience) * 100
                }%`,
              }}
            />
          </div>
        </div>

        {/* Projects Card */}
        <div
          className="bg-gradient-to-br from-neutral-800/40 to-neutral-900/60 rounded-lg p-4 
                        flex flex-col items-center justify-center text-center
                        hover:from-neutral-700/40 hover:to-neutral-800/60 transition-all duration-300
                        border border-neutral-700/30 hover:border-neutral-600/50"
        >
          <div className="text-2xl sm:text-3xl font-bold text-green-400 mb-1">
            {animatedStats.projects}+
          </div>
          <div className="text-xs text-neutral-300 font-medium">Projects</div>
          <div className="text-xs text-neutral-400">Completed</div>

          {/* Progress bar */}
          <div className="w-full h-1 bg-neutral-700/50 rounded-full mt-2 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-green-500 to-emerald-500 rounded-full transition-all duration-2000 ease-out"
              style={{
                width: `${
                  (animatedStats.projects / finalStats.projects) * 100
                }%`,
              }}
            />
          </div>
        </div>

        {/* Clients Card */}
        <div
          className="bg-gradient-to-br from-neutral-800/40 to-neutral-900/60 rounded-lg p-4 
                        flex flex-col items-center justify-center text-center
                        hover:from-neutral-700/40 hover:to-neutral-800/60 transition-all duration-300
                        border border-neutral-700/30 hover:border-neutral-600/50"
        >
          <div className="text-2xl sm:text-3xl font-bold text-blue-400 mb-1">
            {animatedStats.clients}+
          </div>
          <div className="text-xs text-neutral-300 font-medium">Happy</div>
          <div className="text-xs text-neutral-400">Clients</div>

          {/* Progress bar */}
          <div className="w-full h-1 bg-neutral-700/50 rounded-full mt-2 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full transition-all duration-2000 ease-out"
              style={{
                width: `${(animatedStats.clients / finalStats.clients) * 100}%`,
              }}
            />
          </div>
        </div>

        {/* Satisfaction Card */}
        <div
          className="bg-gradient-to-br from-neutral-800/40 to-neutral-900/60 rounded-lg p-4 
                        flex flex-col items-center justify-center text-center
                        hover:from-neutral-700/40 hover:to-neutral-800/60 transition-all duration-300
                        border border-neutral-700/30 hover:border-neutral-600/50"
        >
          <div className="text-2xl sm:text-3xl font-bold text-purple-400 mb-1">
            {animatedStats.satisfaction}%
          </div>
          <div className="text-xs text-neutral-300 font-medium">Client</div>
          <div className="text-xs text-neutral-400">Satisfaction</div>

          {/* Progress bar */}
          <div className="w-full h-1 bg-neutral-700/50 rounded-full mt-2 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-2000 ease-out"
              style={{
                width: `${
                  (animatedStats.satisfaction / finalStats.satisfaction) * 100
                }%`,
              }}
            />
          </div>
        </div>
      </div>

      {/* Expand icon */}

      {/* Hover effect overlay */}
      {/* <div className="absolute inset-0 bg-gradient-to-br from-amber-500/0 to-orange-500/0 
                      group-hover:from-amber-500/5 group-hover:to-orange-500/5 
                      rounded-xl transition-all duration-300" /> */}
    </div>
  );
}
