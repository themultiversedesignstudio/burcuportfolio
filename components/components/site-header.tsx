"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 bg-ink">
        <nav
          className="mx-auto grid h-16 max-w-[1440px] grid-cols-2 items-center px-5 md:grid-cols-3 md:px-10"
          aria-label="Primary"
        >
          <Link
            href="/"
            className="justify-self-start text-[15px] font-medium tracking-tight text-cream"
            onClick={() => setOpen(false)}
          >
            {site.name}
          </Link>
          <Link
            href="/about-me"
            className="hidden justify-self-center text-[15px] font-medium tracking-tight text-cream md:block"
          >
            about me
          </Link>
          <Link
            href="/#start-a-project"
            className="hidden justify-self-end text-[15px] font-medium tracking-tight text-cream md:block"
          >
            start a project
          </Link>
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="justify-self-end text-cream hover:bg-transparent hover:text-cream md:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? (
              <span className="text-2xl leading-none" aria-hidden>
                ×
              </span>
            ) : (
              <span className="flex h-4 w-6 flex-col justify-between" aria-hidden>
                <span className="block h-px w-full bg-cream" />
                <span className="block h-px w-full bg-cream" />
              </span>
            )}
          </Button>
        </nav>
      </header>
      <div
        id="mobile-menu"
        className={cn(
          "fixed inset-0 z-40 bg-ink px-5 pt-24 md:hidden",
          open ? "block" : "hidden",
        )}
      >
        <div className="flex flex-col items-start gap-5">
          <Link
            href="/about-me"
            className="text-4xl font-bold tracking-tight text-cream"
            onClick={() => setOpen(false)}
          >
            about me
          </Link>
          <Link
            href="/#start-a-project"
            className="text-4xl font-bold tracking-tight text-cream"
            onClick={() => setOpen(false)}
          >
            start a project
          </Link>
          <Link
            href="/#work"
            className="text-4xl font-bold tracking-tight text-cream"
            onClick={() => setOpen(false)}
          >
            work
          </Link>
          <Button
            asChild
            className="mt-2 h-auto rounded-full bg-cream-pill px-5 py-2.5 text-sm font-medium text-ink hover:bg-cream"
          >
            <a href={site.resumeHref} download>
              download resume
            </a>
          </Button>
        </div>
      </div>
    </>
  );
}
