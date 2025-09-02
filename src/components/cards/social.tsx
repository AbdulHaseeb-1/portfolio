import { Sparkles, SquareStack } from "lucide-react";
import { motion } from "framer-motion";

type InfoCardProps = {
  title?: string;
  subtitle?: string;
};

export default function SocialCard({
  title = "Social",
  subtitle = "Stay with me",
}: InfoCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative border hover:border-primary/30 bg-gradient-to-br from-neutral-950/80 via-black/70 to-neutral-900/80 
        rounded-lg p-4 sm:p-6 text-white flex flex-col justify-between 
        w-full h-full overflow-hidden transition hover:shadow-lg group"
    >
      {/* Top line + icon */}
      <div dir="rtl" className="absolute w-[80%] flex items-center top-3 right-0">
        <div className="w-full border-t border-neutral-500"></div>
        <Sparkles strokeWidth={"1px"} className="h-10 w-10 -ml-1 text-neutral-500 group-hover:text-primary transition-colors" />
      </div>

      {/* Background social icons (dimmed, decorative) */}
      {/* <Github className="absolute -left-4 -top-4 h-16 w-16 text-neutral-700/20" />
      <Twitter className="absolute -right-6 top-10 h-20 w-20 text-neutral-700/15" />
      <Linkedin className="absolute -left-6 bottom-6 h-20 w-20 text-neutral-700/15" /> */}

      {/* Text content */}
      <div className="flex flex-col justify-end h-full gap-1 relative z-10">
        <p className="text-[10px] sm:text-xs text-neutral-500">{subtitle}</p>
        <h2 className="text-xl md:text-3xl font-normal leading-tight">
          {title}
        </h2>
      </div>

      {/* Expand icon bottom-right */}
       <SquareStack className="absolute bottom-3 right-3 h-4 w-4 sm:h-5 sm:w-5 text-neutral-500 group-hover:text-primary transition-colors" />
  </motion.div>
  );
}
