import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/site";

export function ProjectCard({
  project,
  heading = "h2",
  bleed = false,
}: {
  project: Project;
  heading?: "h2" | "h3";
  bleed?: boolean;
}) {
  const Heading = heading;

  return (
    <article>
      <Link href={project.href} className="group block">
        <div
          className={
            bleed
              ? "overflow-hidden bg-stage"
              : "overflow-hidden rounded-[28px] bg-stage"
          }
        >
          <Image
            src={project.hero}
            alt={project.heroAlt}
            width={2048}
            height={1365}
            className="mx-auto h-auto w-full max-w-full object-contain transition duration-500 group-hover:scale-[1.015] md:max-h-[460px] md:w-auto"
            sizes="(min-width: 768px) 920px, 100vw"
          />
        </div>
        <div className={bleed ? "px-5 md:px-10" : ""}>
          <Heading className="mt-6 text-[28px] font-medium tracking-tight text-[#9c9a95] md:text-[32px]">
            {project.title}
          </Heading>
          <p className="text-copy mt-3 max-w-5xl">
            {project.types} {project.blurb}
          </p>
        </div>
      </Link>
    </article>
  );
}
