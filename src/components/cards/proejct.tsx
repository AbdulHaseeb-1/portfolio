import { Layers, SquareStack } from "lucide-react";
import { motion } from "framer-motion";
import clsx from "clsx";
import { colorScheme } from "@/lib/styles";

type InfoCardProps = {
  title?: string;
  subtitle?: string;
  previews?: string[]; // micro-stats / preview hints
};

export default function ProjectCard({
  title = "Projects",
  subtitle = "Showcase",
  // previews = ["10+ Completed", "2 In Progress", "Open Source"],
}: InfoCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={clsx("relative border hover:border-primary/30  rounded-lg p-4 sm:p-6 text-white flex flex-col justify-between  w-full h-full transition hover:shadow-lg hover:shadow-primary/10 group",colorScheme.dark.background,colorScheme.light.background)}
    >
      {/* Top line + icon */}
      <div dir="rtl" className="absolute w-[80%] flex items-center top-3 right-0">
        <div className="w-full border-t border-neutral-700"></div>
        <Layers
          strokeWidth={"1px"}
          className="h-10 w-10 -mr-1 text-neutral-500 group-hover:text-primary transition-colors"
        />
      </div>

      {/* Text content */}
      <div className="flex flex-col justify-end h-full gap-2">
        <p className="text-[10px] sm:text-xs text-neutral-500">{subtitle}</p>
        <h2 className="text-xl md:text-3xl font-normal leading-tight text-primary-foreground">{title}</h2>
      </div>

      {/* Expand icon bottom-right */}
      <SquareStack className="absolute bottom-3 right-3 h-4 w-4 sm:h-5 sm:w-5 text-neutral-500 group-hover:text-primary transition-colors" />
    </motion.div>
  );
}
