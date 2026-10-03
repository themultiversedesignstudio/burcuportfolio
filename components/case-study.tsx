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
      <div className="mt-12 overflow-hidden md:mt-16">
        <Image
          src={image}
          alt={alt}
          width={2048}
          height={1365}
          priority
          className="mx-auto h-auto w-full max-w-full object-contain md:max-h-[460px] md:w-auto"
          sizes="(min-width: 768px) 920px, 100vw"
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
          "case-type mt-3",
          accent === "pink" ? "text-pink" : "text-purple",
        )}
      >
        {heading}
      </h2>
      {children}
    </section>
  );
}

export function CaseCopy({ children }: { children: ReactNode }) {
  return <div className="case-type mt-5 space-y-3 text-cream">{children}</div>;
}

export function CaseList({ items }: { items: string[] }) {
  return (
    <ul className="case-type mt-5 list-disc space-y-2 pl-6 text-cream">
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
    <figure className={cn("mt-10", className)}>
      <Image
        src={src}
        alt={alt}
        width={2048}
        height={1600}
        className="mx-auto h-auto w-full max-w-full rounded-[28px] object-contain md:max-h-[520px] md:w-auto"
        sizes="(min-width: 768px) 960px, 100vw"
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
    <div className="mt-10 grid grid-cols-3 gap-3 sm:grid-cols-4 lg:grid-cols-8">
      {images.map((image) => (
        <figure
          key={image.src}
          className="overflow-hidden rounded-2xl bg-stage"
        >
          <Image
            src={image.src}
            alt={image.alt}
            width={1045}
            height={2048}
            className="h-auto w-full object-contain"
            sizes="(min-width: 1024px) 160px, 30vw"
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
