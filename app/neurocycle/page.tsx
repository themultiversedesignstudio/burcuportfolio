import type { Metadata } from "next";
import {
  CaseCopy,
  CaseFigure,
  CaseHero,
  CaseList,
  CaseMeta,
  CasePage,
  CaseSection,
  OtherProjects,
  PhoneStrip,
} from "@/components/case-study";

export const metadata: Metadata = {
  title: "Neurocycle — onboarding redesign",
  description:
    "End-to-end redesign of Dr. Leaf’s Neurocycle program: clearer onboarding, a modernized Brain-Ee character, and a 40% drop in user error.",
};

const finalPhones = [
  { src: "/images/neurocycle/sokjhWduoul6dkvsqhxk3KJNJe0.png", alt: "Neurocycle welcome screen with Brain-Ee holding a phone" },
  { src: "/images/neurocycle/GQiXCrvCKyCr7GV32Sodu8TbM.png", alt: "Neurocycle sign-up form on iPhone" },
  { src: "/images/neurocycle/KQYoxEjsb8JfzZgREHZqs0XuW8.png", alt: "Birthday question screen in Neurocycle onboarding" },
  { src: "/images/neurocycle/9UXMfVPROK2dOhUgAyYh7s4pWQk.png", alt: "Country selection screen in Neurocycle onboarding" },
  { src: "/images/neurocycle/dNgq1TDie5JoHpujvTYw10hamyQ.png", alt: "App discovery question in Neurocycle onboarding" },
];

export default function NeurocyclePage() {
  return (
    <CasePage>
      <CaseHero
        title="neurocycle"
        image="/images/neurocycle/hero.png"
        alt="Neurocycle Day 1 home on a MacBook and iPhone, with the pink Brain-Ee character"
      />

      <div className="px-5 md:px-10">
        <section className="mt-16">
          <p className="text-base text-cream-soft">Project Overview</p>
          <h2 className="case-type mt-4 text-cream">
            Led the end-to-end redesign of Dr. Leaf’s 5-step program into a
            structured, gamified experience designed to support lasting behavior
            change and reinforce positive daily habits.
          </h2>
          <CaseMeta
            items={[
              { label: "Project Type", value: "b2b, b2c" },
              { label: "My Role", value: "head of product design" },
              { label: "Year", value: "2024" },
            ]}
          />
        </section>

        <CaseSection
          label="Problem"
          heading="Lack of transparency during onboarding created early user abandonment"
        >
          <CaseCopy>
            <p>
              User research surverying 1000+ users revealed that many users felt
              uncertain about subscription expectations and onboarding
              requirements before experiencing the product&apos;s value.
              Confusing free trial language, lengthy account creation, and a 20+
              minute introductory video created friction that contributed to
              early abandonment.
            </p>
          </CaseCopy>
        </CaseSection>

        <CaseSection
          label="High-Level Solution"
          heading="Redesigned the onboarding experience to reduce friction, increase trust, and improve early user engagement."
        />

        <div className="mt-16">
          <h3 className="case-type text-pink">
            1. Optimized account creation to increase onboarding conversion
          </h3>
          <CaseList
            items={[
              "Implemented quick sign-up options that allowed users to bypass repetitive email and password entry.",
              "Expected to increase onboarding completion and account creation rates by reducing unnecessary friction.",
            ]}
          />
          <CaseFigure
            src="/images/neurocycle/7aIw9mUZIU5YX51q6w8iNoKysY.png"
            alt="BEFORE and AFTER Neurocycle account creation: long email form versus Apple, Google, and Facebook sign-in"
          />
        </div>

        <div className="mt-16">
          <h3 className="case-type text-pink">
            2. Improved free trial transparency to build user trust
          </h3>
          <CaseList
            items={[
              "Redesigned the free trial experience with clearer UX copy, transparent expectations, and more intuitive guidance.",
              "Added a reminder option to give users greater control and confidence before committing.",
              "Expected to reduce onboarding drop-off, increase trial sign-ups, and address confusion identified in user survey responses.",
            ]}
          />
          <CaseFigure
            src="/images/neurocycle/VtyqfEj7KG9DoHAudExntda4G0.png"
            alt="BEFORE and AFTER Neurocycle subscription screens, replacing a dense paywall with a reminder and calendar start"
          />
        </div>

        <div className="mt-16">
          <h3 className="case-type text-pink">
            3. Replaced lengthy introductions with an optional engaging exercise
          </h3>
          <CaseList
            items={[
              "Reimagined the legacy 20+ minute introduction video as a guided Brain Prep exercise based on Dr. Leaf's methodology.",
              "Allowed users to actively engage with the product from the start rather than passively consuming content.",
              "Expected to improve onboarding completion, increase early engagement, and help users better understand the program's value.",
            ]}
          />
          <CaseFigure
            src="/images/neurocycle/Mvx10k6KPDL1XrYucQs6PU39C4.png"
            alt="BEFORE video intro screens versus AFTER Brain Prep exercise screens with Brain-Ee"
          />
        </div>

        <CaseSection
          label="User Research"
          heading="User research: Overview"
        >
          <CaseCopy>
            <p>
              To better understand friction points in the legacy experience, the
              team analyzed 1,000+ user survey responses, usability findings,
              and behavioral patterns across the 63-day program. survey data was
              first organized and categorized in Excel, then further analyzed in
              R Studio.
            </p>
            <p>Key demographic findings included:</p>
          </CaseCopy>
          <dl className="mt-8 grid max-w-xl grid-cols-3 gap-6 text-cream">
            <div>
              <dt className="text-4xl font-bold tracking-tight">86%</dt>
              <dd className="mt-1 text-base text-cream-soft">female</dd>
            </div>
            <div>
              <dt className="text-4xl font-bold tracking-tight">12%</dt>
              <dd className="mt-1 text-base text-cream-soft">male</dd>
            </div>
            <div>
              <dt className="text-4xl font-bold tracking-tight">2%</dt>
              <dd className="mt-1 text-base text-cream-soft">nonbinary</dd>
            </div>
          </dl>
        </CaseSection>

        <CaseSection
          label="User Survey Key Finding"
          heading="Onboarding confusion and unclear expectation"
        >
          <CaseCopy>
            <p>
              Approximately 58% of users reported confusion around onboarding
              expectations, free trial messaging, and overall program structure.
            </p>
          </CaseCopy>
        </CaseSection>

        <CaseSection
          label="Competitive Analysis"
          heading="Bandaid solution"
        >
          <CaseCopy>
            <p>
              Although Dr. Leaf’s research-based methodology is differentiated
              from other mental wellness products, platforms like Headspace
              established a strong benchmark for emotionally supportive design,
              simplicity, and user retention—while primarily focusing on
              short-term symptom relief rather than long-term behavioral
              transformation.
            </p>
          </CaseCopy>
          <CaseFigure
            src="/images/neurocycle/6XqKjh7r7tonFXUL7hbH1HVk8I.jpg"
            alt="Headspace brand lockup used as a competitive reference"
          />
        </CaseSection>

        <CaseSection label="Branding" heading="Character Modernization">
          <CaseCopy>
            <p>
              Dr. Leaf previously introduced a character named Brain-Ee in her
              children’s book, Coloring with Brain-Ee and Friends. As part of
              the app redesign, I identified an opportunity to modernize the
              character to better align with the updated product experience,
              visual direction, and emotional tone of the new app.
            </p>
            <p>
              The redesign reinforced the connection between mind field
              (represented by the circle), thoughts (the clouds), and the body
              (the brain with a body), visually communicating how each element
              works together.
            </p>
          </CaseCopy>
          <CaseFigure
            src="/images/neurocycle/OVNEroy8bqoBS33bmqOwEPC5N0.png"
            alt="BEFORE Brain-Ee plush character and AFTER Neuro brain character labeled mind field, thoughts, and body"
          />
        </CaseSection>

        <section className="mt-16 md:mt-24">
          <p className="text-base text-cream-soft">Color</p>
          <h2 className="mt-3 text-[clamp(1.7rem,4vw,3.1rem)] font-medium tracking-tight text-pink">
            Primary Colors
          </h2>
          <CaseCopy>
            <p>
              The primary colors were taken using the characters colors as well
              as the stakeholders request of lime green aligning with her
              existing brands.
            </p>
          </CaseCopy>
          <CaseFigure
            src="/images/neurocycle/wTLXfu6ldP4ZfsvO1DWWbOgNG7U.png"
            alt="Neurocycle color system: pinks, lime greens, black, and white with RGB values"
          />
        </section>

        <section className="mt-16 md:mt-24">
          <h2 className="text-[clamp(1.8rem,4vw,3.2rem)] font-medium tracking-tight text-cream">
            Final Design
          </h2>
          <PhoneStrip images={finalPhones} />
        </section>
      </div>

      <OtherProjects current="neurocycle" />
    </CasePage>
  );
}
