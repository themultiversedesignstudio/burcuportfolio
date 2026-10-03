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
} from "@/components/case-study";

export const metadata: Metadata = {
  title: "Despark — mission-joining flow",
  description:
    "UX/UI for Despark, a user-research platform connecting companies with target users. Simplified mission journeys and a 20% UX lift.",
};

export default function DesparkPage() {
  return (
    <CasePage>
      <CaseHero
        title="despark"
        image="/images/despark/hero.png"
        alt="Despark All Missions dashboard on a laptop"
      />

      <div className="px-5 md:px-10">
        <section className="mt-16">
          <p className="text-base text-cream-soft">Project Overview</p>
          <h2 className="case-type mt-4 text-cream">
            Web platform for user research that connects companies with target
            users and provides them with cryto currency as incentives.
          </h2>
          <CaseMeta
            items={[
              { label: "Project Type", value: "b2b, b2c, sAAS" },
              { label: "My Role", value: "ux ui designer" },
              { label: "Year", value: "2023" },
              { label: "Users", value: "30,000" },
            ]}
          />
        </section>

        <CaseSection
          label="Problem"
          heading="Poorly Structured Mission Journeys Obstructed Navigation and Task Completion"
          accent="purple"
        >
          <CaseCopy>
            <p>Through user surveys and feedback, we recognized these user pain points:</p>
          </CaseCopy>
          <CaseList
            items={[
              "Navigation between mission details and application steps felt disjointed, leading to user confusion and drop-offs.",
              "Profile editing was unavailable, preventing users from updating or personalizing their information efficiently.",
              "The boosters page had not yet been designed, leaving users without access to motivational or progress-based features.",
            ]}
          />
        </CaseSection>

        <CaseSection
          label="High-Level Solution"
          heading="Streamlined User Interactions to Enhance Engagement and Ease of Use"
          accent="purple"
        />

        <div className="mt-16">
          <h3 className="case-type text-purple">
            1. Simplified Mission Interview Experience
          </h3>
          <CaseList
            items={[
              "Reduced friction in the mission journey by simplifying navigation and decision points",
              "Improved overall user efficiency, resulting in a 20% increase in task completion rate",
            ]}
          />
          <CaseFigure
            src="/images/despark/SW6LK9ghoFy4WgVotDHJ0EHyQ.png"
            alt="Despark mission, interview, and schedule screens on three laptops"
          />
        </div>

        <div className="mt-16">
          <h3 className="case-type text-purple">
            2. Enhanced Profile Editing Experience
          </h3>
          <CaseList
            items={[
              "Redesigned the profile editing experience to make updating personal information faster and more intuitive",
              "Increased user eligibility for research missions by encouraging more accurate and complete profiles",
            ]}
          />
          <CaseFigure
            src="/images/despark/z1y92lYeQTsQDPujg66DUYR4KLU.png"
            alt="Despark profile editing screens on two laptops"
          />
        </div>

        <div className="mt-16">
          <h3 className="case-type text-purple">
            3. Boosting User Eligibility & Engagement
          </h3>
          <CaseList
            items={[
              "Designed a boosters experience that guides users to complete targeted profile questionnaires",
              "Drove higher engagement, with users completing 2x more profile actions after interacting with boosters",
            ]}
          />
          <CaseFigure
            src="/images/despark/7IaGaJtiOwAyaAZY6uZ7q8SIGzY.png"
            alt="Despark boosters list and Web3 Experience Booster questionnaire"
          />
        </div>

        <CaseSection
          label="Branding"
          heading="Branding and Style Guide"
          accent="purple"
        >
          <CaseList
            items={[
              "Translated stakeholder preference for a futuristic aesthetic into a cohesive brand direction anchored in a purple-centric color system",
              "Built a scalable design system to standardize UI patterns, improve consistency, and support future product growth",
            ]}
          />
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <CaseFigure
              src="/images/despark/KueNWTCdu5JKfbU3vi83wuZOUY.png"
              alt="Despark branding exploration"
              className="mt-0"
            />
            <CaseFigure
              src="/images/despark/kjX0Ey5bMpKQDdqFeOPO1OrTL4k.png"
              alt="Despark style guide and color system"
              className="mt-0"
            />
          </div>
        </CaseSection>

        <section className="mt-16 md:mt-24">
          <h2 className="text-[clamp(1.8rem,4vw,3.2rem)] font-medium tracking-tight text-cream">
            Final Design
          </h2>
          <div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {[
              ["/images/despark/cqWXE1sfBOTiakN2vD8b3IMu98.png", "Despark dashboard welcome"],
              ["/images/despark/HlbuQL2AsMxGpMtfv58U7lMHI.png", "Despark dashboard with active missions"],
              ["/images/despark/2qimLK87m7ppqIU4MY6ENfa47I.png", "Despark dashboard mission overview"],
              ["/images/despark/zvdcwIVJoB1iMgZmlhyua2f6a2o.png", "Despark edit profile name"],
              ["/images/despark/GLyOV5C9bEV39ptZzkpmNkzH3I.png", "Despark edit profile details"],
              ["/images/despark/MMQuirWSBwFNWVNUqpYcGHCTk.png", "Despark edit profile form"],
              ["/images/despark/ejSDGR7ZKJ7rFeY5tzqF5C1tjXQ.png", "Despark account boosters"],
              ["/images/despark/de3TWZJYQCPx4mfSM9djpNlMxk.png", "Despark Web3 experience booster"],
              ["/images/despark/ysxU1m1DYwWRKMorKgOOy1JeBM.png", "Despark Web3 booster questions"],
              ["/images/despark/mmyA2leK7KKnobViIslSMMiVgGM.png", "Despark Web3 booster completion"],
              ["/images/despark/z35GLza5RJmasFQwm1wCTPArJI.png", "Despark account with completed boosters"],
              ["/images/despark/txae1Bt8s8mZZoTtTTsNmFFHyw.png", "Despark all missions"],
              ["/images/despark/L5b9yyiS8cmclDHU393agYm34Y8.png", "Despark mission overview"],
              ["/images/despark/tqLX5gDSqbmhshDc55GTQBLeXs.png", "Despark interview schedule calendar"],
              ["/images/despark/YqPlvRMC7yGGNWexwXBY8dEOk.png", "Despark schedule confirmation"],
              ["/images/despark/EcEWiMlve29KQ1VVdhkufDY38.png", "Despark mission details"],
            ].map(([src, alt]) => (
              <CaseFigure key={src} src={src} alt={alt} className="mt-0" />
            ))}
          </div>
        </section>

        <section className="mt-16 md:mt-24">
          <h2 className="text-[clamp(1.8rem,4vw,3.2rem)] font-medium tracking-tight text-cream">
            Reflection
          </h2>
          <CaseCopy>
            <p>
              The Despark project was an exciting venture that employed
              innovative technology and a futuristic mindset. It provided me
              with an opportunity to showcase my design skills while deepening
              my understanding of Web3 technologies.
            </p>
          </CaseCopy>
        </section>
      </div>

      <OtherProjects current="despark" />
    </CasePage>
  );
}
