import {   MessageCircleCodeIcon,  SquareStack } from "lucide-react";
import { motion } from "framer-motion";
import clsx from "clsx";
import { colorScheme } from "@/lib/styles";
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
      className={clsx("relative border group hover:border-primary/30  rounded-lg  p-4 sm:p-6 text-primary flex flex-col justify-between  w-full h-full  hover:shadow-lg transition-colors",colorScheme.dark.background,colorScheme.light.background)}
    >
      {/* Top line + icon */}
      <div dir="rtl" className="absolute w-[40%] flex items-center top-3 right-0">
        <div className="w-full border-t border-neutral-500"></div>
        <MessageCircleCodeIcon strokeWidth={"1px"}  className="h-12 w-12 mt-0 -ml-1 text-neutral-500 group-hover:text-primary" />
      </div>

      {/* Text content */}
      <div className="flex flex-col  justify-end h-full leading-loose">
        <p className="absolute top-3 text-[10px] sm:text-xs text-neutral-500">{subtitle}</p>
     <div className="flex gap-3 items-end">
        <h2 className="text-4xl md:text-3xl font-normal leading-tight text-primary-foreground">Let's</h2>
     </div>
        <h2 className="text-4xl md:text-3xl font-normal leading-tight text-primary-foreground">
          {title } <span className="text-primary">Deal</span>
        </h2>
      </div>

      {/* Expand icon bottom-right */}
      <SquareStack className="absolute bottom-3 right-3 h-4 w-4 sm:h-5 sm:w-5 text-neutral-500 group-hover:text-primary" />
    </motion.div>
  );
}
