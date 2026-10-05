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

      <p className="mt-10 text-sm font-medium tracking-[0.1em]">COMPONENTS</p>
      <div className="mt-4 flex flex-wrap items-center gap-2">
        <span
          className="inline-flex items-center rounded-[20px] px-3 py-3 text-xl font-medium text-white"
          style={{ background: "#b32525" }}
        >
          VIEW OUR MENU
        </span>
        <span
          className="inline-flex items-center rounded-[20px] border bg-white px-3 py-3 text-xl font-medium uppercase tracking-normal"
          style={{ borderColor: "#e1e1e1", color: "#b32525" }}
        >
          Explore our story
        </span>
        <span
          className="inline-flex items-center rounded-lg px-3 py-3 text-base font-bold"
          style={{ background: "#335d53", color: "#72ffdd" }}
        >
          OPEN NOW
        </span>
        <span
          className="inline-flex items-center rounded-lg px-3 py-3 text-base font-bold"
          style={{ background: "#ffbe9a", color: "#b4281d" }}
        >
          COMING SOON
        </span>
      </div>
    </div>
  );
}
