import { SquareStack } from "lucide-react";
import { motion } from "framer-motion";

type InfoCardProps = {
  title?: string;
  subtitle?: string;
  Icon: React.ElementType;
};

export default function EducationCard({
  title,
  subtitle,
  Icon,
}: InfoCardProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{ duration: 1 }}
      className="relative  bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950 rounded-lg 
      p-4 sm:p-6 text-primary flex flex-col justify-between 
       w-full h-full transition hover:shadow-lg transition-none"
    >
      {/* Top line + icon */}
      <div className="absolute w-[80%] flex items-center top-3 left-0">
        <div className="w-full border-t border-neutral-500"></div>
        <Icon
          strokeWidth={"1px"}
          className="h-12 w-12 mt-0 -ml-1 text-neutral-500"
        />
      </div>

      {/* Text content */}
      <div className="flex flex-col  justify-end h-full gap-1">
        <p className="text-[10px] sm:text-xs text-neutral-500">{subtitle}</p>
        <h2 className="text-xl md:text-3xl font-normal leading-tight">
          {title}
        </h2>
      </div>

      {/* Expand icon bottom-right */}
      <SquareStack className="absolute bottom-3 right-3 h-4 w-4 sm:h-5 sm:w-5 text-neutral-500" />
    </motion.div>
  );
}
