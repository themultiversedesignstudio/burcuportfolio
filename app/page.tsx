import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/project-card";
import { projects, site } from "@/lib/site";

export default function HomePage() {
  return (
    <div className="mx-auto w-full max-w-[1440px]">
      <section className="px-5 pb-10 pt-8 md:px-10 md:pb-16 md:pt-12">
        <h1 className="font-bold lowercase leading-[0.86] tracking-[-0.06em] text-cream text-[clamp(3.8rem,18vw,14.125rem)] md:whitespace-nowrap md:text-[12.6vw]">
          burcu{" "}
          <br className="md:hidden" />
          payidarol
        </h1>
        <p className="mt-8 max-w-[34rem] text-left text-[15px] leading-6 text-cream md:ml-auto md:mt-6 md:text-right md:text-base">
          {site.tagline}
        </p>
      </section>

      <section id="work" className="space-y-16 pt-4 md:space-y-24">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} bleed />
        ))}
      </section>

      <section className="px-5 pt-24 md:px-10 md:pt-36">
        <h2 className="max-w-5xl text-[clamp(1.8rem,4.4vw,3.4rem)] font-medium leading-[1.12] tracking-tight text-cream">
          I&apos;m Burcu, a NYC-based Product Designer specializing in end-to-end
          product design, from user research and strategy to execution and
          delivery.
        </h2>

        <div className="mt-16 grid gap-12 md:grid-cols-3 md:items-start">
          <Image
            src="/images/home/portrait.jpg"
            alt="Burcu Payidarol, a young woman with dark hair in a black sweater, facing the camera on a white background"
            width={900}
            height={1200}
            className="h-auto w-full rounded-[28px] object-cover"
          />

          <div>
            <h3 className="text-sm text-cream-soft">why work with me</h3>
            <p className="mt-4 text-[15px] leading-7 text-cream">
              I believe the best products come from true collaboration. When we
              work together, you&apos;re not just getting a designer; you&apos;re
              getting a strategic partner who takes the time to understand your
              business, your users, and your goals. I&apos;m highly
              collaborative, vocal in advocating for strong product decisions,
              and deeply invested in helping companies grow through shaping
              product strategy, leading design conversations, contributing to
              pitch decks, and communicating ideas that resonate with both users
              and stakeholders.
            </p>
            <Button
              asChild
              className="mt-8 h-auto rounded-full bg-cream-pill px-5 py-2.5 text-sm font-medium text-ink hover:bg-cream"
            >
              <a href={site.resumeHref} download>
                Download resume
              </a>
            </Button>
          </div>

          <div>
            <h3 className="text-sm text-cream-soft">when I&apos;m not designing</h3>
            <p className="mt-4 text-[15px] leading-7 text-cream">
              You&apos;ll find me exploring NYC&apos;s coffee scene, getting lost
              in a good book, traveling to new places, or analyzing
              opportunities in the stock market.
            </p>
            <p className="mt-10 text-sm text-cream-soft">Currently reading</p>
            <figure className="mt-3">
              <Image
                src="/images/home/east-of-eden.jpg"
                alt="East of Eden by John Steinbeck book cover"
                width={400}
                height={600}
                className="h-auto w-full max-w-[240px] object-cover"
              />
              <figcaption className="mt-2 text-sm text-cream-soft">
                East of Eden — John Steinbeck
              </figcaption>
            </figure>
          </div>
        </div>
      </section>
    </div>
  );
}
