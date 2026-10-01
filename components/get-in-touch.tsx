import { BrainBadge } from "@/components/brain-badge";
import { site } from "@/lib/site";

export function GetInTouch() {
  return (
    <section
      id="start-a-project"
      className="scroll-mt-20 px-5 pb-10 pt-24 md:px-10 md:pt-36"
      aria-labelledby="get-in-touch-heading"
    >
      <h2 id="get-in-touch-heading" className="sr-only">
        get in touch
      </h2>
      <a
        href={site.mailto}
        className="mx-auto flex max-w-[1280px] flex-col items-center justify-center gap-6 text-cream md:flex-row md:gap-10"
      >
        <span className="font-bold lowercase leading-none tracking-[-0.06em] text-[clamp(3.5rem,12vw,9rem)]">
          get in
        </span>
        <BrainBadge className="size-20 md:size-28" />
        <span className="font-bold lowercase leading-none tracking-[-0.06em] text-[clamp(3.5rem,12vw,9rem)]">
          touch
        </span>
      </a>
    </section>
  );
}
