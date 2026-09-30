import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-5 text-center">
      <h1 className="max-w-3xl font-bold leading-[0.95] tracking-[-0.04em] text-cream text-[clamp(2.4rem,6vw,4.5rem)]">
        Ooops! This page doesn&apos;t exist.
      </h1>
      <Link
        href="/"
        className="mt-10 text-lg text-cream underline underline-offset-4"
      >
        back to home
      </Link>
    </div>
  );
}
