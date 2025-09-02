import { Moon, Sun } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useTheme } from "@/contexts/theme-provider";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      aria-label="theme-toggler"
      className="bg-neutral-50 text-black dark:text-neutral-50 dark:bg-neutral-950 hover:bg-white transition-none"
      size={"icon"}
      onClick={() => {
        setTheme(theme == "dark" ? "light" : "dark");
      }}
    >
      {theme != "dark" ? <Sun /> : <Moon />}
    </Button>
  );
}
