import Image from "next/image";
import { DM_Mono, DM_Sans, DM_Serif_Display, Figtree } from "next/font/google";

const sans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const serif = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

const mono = DM_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
});

const figtree = Figtree({
  subsets: ["latin"],
  weight: "600",
});

const colors = [
  { name: "bg", value: "#fff7f4", ink: "#7f2728" },
  { name: "maroon", value: "#7f2728", ink: "#fff7f4" },
  { name: "red", value: "#b32525", ink: "#fff7f4" },
  { name: "cream", value: "#f6f0e9", ink: "#7f2728" },
  { name: "border", value: "#cda5a6", ink: "#7f2728" },
  { name: "open", value: "#335d53", ink: "#72ffdd" },
  { name: "open text", value: "#72ffdd", ink: "#335d53" },
  { name: "soon", value: "#ffbe9a", ink: "#b4281d" },
  { name: "soon text", value: "#b4281d", ink: "#ffbe9a" },
];

export function TaskinSystem() {
  return (
    <>
    <div
      className={`${sans.className} mt-10 overflow-hidden rounded-[28px] px-5 py-8 sm:px-8 sm:py-10`}
      style={{ background: "#fff7f4", color: "#7f2728" }}
    >
      <p className="text-sm font-medium tracking-[0.1em]">COLOR</p>
      <ul className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
        {colors.map((color) => (
          <li key={color.name}>
            <div
              className="flex h-16 items-end rounded-[16px] border px-3 py-2 text-xs font-medium"
              style={{
                background: color.value,
                color: color.ink,
                borderColor: "#cda5a6",
              }}
            >
              {color.value}
            </div>
            <p className="mt-2 text-sm font-medium">{color.name}</p>
          </li>
        ))}
      </ul>

      <p className="mt-10 text-sm font-medium tracking-[0.1em]">TYPE</p>
      <div className="mt-4 flex flex-col gap-4">
        <p className="text-base font-medium tracking-[0.1em]">NOW OPEN IN NYC</p>
        <p
          className="text-[clamp(2rem,4vw,3.25rem)] leading-[1.07]"
          style={{ fontFamily: serif.style.fontFamily }}
        >
          Rooted in heritage,{" "}
          <span className="italic" style={{ color: "#b32525" }}>
            rising in dough.
          </span>
        </p>
        <p
          className="text-[clamp(1.75rem,3vw,2.4rem)] tracking-[0.05em]"
          style={{ fontFamily: mono.style.fontFamily }}
        >
          Breads
        </p>
        <p
          className="max-w-[36rem] text-[clamp(1.15rem,2vw,1.5rem)] font-semibold leading-[1.15]"
          style={{ fontFamily: figtree.style.fontFamily, color: "#b32525" }}
        >
          At Taşkin, we craft fresh breads, pastries, and desserts everyday
          using quality ingredients.
        </p>
      </div>

    </div>

    <div
      className={`${sans.className} mt-6 rounded-[28px] px-4 py-6 sm:px-6 sm:py-8`}
      style={{ background: "#f5f5f5", color: "#7f2728" }}
    >
      <p className="text-sm text-[#b5b5b5]">navigation</p>
      <div
        className="mt-3 grid grid-cols-[1fr_auto_1fr] items-center gap-3 rounded-[16px] px-4 py-3 sm:px-6"
        style={{ background: "#fff7f4" }}
      >
        <div className="hidden items-center gap-4 text-sm font-semibold sm:flex lg:gap-6 lg:text-base">
          <span>Menu</span>
          <span>Story</span>
          <span>Recipes</span>
        </div>
        <Image
          src="/images/taskin/logo.png"
          alt="Taşkın Bakery"
          width={161}
          height={67}
          className="col-span-3 h-auto w-[110px] justify-self-center sm:col-span-1 sm:w-[130px]"
        />
        <div className="hidden items-center justify-end gap-4 text-sm font-semibold sm:flex lg:gap-6 lg:text-base">
          <span>Catering</span>
          <span>Wholesale</span>
          <span>Locations</span>
        </div>
      </div>
      <div className="mt-3 flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm font-semibold sm:hidden">
        {["Menu", "Story", "Recipes", "Catering", "Wholesale", "Locations"].map(
          (item) => (
            <span key={item}>{item}</span>
          ),
        )}
      </div>

      <div className="mt-8 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        <div>
          <p className="text-sm text-[#b5b5b5]">badge</p>
          <div className="mt-3 flex flex-col items-start gap-2">
            <span className="inline-flex items-center gap-2 text-sm font-medium">
              <span
                className="inline-flex size-5 items-center justify-center rounded-full border text-xs"
                style={{ borderColor: "#7f2728" }}
              >
                +
              </span>
              see more
            </span>
            <span
              className="inline-flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-[11px] font-bold tracking-wide"
              style={{ background: "#335d53", color: "#72ffdd" }}
            >
              <span
                className="size-1.5 rounded-full"
                style={{ background: "#72ffdd" }}
              />
              OPEN NOW · 24 HOURS
            </span>
            <span
              className="inline-flex items-center rounded-md px-2.5 py-1.5 text-[11px] font-bold tracking-wide"
              style={{ background: "#ffbe9a", color: "#b4281d" }}
            >
              COMING SOON
            </span>
          </div>
        </div>

        <div>
          <p className="text-sm text-[#b5b5b5]">button</p>
          <div className="mt-3 flex flex-col items-start gap-2">
            <span
              className="inline-flex items-center gap-2 rounded-full px-3.5 py-2 text-sm font-medium text-white"
              style={{ background: "#7f2728" }}
            >
              <PhoneIcon />
              Partner with us
            </span>
            <span
              className="inline-flex items-center gap-2 rounded-full border bg-white px-3.5 py-2 text-sm font-medium"
              style={{ borderColor: "#e6e6e6", color: "#7f2728" }}
            >
              <PhoneIcon />
              Partner with us
            </span>
          </div>
        </div>

        <div>
          <p className="text-sm text-[#b5b5b5]">tab</p>
          <div className="mt-3 flex flex-wrap gap-2">
            <span
              className="inline-flex items-center rounded-full px-4 py-2 text-sm font-medium text-white"
              style={{ background: "#7f2728" }}
            >
              Paterson
            </span>
            <span
              className="inline-flex items-center rounded-full border bg-white px-4 py-2 text-sm font-medium"
              style={{ borderColor: "#e6e6e6", color: "#7f2728" }}
            >
              Paterson
            </span>
          </div>
        </div>
      </div>

      <p className="mt-8 text-sm text-[#b5b5b5]">card</p>
      <article className="mt-3 max-w-[640px] rounded-[20px] bg-white px-5 py-5 shadow-[0_10px_30px_rgba(0,0,0,0.06)] sm:px-6 sm:py-6">
        <p className="text-sm">Open 24 hours</p>
        <h3 className="mt-2 text-xl font-bold">Paterson – Our Home</h3>
        <p className="mt-1 text-sm">103 Hazel St. Paterson, NJ 07503</p>
        <div className="mt-4 flex flex-wrap gap-2">
          <span
            className="inline-flex items-center rounded-full px-3.5 py-2 text-xs font-semibold tracking-wide text-white"
            style={{ background: "#7f2728" }}
          >
            GET DIRECTIONS
          </span>
          <span
            className="inline-flex items-center rounded-full border bg-white px-3.5 py-2 text-xs font-semibold tracking-wide"
            style={{ borderColor: "#e6e6e6" }}
          >
            CALL US
          </span>
        </div>
      </article>
    </div>
    </>
  );
}

function PhoneIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M8 3.5h3.2l1.2 3.2-2 .9a12.5 12.5 0 0 0 5.9 5.9l.9-2 3.2 1.2V16a2 2 0 0 1-2.2 2A15.5 15.5 0 0 1 6 6.7 2 2 0 0 1 8 3.5Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
    </svg>
  );
}
