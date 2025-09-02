import {   MessageCircleCodeIcon,  SquareStack } from "lucide-react";
import { motion } from "framer-motion";
type InfoCardProps = {
  title?: string;
  subtitle?: string;
};

export default function ContactsCard({
  title = "make a ",
  subtitle = "Want to colaborate?",
}: InfoCardProps) {
  return (
    <motion.div
        initial={{
        opacity:0
    }}
    animate={{
        opacity:1
    }}
      transition={{ duration: 1 }}
      className="relative border   bg-gradient-to-br from-neutral-950/80 via-black/70 to-neutral-900/80 rounded-lg 
      p-4 sm:p-6 text-primary flex flex-col justify-between 
       w-full h-full transition hover:shadow-lg transition-none"
    >
      {/* Top line + icon */}
      <div dir="rtl" className="absolute w-[40%] flex items-center top-3 right-0">
        <div className="w-full border-t border-neutral-500"></div>
        <MessageCircleCodeIcon strokeWidth={"1px"}  className="h-12 w-12 mt-0 -ml-1 text-neutral-500" />
      </div>

      {/* Text content */}
      <div className="flex flex-col  justify-end h-full leading-loose">
        <p className="absolute top-3 text-[10px] sm:text-xs text-neutral-500">{subtitle}</p>
     <div className="flex gap-3 items-end">
        <h2 className="text-4xl md:text-3xl font-normal leading-tight text-white">Let's</h2>
     </div>
        <h2 className="text-4xl md:text-3xl font-normal leading-tight text-white">
          {title } <span className="text-primary">Deal</span>
        </h2>
      </div>

      {/* Expand icon bottom-right */}
      <SquareStack className="absolute bottom-3 right-3 h-4 w-4 sm:h-5 sm:w-5 text-neutral-500" />
    </motion.div>
  );
}
