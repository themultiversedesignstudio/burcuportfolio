import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/site";

export function ProjectCard({
  project,
  heading = "h2",
}: {
  project: Project;
  heading?: "h2" | "h3";
}) {
  const Heading = heading;

  return (
    <article>
      <Link href={project.href} className="group block">
        <div className="overflow-hidden rounded-[28px] bg-stage">
          <Image
            src={project.hero}
            alt={project.heroAlt}
            width={2048}
            height={1365}
            className="h-auto w-full object-cover transition duration-500 group-hover:scale-[1.015]"
            sizes="(min-width: 1200px) 1280px, 100vw"
          />
        </div>
        <Heading className="mt-6 text-[28px] font-medium tracking-tight text-cream md:text-[32px]">
          {project.title}
        </Heading>
        <p className="mt-2 max-w-3xl text-[15px] leading-7 text-cream md:text-base">
          {project.types} {project.blurb}
        </p>
      </Link>
    </article>
  );
}
