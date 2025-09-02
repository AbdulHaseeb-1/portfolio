// import React from "react";
import { motion } from "framer-motion";
import {  Cpu,} from "lucide-react";

type ProfileCardProps = {
  name: string;
  role: string;
  tagline?: string;
  highlight?: { [key: string]: string };
  image: string;
};

export default function ProfileCard({
  name = "Abdul Haseeb",
  role = "Full Stack Engineer",
  tagline = "Turning complex ideas into sleek, functional systems.",
  highlight = { frontend: "text-amber-400", backend: "text-purple-400" },
  image = "/profile.webp",
}: ProfileCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      className="relative flex flex-row items-center gap-6 w-full p-5 rounded-2xl
  overflow-hidden"
    >
      {/* Background Grid Overlay */}
      {/* <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.05)_0%,transparent_70%)] pointer-events-none" /> */}
      {/* <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_95%,rgba(0,255,255,0.05)_100%)] animate-[pulse_6s_infinite]" /> */}

      {/* Avatar as holographic display */}
      <div className="relative flex-shrink-0 w-28 h-28 sm:w-40 sm:h-40 rounded-xl overflow-hidden border ">
        <img
          src={image}
          alt={name}
          loading="eager"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0  mix-blend-overlay animate-pulse" />
      </div>

      {/* Text Content */}
      <div className="flex flex-col text-left">

        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-primary ">
          {name}
        </h2>
        <p className="text-sm sm:text-base text-neutral-400 flex items-center gap-1">
          <Cpu className="w-4 h-4 text-primary" /> {role}
        </p>

        {tagline && (
          <p className="mt-2 text-xs sm:text-sm text-neutral-300 leading-relaxed">
            {tagline.split(" ").map((word, i) => {
              const clean = word.replace(/[^a-zA-Z]/g, "");
              if (highlight && highlight[clean]) {
                return (
                  <span
                    key={i}
                    className={`${highlight[clean]} font-medium drop-shadow-[0_0_4px_rgba(0,255,255,0.6)]`}
                  >
                    {word}{" "}
                  </span>
                );
              }
              return word + " ";
            })}
          </p>
        )}

        {/* Futuristic Indicators */}
        {/* <div className="mt-3 flex flex-wrap  gap-2">
          <span className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-primary border border-primary text-[10px] uppercase text-amber-300">
            <Gauge className="w-3 h-3" /> Speed
          </span>
          <span className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-purple-500/10 border border-purple-400/30 text-[10px] uppercase text-purple-300">
            <Zap className="w-3 h-3" /> Power
          </span>
          <span className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-primary border border-primary text-[10px] uppercase text-amber-300">
            <Sparkles className="w-3 h-3" /> Vision
          </span>
        </div> */}
      </div>
    </motion.div>
  );
}
