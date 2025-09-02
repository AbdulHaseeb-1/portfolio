export default function MessageCard() {
  return (
    <p className="flex flex-row items-center justify-center  border   bg-gradient-to-br from-neutral-950/80 via-black/70 to-neutral-900/80 rounded-full text-neutral-400 text-center overflow-hidden p-4 gap-1 w-full text-xs">
      <span className=" text-primary bg-clip-text font-semibold">
        Web
      </span>{" "}
      <span className="text-primary">[</span>
      Frontend + Backend + DevOps + Automation  <span className="text-primary">]</span>
    </p>
  );
}
