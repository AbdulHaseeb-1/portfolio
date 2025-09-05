import React, { useMemo, memo } from "react";
import {
  Code,
  Database,
  Cloud,
  Smartphone,
  Monitor,
  GitBranch,
  Settings,
  Globe,
  Cpu,
  Layers,
  Brain,
  SquareStack,
  // LucideIcon,
} from "lucide-react";
import clsx from "clsx";
import { colorScheme } from "@/lib/styles";

/**
 * Performance notes:
 * - No Framer Motion (overhead is unnecessary for a one-time fade).
 * - No backdrop-blur or stacked shadows.
 * - Positions and SVG lines computed once via useMemo.
 * - Hover effects via CSS classes; no rerenders on hover.
 * - `contain` and `transform-gpu` to keep the compositor happy.
 */

type SkillSetCardProps = {
  size?: number; // overall graphic size (px). default 180
  radius?: number; // orbit radius (px). default 70
  titleLeft?: React.ReactNode;
};

const ICONS = [
  Code,
  Database,
  Cloud,
  Smartphone,
  Monitor,
  GitBranch,
  Settings,
  Globe,
  Cpu,
  Layers,
];

const IconBadge = memo(function IconBadge({
  Icon,
}: {
  Icon: React.ElementType;
}) {
  return (
    <div
      className={clsx(
        "p-1.5 rounded-md  group-hover:border-primary/30 transition-colors pointer-events-none"
      )}
    >
      <Icon className="h-3.5 w-3.5 text-neutral-500 dark:text-neutral-400 group-hover:text-primary/90 dark:group-hover:text-primary/90 transition-colors " />
    </div>
  );
});

export default function SkillSetCard({
  size = 180,
  radius = 70,
  titleLeft,
}: SkillSetCardProps) {
  const center = size / 2;

  // Precompute polar layout once
  const layout = useMemo(() => {
    const angles = ICONS.map((_, i) => (i / ICONS.length) * 2 * Math.PI);
    const points = angles.map((a) => ({
      angleDeg: (a * 180) / Math.PI,
      x: center + radius * Math.cos(a),
      y: center + radius * Math.sin(a),
    }));
    return { points, angles };
  }, [center, radius]);

  // Precompute SVG lines once
  const lines = useMemo(
    () =>
      layout.points.map((p, i) => (
        <line
          key={`ln-${i}`}
          x1={center}
          y1={center}
          x2={p.x}
          y2={p.y}
          className="stroke-black/10 dark:stroke-white/30 group-hover:stroke-primary/40 dark:group-hover:stroke-primary/40 transition-colors"
          strokeWidth="1"
        />
      )),
    [layout.points, center]
  );

  // Precompute icon nodes once with CSS transforms only
  const orbiters = useMemo(
    () =>
      layout.points.map((_, i) => {
        const Icon = ICONS[i];
        // rotate(container) -> translateX(radius) -> rotate(-container) to keep icon upright
        const angle = (i / ICONS.length) * 360;
        return (
          <div
            key={`orb-${i}`}
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
            style={{
              transform: `rotate(${angle}deg) translateX(${radius}px) rotate(-${angle}deg)`,
            }}
          >
            <IconBadge Icon={Icon} />
          </div>
        );
      }),
    [layout.points, radius]
  );

  return (
    <div
      className={clsx(
        "relative w-full h-48 lg:h-56 flex items-center justify-between",
        " rounded-2xl border  transition-transform duration-300 group",
        " hover:scale-[1.01] hover:border-primary/30 overflow-hidden px-5 will-change-transform contain-layout contain-paint",
        colorScheme.dark.background,
        colorScheme.light.background
      )}
    >
      {/* Left: Text */}
      <div className="flex-1 h-full py-6 flex justify-end flex-col select-none gap-2">
        <p className="text-[10px] sm:text-xs text-neutral-500">
          {"Tech I know about"}
        </p>
        {titleLeft ? (
          titleLeft
        ) : (
          <h2 className="text-3xl font-medium leading-tight">
            <span className="text-primary">Skill</span>
            <span className="text-primary-foreground ml-2">Set</span>
          </h2>
        )}
      </div>

      {/* Right: Brain + Icons + Lines */}
      <div
        className="relative flex-shrink-0"
        style={{ width: size, height: size }}
      >
        {/* SVG Lines */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none "
          viewBox={`0 0 ${size} ${size}`}
          aria-hidden
        >
          {lines}
        </svg>

        {/* Orbiting Icons (static layout, compositor handles transforms) */}
        <div className="absolute inset-0 transform-gpu will-change-transform">
          {orbiters}
        </div>

        {/* Center Brain */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex items-center justify-center p-2 rounded-full">
            <Brain className="h-6 w-6 text-primary bg-neutral-200 dark:bg-black rounded-full " />
          </div>
        </div>
      </div>

      <SquareStack className="absolute bottom-3 right-3 h-4 w-4 sm:h-5 sm:w-5 text-neutral-500 group-hover:text-primary transition-colors" />

      {/* Optional: subtle spin on hover handled by GPU, not React */}
      <style>{`
        .group:hover .transform-gpu { animation: spin-slow 6s linear infinite; }
        @keyframes spin-slow { to { transform: rotate(360deg); } }
      `}</style>
    </div>
  );
}
