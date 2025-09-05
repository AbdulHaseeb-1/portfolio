import { MessageCircleReply, SquareStack } from "lucide-react";
import { motion } from "framer-motion";
import clsx from "clsx";
import { colorScheme } from "@/lib/styles";
type InfoCardProps = {
  title?: string;
  subtitle?: string;
};

export default function TestemonialsCard({
  title = "Testimonials",
  subtitle = "What they say?",
}: InfoCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={clsx("relative border hover:border-primary/30   rounded-lg  p-4 sm:p-6  flex flex-col justify-between w-full h-full transition hover:shadow-lg transition-none group",colorScheme.dark.background,colorScheme.light.background)}
    >
      {/* Top line + icon */}
      <div className="absolute w-[80%] flex items-center top-3 left-0">
        <div className="w-full border-t border-neutral-500"></div>
        <MessageCircleReply
          strokeWidth={"1px"}
    className="h-10 w-10 -ml-1 text-neutral-500 group-hover:text-primary transition-colors"
        />
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
