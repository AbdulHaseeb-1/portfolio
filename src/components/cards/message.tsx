import { useExpanded } from "@/contexts/expand-provider";
import clsx from "clsx";

export default function MessageCard({ index }: { index: number }) {
  const { collapse } = useExpanded();
  return (
    <div onClick={() => collapse(index)}>
      <p
        className={clsx(
          "flex flex-row items-center justify-center  border   rounded-full text-neutral-600 dark:text-neutral-400 text-center overflow-hidden p-4 gap-1 w-full text-xs"
        )}
      >
        <span className=" text-primary bg-clip-text font-semibold">Web</span>{" "}
        <span className="text-primary">[</span>
        Frontend + Backend + DevOps + Automation{" "}
        <span className="text-primary">]</span>
      </p>
    </div>
  );
}
