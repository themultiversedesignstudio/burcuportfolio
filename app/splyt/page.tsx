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
  title: "Splyt — group payments",
  description:
    "Co-led redesign of Splyt, a peer-to-peer bill-splitting app, cutting support requests by 30%.",
};

const finalPhones = [
  { src: "/images/splyt/LGRC8Glm3ES5afGZDYRvInYjJo.png", alt: "Splyt review items screen" },
  { src: "/images/splyt/J3erQEJULasNV2RJSMdPM6gcQM.png", alt: "Splyt review items beside the original receipt" },
  { src: "/images/splyt/kFWLt0MhvXELh4UFq6grNclxzF4.png", alt: "Splyt divide this item action" },
  { src: "/images/splyt/WrGfRdCJzKIRgIvAhIblvqgeco.png", alt: "Splyt remove item action" },
  { src: "/images/splyt/KBTVN6oVRweDkSY0iWy9EAdlrGk.png", alt: "Splyt assign or remove people" },
  { src: "/images/splyt/So0MoVxdIs4k7DU6xZi4kkI7PE.png", alt: "Splyt review items with people splitting a line" },
  { src: "/images/splyt/d5yu8pyvqntQz3cryX4zjg6hsc.png", alt: "Splyt create a Splyt confirmation" },
  { src: "/images/splyt/NoIYfgdOfZyg7QCTojMJmMobPk.png", alt: "Splyt selection receipt" },
  { src: "/images/splyt/uH6F9hPENPZRdikc50tTN3K990.png", alt: "Splyt confirm selection dialog" },
  { src: "/images/splyt/XX7HmVo9KtI3T1h4tUDW68qmhs.png", alt: "Splyt participant receipt" },
  { src: "/images/splyt/xVlMB42eAJN1sBF4tdknsbMAAj8.png", alt: "Splyt moderator receipt with paid and pending totals" },
  { src: "/images/splyt/P9cvyMGqbO3NvRZ1yoeAQFONE00.png", alt: "Splyt paid items detail" },
  { src: "/images/splyt/XciIhgGhIPQbtzku4WxCmkvrccQ.png", alt: "Splyt moderator receipt overview" },
  { src: "/images/splyt/OKq4MMVEOL1b9v0yjI4NHwOhSI0.png", alt: "Splyt pending items detail" },
  { src: "/images/splyt/yNhsWVSyQCq8QIIuqxZzTlMbuA.png", alt: "Splyt remind to pay dialog" },
  { src: "/images/splyt/mL8EyX0hrNzbDatDlBeAHe4c91U.png", alt: "Splyt your Splyt participant summary" },
  { src: "/images/splyt/GF9kREBv0eKZTehhHOW1yPEiqk.png", alt: "Splyt itemized your total" },
  { src: "/images/splyt/88B809MgPedR8q2tuY3IKbsx8qk.png", alt: "Splyt choose a way to pay" },
  { src: "/images/splyt/wrZG07RmsOwqvFmMSArQq53vz8.png", alt: "Splyt payment sent confirmation" },
];

export default function SplytPage() {
  return (
    <CasePage>
      <CaseHero
        title="splyt"
        image="/images/splyt/hero.png"
        alt="Three iPhones showing Splyt receipt review, moderator totals, and pending items"
      />

      <div className="px-5 md:px-10">
        <section className="mt-16">
          <p className="text-base text-cream-soft">Project Overview</p>
          <h2 className="case-type mt-4 text-cream">
            a peer-to-peer payment app designed to simplify bill-splitting among
            friends at restaurants.
          </h2>
          <CaseMeta
            items={[
              { label: "Project Type", value: "p2p, b2c" },
              { label: "My Role", value: "co-lead ux ui designer" },
              { label: "Year", value: "2022" },
              { label: "Users", value: "30,000" },
            ]}
          />
        </section>

        <CaseSection
          label="Problem"
          heading="Lack of visibility and control disrupts group payments"
          accent="purple"
        >
          <CaseCopy>
            <p>
              User research—via surveys and interviews—revealed several key pain
              points in the legacy app:
            </p>
          </CaseCopy>
          <CaseList
            items={[
              "No ability to cross-reference the original receipt, leading to uncorrected errors",
              "Delayed payments due to users having to wait until all members were assigned",
              "Limited moderator control over item division and visibility into selections, totals, and payment status",
            ]}
          />
        </CaseSection>

        <CaseSection
          label="High-Level Solution"
          heading="Empowering moderators and streamlining group payments"
          accent="purple"
        />

        <div className="mt-16">
          <h3 className="case-type text-purple">
            1. Enabled moderators to check the original receipt
          </h3>
          <CaseList
            items={[
              "Allowed real-time corrections of misread or misassigned items by Splyt’s scan.",
              "Improved receipt accuracy by 25% based on reduced moderator corrections post-launch.",
            ]}
          />
          <CaseFigure
            src="/images/splyt/0OKIUUXP4vuEGSaP0Z2MhV3rVKo.png"
            alt="Splyt review items next to the original scanned receipt"
          />
        </div>

        <div className="mt-16">
          <h3 className="case-type text-purple">
            2. Introduced asynchronouse payments for faster checkout
          </h3>
          <CaseList
            items={[
              "Reduced friction in group payment scenarios by removing unnecessary dependencies.",
              "Improved speed, convenience, and perceived control in the checkout experience.",
              "Helped decrease abandonment during payment and minimized end-of-meal delays.",
            ]}
          />
          <CaseFigure
            src="/images/splyt/gTj3Pfq7Nmx9BTFXkyTc0o2cHjY.png"
            alt="Splyt participant bill and choose-a-way-to-pay screens"
          />
        </div>

        <div className="mt-16">
          <h3 className="case-type text-purple">
            3. Give moderators full visibility into group activity
          </h3>
          <CaseList
            items={[
              "Reduced the need for manual follow-ups and payment confirmation outside the app.",
              "Helped reduce user drop-off and support requests related to unclear payment status",
            ]}
          />
          <CaseFigure
            src="/images/splyt/RdEAy7oe9Ix8tYHEesAOkSKcu4.png"
            alt="Splyt moderator receipt screens showing paid and pending members"
          />
        </div>

        <CaseSection
          label="Research"
          heading="Competitive analysis: No control"
          accent="purple"
        >
          <CaseCopy>
            <p>
              Splitwise lacks a defined moderator or organizer role, which can
              lead to confusion when one person is managing the bill. Our app
              addresses this by giving moderators control and visibility, making
              group payments more organized and efficient.
            </p>
          </CaseCopy>
        </CaseSection>

        <CaseSection
          label="User research"
          heading="Frustration, time pressure, and limited control: key user pain points"
          accent="purple"
        >
          <CaseCopy>
            <p>
              To understand pain points in the legacy app, the research team
              surveyed 75 users and conducted 6 in-depth interviews. Recurring
              themes included:
            </p>
          </CaseCopy>
          <CaseList
            items={[
              "Frustration with payments and receipts",
              "Time constraints",
              "limited control and transparency in group interactions",
              "Confusion from unclear workflows, and inconsistencies across features.",
            ]}
          />
          <CaseCopy>
            <p>
              These insights directly informed the problem statement and guided
              the design direction.
            </p>
          </CaseCopy>
        </CaseSection>

        <section className="mt-16 md:mt-24">
          <p className="text-base text-cream-soft">User Persona</p>
          <h2 className="mt-3 text-[clamp(1.5rem,3vw,2.2rem)] font-medium text-purple">
            20 years old | Business Major
          </h2>
          <div className="mt-8 grid items-start gap-10 md:grid-cols-[280px_1fr]">
            <CaseFigure
              src="/images/splyt/4HUtgBymUKqjOlqqKr2CkZjUv2g.png"
              alt="Portrait used for the Jordan persona"
              className="mt-0"
            />
            <div>
              <p className="text-base text-cream-soft">user story:</p>
              <p className="case-type mt-4 text-cream">
                Jordan is a busy college student juggling classes, a part-time
                job, and an active social life. He and his friends often go out
                for meals, take weekend trips, and share costs for groceries,
                streaming subscriptions, and Uber rides. He&apos;s the one who
                usually organizes group activities — but hates having to
                constantly remind friends to pay him back.
              </p>
              <p className="mt-8 text-base text-cream-soft">goals:</p>
              <CaseList
                items={[
                  "Split bills easily without awkward reminders.",
                  "Settle debts quickly using integrated payment links (Venmo, Zelle, etc.).",
                  "See a clear summary of who owes what, without doing math.",
                  "Spend smarter by tracking where money goes monthly.",
                  "Keep track of shared expenses in one place.",
                ]}
              />
            </div>
          </div>
        </section>

        <CaseSection
          label="Style Guide and Branding"
          heading="Modernized Brand Identity"
          accent="purple"
        >
          <CaseCopy>
            <p>
              Revamped the brand identity to create a more user-friendly and
              simplified experience while incorporating the stakeholder-provided
              logo into a cohesive visual system.
            </p>
          </CaseCopy>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <CaseFigure
              src="/images/splyt/BOSTAoFFKGfkvJssIx6vMRHNgzA.png"
              alt="Splyt brand identity exploration"
              className="mt-0"
            />
            <CaseFigure
              src="/images/splyt/ePcaToZamsq3ELIzzwurUKldI.png"
              alt="Splyt color and type samples"
              className="mt-0"
            />
          </div>
        </CaseSection>

        <section className="mt-16 md:mt-24">
          <h2 className="text-[clamp(1.8rem,4vw,3.2rem)] font-medium tracking-tight text-cream">
            Final Design
          </h2>
          <PhoneStrip images={finalPhones} />
        </section>

        <section className="mt-16 md:mt-24">
          <h2 className="text-[clamp(1.8rem,4vw,3.2rem)] font-medium tracking-tight text-cream">
            Reflection
          </h2>
          <CaseCopy>
            <p>
              As Co-Lead Designer, I led the team in identifying and executing
              solutions that improved the user experience while meeting business
              objectives. By maintaining open communication with stakeholders
              and clearly articulating design decisions, I built trust, gained
              alignment, and helped move the project forward with confidence.
            </p>
          </CaseCopy>
        </section>
      </div>

      <OtherProjects current="splyt" />
    </CasePage>
  );
}
