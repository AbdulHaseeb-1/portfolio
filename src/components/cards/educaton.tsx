import { BookOpen, SquareStack, } from "lucide-react";
import { motion } from "framer-motion";
import clsx from "clsx";
import { colorScheme } from "@/lib/styles";

type InfoCardProps = {
  title?: string;
  subtitle?: string;
  previews?: string[]; // micro-stats / preview hints
};

export default function EducationCard({
  title = "Education",
  subtitle = "What I know",
  // previews = ["B.Sc. Computer Science", "2+ Certifications", "Ongoing Learning"],
}: InfoCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={clsx("relative  rounded-lg p-4 sm:p-6 text-primary-foreground flex flex-col justify-between  w-full h-full transition  group",colorScheme.dark.background,colorScheme.light.background,colorScheme.borders,colorScheme.shadow)}
    >
      {/* Top line + icon */}
      <div className="absolute w-[80%] flex items-center top-3 left-0">
        <div className="w-full border-t border-neutral-700"></div>
        <BookOpen strokeWidth={"1px"} className="h-10 w-10 -ml-1 text-neutral-500 group-hover:text-primary transition-colors" />
      </div>

      {/* Text content */}
      <div className="flex flex-col justify-end h-full gap-2">
        <p className="text-[10px] sm:text-xs text-neutral-500">{subtitle}</p>
        <h2 className="text-xl md:text-3xl font-normal leading-tight">{title}</h2>
      </div>

      {/* Expand icon bottom-right */}
      <SquareStack className="absolute bottom-3 right-3 h-4 w-4 sm:h-5 sm:w-5 text-neutral-500 group-hover:text-primary transition-colors" />
    </motion.div>
  );
}
