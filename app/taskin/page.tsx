import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import {
  CaseCopy,
  CaseHero,
  CaseList,
  CaseMeta,
  CasePage,
  OtherProjects,
} from "@/components/case-study";
import { TaskinSystem } from "@/components/taskin-system";

export const metadata: Metadata = {
  title: "Taşkın Bakery — design system",
  description:
    "A shared design system for Taşkın Bakery: color, type, and components used across the live menu, locations, catering, and story.",
};

export default function TaskinPage() {
  return (
    <CasePage>
      <CaseHero
        title="taskin"
        image="/images/taskin/hero.jpg"
        alt="Taşkın Bakery homepage with the maroon wordmark, serif headline, red menu button, and a photograph of dough and simit"
      />

      <div className="px-5 md:px-10">
        <section className="mt-16">
          <p className="text-base text-cream-soft">Project Overview</p>
          <h2 className="case-type mt-4 text-cream">
            A design system for Taşkın Bakery, built so every page of the site
            shares one voice.
          </h2>
          <CaseMeta
            items={[
              { label: "Project Type", value: "brand, web" },
              { label: "My Role", value: "product design engineer" },
              { label: "Year", value: "2026" },
              { label: "Client", value: "Taşkın Bakery" },
            ]}
          />
        </section>

        <section className="mt-16 md:mt-24">
          <p className="text-base text-cream-soft">Problem</p>
          <h2 className="case-type mt-3 text-cream">
            The site had to stay consistent across a menu, three locations,
            catering, wholesale, and the story.
          </h2>
          <CaseCopy>
            <p>
              Each of those pages repeats the same decisions: the page color,
              the maroon wordmark, the red action, the headline, and the
              buttons. Left on their own, those decisions drift.
            </p>
          </CaseCopy>
        </section>

        <section className="mt-16 md:mt-24">
          <p className="text-base text-cream-soft">The system</p>
          <h2 className="case-type mt-3 text-cream">
            Named tokens, then the pieces the site actually uses.
          </h2>
          <CaseCopy>
            <p>
              These are the values from the live site. The swatches, type, and
              buttons below are rendered from that system.
            </p>
          </CaseCopy>
          <TaskinSystem />
        </section>

        <section className="mt-16 md:mt-24">
          <p className="text-base text-cream-soft">How it was made</p>
          <h2 className="case-type mt-3 text-cream">
            Three steps, then the same pieces on every page.
          </h2>
          <div className="mt-8">
            <h3 className="case-type text-cream">1. Name the repeated decisions</h3>
            <CaseList
              items={[
                "Listed what every page needed: background, maroon text, red actions, cream surfaces, a shared border, and open or coming-soon states.",
                "Turned those into tokens such as --taskin-bg, --taskin-maroon, and --taskin-red, so a color lives in one place.",
              ]}
            />
          </div>
          <div className="mt-12">
            <h3 className="case-type text-cream">2. Give each type a job</h3>
            <CaseList
              items={[
                "DM Serif Display carries the headlines. Italic is reserved for the red emphasis, as in rising in dough.",
                "DM Sans is the interface face for navigation, buttons, and body copy.",
                "DM Mono names the menu categories, such as Breads. Figtree is the face for the short red statements.",
              ]}
            />
          </div>
          <div className="mt-12">
            <h3 className="case-type text-cream">3. Build the pieces from the tokens</h3>
            <CaseList
              items={[
                "Primary and secondary buttons, the open-now chip, cards, and navigation all read those variables. Actions and photographs share a 20px radius.",
                "The same pieces are what the homepage, menu, locations, catering, and wholesale use. The live site is the system in use.",
              ]}
            />
          </div>
          <Button
            asChild
            className="mt-10 h-auto rounded-full bg-cream-pill px-5 py-2.5 text-sm font-medium text-ink hover:bg-cream"
          >
            <a href="https://www.taskinbakery.com" target="_blank" rel="noreferrer">
              View the live site
            </a>
          </Button>
        </section>
      </div>

      <OtherProjects current="taskin" />
    </CasePage>
  );
}
