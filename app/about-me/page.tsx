import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About me",
  description:
    "NYC-based product designer and founder of Multiverse Design Studio. Experience includes Neurocycle, Despark, and Splyt.",
};

const experience = [
  {
    company: "neurocycle",
    role: "head of product",
    dates: "jan 2024 - now",
    body: "lead end-to-end redesign decreasing user error by 40% and improving App Store ratings from 3.2 to 4.0 and Google Play from 3.0 to 3.8.",
  },
  {
    company: "multiverse design studio",
    role: "founder, product designer",
    dates: "jun 2023 - now",
    body: "design and build live digital products, from design systems and a website-integrated POS to AI-assisted client workflows.",
  },
  {
    company: "despark",
    role: "ux ui designer",
    dates: "apr 2023 - dec 2023",
    body: "Streamline a custom user flow to simplify the process of joining missions, improving user experience by 20%.",
  },
  {
    company: "splyt",
    role: "ux ui designer",
    dates: "apr 2022 - apr 2023",
    body: "co-lead simplifying the user payment splitting processes lead to 30% decrease in user support requests.",
  },
  {
    company: "apple",
    role: "technical specialist",
    dates: "nov 2019 - apr 2022",
    body: "Perform usability assessments identifying potential technical obstacles to an optimal user experience and recommending innovative solutions leading user satisfaction and usability.",
  },
];

export default function AboutPage() {
  return (
    <div className="mx-auto w-full max-w-[1440px] px-5 pb-8 md:px-10">
      <h1 className="pt-8 font-bold lowercase leading-[0.8] tracking-[-0.07em] text-cream text-[clamp(4.2rem,20vw,18.4rem)] md:pt-12">
        about me
      </h1>

      <div className="mt-12 grid items-start gap-12 md:mt-16 md:grid-cols-2">
        <div>
          <p className="text-copy-lg max-w-2xl">
            I&apos;m a product designer and user researcher leading product and
            visual design initiatives for startups and small businesses,
            combining strategy, storytelling, and user experience to drive
            growth.
          </p>
          <p className="text-copy-lg mt-3 max-w-2xl">
            I founded Multiverse Design Studio, where I design and build live
            digital products for clients.
          </p>
          <p className="text-copy-lg mt-3 max-w-2xl">
            I graduated from Rutgers University with a bachelors in ITI and
            Psychology have been designing digital products professionally for
            four years.
          </p>
          <Button
            asChild
            className="mt-10 h-auto rounded-full bg-cream-pill px-5 py-2.5 text-sm font-medium text-ink hover:bg-cream"
          >
            <a href={site.resumeHref} download>
              Download resume
            </a>
          </Button>
        </div>
        <Image
          src="/images/home/portrait.jpg"
          alt="Burcu Payidarol, a young woman with dark hair in a black sweater, facing the camera on a white background"
          width={900}
          height={1200}
          className="h-auto w-full rounded-[28px] object-cover"
          priority
        />
      </div>

      <section
        aria-label="How I work"
        className="relative -mx-5 mt-24 overflow-hidden bg-[#f6f5f2] px-5 py-16 text-[#1c1e22] md:-mx-10 md:mt-36 md:px-12 md:py-24"
      >
        <div className="relative w-fit max-w-full">
          <p className="font-bold lowercase leading-[0.78] tracking-[-0.065em] text-[clamp(4.2rem,18vw,16rem)]">
            research
            <br />
            design
            <br />
            build
            <br />
            lead
            <br />
            ship
          </p>
          <span className="absolute right-[2%] top-[7%] bg-[#d8f6e6] px-3 py-2 text-sm font-medium text-[#3c4f46] shadow-[3px_3px_0_rgba(28,30,34,0.06)] md:px-4 md:py-2.5 md:text-lg">
            UI Design
          </span>
          <span className="absolute bottom-[14%] left-0 bg-[#e3d7fb] px-3 py-2 text-sm font-medium text-[#4d3f63] shadow-[3px_3px_0_rgba(28,30,34,0.06)] md:-left-2 md:px-4 md:py-2.5 md:text-lg">
            UX Research
          </span>
        </div>
      </section>

      <section className="mt-24 md:mt-36">
        <h2 className="font-bold lowercase leading-none tracking-[-0.06em] text-cream text-[clamp(2.6rem,8vw,6rem)]">
          my experience
        </h2>
        <ul className="mt-12 divide-y divide-cream/15 border-y border-cream/15">
          {experience.map((job) => (
            <li
              key={job.company}
              className="grid gap-3 py-8 md:grid-cols-[0.7fr_1.4fr_0.6fr] md:items-start md:gap-8"
            >
              <div>
                <p className="text-[1.25rem] text-cream">{job.company}</p>
                <p className="mt-1 text-base text-cream-soft">{job.role}</p>
              </div>
              <p className="text-copy">{job.body}</p>
              <p className="text-base text-cream-soft md:text-right">
                {job.dates}
              </p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
