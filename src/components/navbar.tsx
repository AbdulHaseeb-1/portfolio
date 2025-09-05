import { Play, Pause, Maximize2, Minimize2 } from "lucide-react";
import { useUI } from "@/contexts/ui-provider";
import { ModeToggle } from "./ui/moodToggle";
import { useExpanded } from "@/contexts/expand-provider";

export default function Navbar() {
  const { animations, setAnimations } = useUI();
  const { expanded, setExpanded } = useExpanded();

  return (
    <div className="flex justify-between items-center px-4 w-full h-12 ">
      {/* Left branding */}
      <span className="font-medium text-sm text-primary">Abdul Haseeb</span>

      {/* Right controls */}
      <div className="flex gap-2">
        {/* Toggle Animations */}
        <button
          onClick={() => setAnimations(!animations)}
          title={animations ? "Disable Animations" : "Enable Animations"}
          className="p-2 rounded-md hover:bg-neutral-200 dark:hover:bg-neutral-800 transition"
        >
          {animations ? (
            <Pause className="h-4 w-4 text-neutral-600 dark:text-neutral-300" />
          ) : (
            <Play className="h-4 w-4 text-neutral-600 dark:text-neutral-300" />
          )}
        </button>

        {/* Expand All */}
        <button
          onClick={() => {
            setExpanded(!expanded);
          }}
          title={expanded ? "Collapse All" : "Expand All"}
          className="p-2 rounded-md hover:bg-neutral-200 dark:hover:bg-neutral-800 transition"
        >
          {expanded ? (
            <Minimize2 className="h-4 w-4 text-neutral-600 dark:text-neutral-300" />
          ) : (
            <Maximize2 className="h-4 w-4 text-neutral-600 dark:text-neutral-300" />
          )}
        </button>

        <ModeToggle />
      </div>
    </div>
  );
}
