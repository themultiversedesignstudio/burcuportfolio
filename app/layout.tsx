import type { Metadata } from "next";
import { Funnel_Sans } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { site } from "@/lib/site";
import "./globals.css";

const funnel = Funnel_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-funnel",
});

export const metadata: Metadata = {
  title: {
    default: `${site.name} — product designer`,
    template: `%s | ${site.displayName}`,
  },
  description: site.tagline,
  metadataBase: new URL("https://burcupayidarol.com"),
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-US" className={`${funnel.variable} h-full`}>
      <body className="flex min-h-full flex-col bg-ink font-sans text-cream">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:bg-cream-pill focus:px-3 focus:py-2 focus:text-ink"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main" className="flex-1">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
