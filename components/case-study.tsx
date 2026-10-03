import Image from "next/image";
import type { ReactNode } from "react";
import { ProjectCard } from "@/components/project-card";
import { otherProjects, type Project } from "@/lib/site";
import { cn } from "@/lib/utils";

export function CaseHero({
  title,
  image,
  alt,
}: {
  title: string;
  image: string;
  alt: string;
}) {
  return (
    <header className="pt-10 md:pt-16">
      <h1 className="px-5 text-center font-bold lowercase leading-none tracking-[-0.07em] text-cream text-[clamp(3.4rem,12vw,8.5rem)] md:px-10">
        {title}
      </h1>
      <div className="mt-12 overflow-hidden bg-stage md:mt-16 md:rounded-none">
        <Image
          src={image}
          alt={alt}
          width={2048}
          height={1365}
          priority
          className="mx-auto h-auto w-full max-w-[1440px] object-cover"
          sizes="100vw"
        />
      </div>
    </header>
  );
}

export function CaseMeta({
  items,
}: {
  items: { label: string; value: string }[];
}) {
  return (
    <dl className="mt-10 grid grid-cols-2 gap-6 border-b border-cream/10 pb-10 md:grid-cols-4">
      {items.map((item) => (
        <div key={item.label}>
          <dt className="text-base text-cream-soft">{item.label}</dt>
          <dd className="mt-1 text-[1.125rem] text-cream">{item.value}</dd>
        </div>
      ))}
    </dl>
  );
}

export function CaseSection({
  label,
  heading,
  accent = "pink",
  children,
}: {
  label: string;
  heading: string;
  accent?: "pink" | "purple";
  children?: ReactNode;
}) {
  return (
    <section className="mt-16 md:mt-24">
      <p className="text-base text-cream-soft">{label}</p>
      <h2
        className={cn(
          "mt-3 max-w-5xl text-[clamp(1.7rem,4vw,3.1rem)] font-normal leading-[1.15] tracking-tight",
          accent === "pink" ? "text-pink" : "text-purple",
        )}
      >
        {heading}
      </h2>
      {children}
    </section>
  );
}

export function CaseCopy({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("text-copy mt-5 max-w-5xl space-y-3", className)}>
      {children}
    </div>
  );
}

export function CaseList({ items }: { items: string[] }) {
  return (
    <ul className="text-copy mt-5 max-w-5xl list-disc space-y-2 pl-6">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export function CaseFigure({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <figure className={cn("mt-10 overflow-hidden rounded-[28px] bg-stage", className)}>
      <Image
        src={src}
        alt={alt}
        width={2048}
        height={1600}
        className="h-auto w-full object-cover"
        sizes="(min-width: 1200px) 1280px, 100vw"
      />
    </figure>
  );
}

export function PhoneStrip({
  images,
}: {
  images: { src: string; alt: string }[];
}) {
  return (
    <div className="mt-10 flex gap-4 overflow-x-auto pb-4 md:grid md:grid-cols-5 md:overflow-visible">
      {images.map((image) => (
        <figure
          key={image.src}
          className="min-w-[180px] overflow-hidden rounded-[28px] bg-stage md:min-w-0"
        >
          <Image
            src={image.src}
            alt={image.alt}
            width={1045}
            height={2048}
            className="h-auto w-full object-cover"
            sizes="(min-width: 768px) 20vw, 180px"
          />
        </figure>
      ))}
    </div>
  );
}

export function OtherProjects({ current }: { current: Project["slug"] }) {
  const rest = otherProjects(current);

  return (
    <section className="mt-24 px-5 pb-8 md:px-10">
      <h2 className="mb-10 font-bold lowercase leading-none tracking-[-0.06em] text-cream text-[clamp(2.4rem,7vw,5rem)]">
        other projects
      </h2>
      <div className="grid gap-16 md:grid-cols-2">
        {rest.map((project) => (
          <ProjectCard key={project.slug} project={project} heading="h3" />
        ))}
      </div>
    </section>
  );
}

export function CasePage({ children }: { children: ReactNode }) {
  return (
    <article className="mx-auto w-full max-w-[1440px] pb-8">
      {children}
    </article>
  );
}
