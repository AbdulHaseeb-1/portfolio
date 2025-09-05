import clsx from "clsx";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { useExpanded } from "@/contexts/expand-provider";

type ProfileCardProps = {
  index: number;
  name: string;
  role: string;
  tagline?: string;
  image: string;
};

export default function ProfileCard({
  index,
  name = "Abdul Haseeb",
  role = "Full Stack Engineer",
  tagline = "Ideas → Systems → Impact",
  image = "/image-2.png",
}: ProfileCardProps) {
  const { collapse, expanded } = useExpanded();
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      onClick={() => collapse(index)}
      className={clsx(
        "relative h-full flex flex-col lg:flex-row lg:items-center gap-6 w-full p-5 rounded-2xl overflow-hidden"
      )}
    >
      {/* Avatar Trigger */}
      <Dialog>
        <DialogTrigger asChild>
          <div className="relative z-50 flex-shrink-0 w-28 h-28 sm:w-40 sm:h-40 rounded-xl overflow-hidden cursor-pointer group">
            <img
              src={image}
              alt={name}
              loading="eager"
              className="w-full h-full  rounded-full border object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 mix-blend-overlay animate-pulse pointer-events-none" />
          </div>
        </DialogTrigger>

        {/* Modal */}
        <DialogContent className="p-0 max-w-[90vw] max-h-[85vh] flex items-center justify-center">
          <DialogClose className="absolute right-3 top-3 text-white hover:text-neutral-300">
            <X className="w-6 h-6" />
          </DialogClose>
          <motion.img
            src={image}
            alt={name}
            initial={{ opacity: 0.7 }}
            animate={{ opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="max-w-full max-h-[80vh] rounded-lg shadow-lg"
          />
        </DialogContent>
      </Dialog>

      {/* Text Content */}
      <div className="flex flex-col text-left">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-primary">
          {name}
        </h2>
        <p className="text-sm sm:text-base text-neutral-400">{role}</p>
        {tagline && (
          <p className="mt-2 text-xs sm:text-sm text-neutral-400 leading-relaxed">
            <span className="font-medium">{tagline}</span>
            <br />
            <span>Doing things right. Doing the right thing. That’s it.</span>
          </p>
        )}
      </div>
    </motion.div>
  );
}
