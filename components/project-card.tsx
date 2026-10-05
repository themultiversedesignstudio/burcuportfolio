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
    <article className={bleed ? "px-5 md:px-10" : undefined}>
      <Link
        href={project.href}
        className={
          bleed
            ? "group mx-auto block max-w-4xl"
            : "group block max-w-[40rem]"
        }
      >
        <div className="overflow-hidden rounded-[28px]">
          <Image
            src={project.hero}
            alt={project.heroAlt}
            width={2048}
            height={1365}
            className="h-auto w-full object-cover transition duration-500 group-hover:scale-[1.015]"
            sizes={bleed ? "(min-width: 768px) 896px, 100vw" : "(min-width: 768px) 640px, 100vw"}
          />
        </div>
        <Heading className="mt-5 text-[28px] font-medium tracking-tight text-[#9c9a95] md:text-[32px]">
          {project.title}
        </Heading>
        <p className="text-copy mt-3">
          {project.types} {project.blurb}
        </p>
      </Link>
    </article>
  );
}
