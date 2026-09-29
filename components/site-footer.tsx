import Link from "next/link";
import { GetInTouch } from "@/components/get-in-touch";
import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="mt-auto bg-ink text-cream">
      <GetInTouch />
      <div className="mx-auto grid max-w-[1440px] gap-10 px-5 pb-10 pt-16 md:grid-cols-3 md:px-10">
        <div className="space-y-1 text-[15px] leading-7 text-cream">
          <p>
            Email:{" "}
            <a href={site.mailto} className="underline-offset-4 hover:underline">
              {site.email}
            </a>
          </p>
          <p>Based in: {site.location}</p>
          <p>Available for: {site.availability}</p>
        </div>
        <div className="md:justify-self-end">
          <p className="mb-2 text-sm text-cream-soft">pages</p>
          <ul className="space-y-1 text-[15px]">
            <li>
              <Link href="/" className="hover:underline">
                home
              </Link>
            </li>
            <li>
              <Link href="/about-me" className="hover:underline">
                about
              </Link>
            </li>
            <li>
              <Link href="/#work" className="hover:underline">
                work
              </Link>
            </li>
          </ul>
        </div>
        <div className="md:justify-self-end">
          <p className="mb-2 text-sm text-cream-soft">socials</p>
          <ul className="space-y-1 text-[15px]">
            <li>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noreferrer"
                className="hover:underline"
              >
                linkedin
              </a>
            </li>
          </ul>
        </div>
      </div>
      <p className="mx-auto max-w-[1440px] overflow-hidden px-5 pb-6 font-bold lowercase leading-[0.8] tracking-[-0.07em] text-cream text-[clamp(3.2rem,14vw,13rem)] md:px-10">
        {site.name}
      </p>
      <p className="px-5 pb-8 text-xs text-cream-soft md:px-10">
        © 2026 {site.name}, all rights reserved
      </p>
    </footer>
  );
}
