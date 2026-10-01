import { cn } from "@/lib/utils";

export function BrainBadge({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "relative inline-block shrink-0 overflow-hidden rounded-full bg-[#ffd54a]",
        className,
      )}
      aria-hidden
    >
      <video
        src="/images/shared/brain-badge.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="h-full w-full object-cover"
      />
    </span>
  );
}
