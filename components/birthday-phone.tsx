"use client";

import { useRef, useState } from "react";
import { cn } from "@/lib/utils";

type Part = "month" | "day" | "year";

const ORDER: Part[] = ["month", "day", "year"];
const MAX_LENGTH: Record<Part, number> = { month: 2, day: 2, year: 4 };
const PLACEHOLDER: Record<Part, string> = {
  month: "MM",
  day: "DD",
  year: "YYYY",
};
const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const KEYS = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "", "0", "delete"] as const;

function daysInMonth(month: number, year: number) {
  return new Date(year, month, 0).getDate();
}

function isCompleteDate(month: string, day: string, year: string) {
  if (month.length < 1 || day.length < 1 || year.length !== 4) return false;
  const monthNumber = Number(month);
  const dayNumber = Number(day);
  const yearNumber = Number(year);
  const thisYear = new Date().getFullYear();
  if (monthNumber < 1 || monthNumber > 12) return false;
  if (yearNumber < 1900 || yearNumber > thisYear) return false;
  if (dayNumber < 1 || dayNumber > daysInMonth(monthNumber, yearNumber)) return false;
  return true;
}

function formatDate(month: string, day: string, year: string) {
  return `${MONTHS[Number(month) - 1]} ${Number(day)}, ${year}`;
}

function normalize(part: Part, raw: string) {
  let next = raw.slice(0, MAX_LENGTH[part]);
  if (part === "month") {
    if (next.length === 1 && Number(next) > 1) next = `0${next}`;
    if (next.length === 2 && Number(next) === 0) next = "01";
    if (next.length === 2 && Number(next) > 12) next = "12";
  }
  if (part === "day") {
    if (next.length === 1 && Number(next) > 3) next = `0${next}`;
    if (next.length === 2 && Number(next) === 0) next = "01";
    if (next.length === 2 && Number(next) > 31) next = "31";
  }
  if (part === "year" && next.length === 4) {
    const year = Number(next);
    const thisYear = new Date().getFullYear();
    if (year > thisYear) next = String(thisYear);
  }
  return next;
}

export function BirthdayPhone() {
  const [values, setValues] = useState({ month: "", day: "", year: "" });
  const [active, setActive] = useState<Part | null>(null);
  const [saved, setSaved] = useState(false);
  const advanceTimer = useRef<number | null>(null);

  const ready = isCompleteDate(values.month, values.day, values.year);
  const keyboardOpen = active !== null;

  function clearAdvance() {
    if (advanceTimer.current !== null) {
      window.clearTimeout(advanceTimer.current);
      advanceTimer.current = null;
    }
  }

  function focusPart(part: Part) {
    clearAdvance();
    setSaved(false);
    setActive(part);
  }

  function move(from: Part, direction: 1 | -1) {
    clearAdvance();
    const index = ORDER.indexOf(from);
    const next = ORDER[index + direction];
    setActive(next ?? null);
  }

  function typeDigit(digit: string) {
    if (!active) return;
    setSaved(false);
    const next = normalize(active, values[active] + digit);
    setValues((current) => ({ ...current, [active]: next }));
    if (next.length >= MAX_LENGTH[active]) {
      const from = active;
      clearAdvance();
      advanceTimer.current = window.setTimeout(() => {
        setActive((current) => {
          if (current !== from) return current;
          const index = ORDER.indexOf(from);
          return ORDER[index + 1] ?? null;
        });
      }, 160);
    }
  }

  function backspace() {
    if (!active) return;
    clearAdvance();
    setSaved(false);
    if (values[active].length === 0) {
      move(active, -1);
      return;
    }
    setValues((current) => ({
      ...current,
      [active]: current[active].slice(0, -1),
    }));
  }

  function onContinue() {
    if (!ready) {
      const firstEmpty =
        ORDER.find((part) => values[part].length < (part === "year" ? 4 : 1)) ??
        "month";
      focusPart(firstEmpty);
      return;
    }
    clearAdvance();
    setActive(null);
    setSaved(true);
  }

  return (
    <div className="w-[min(100%,340px)]">
      <div
        className="relative aspect-[390/844] rounded-[2.7rem] bg-[#111] p-[11px] shadow-[0_28px_70px_rgba(0,0,0,0.45)] ring-1 ring-white/15"
        role="region"
        aria-label="iPhone mockup, Neurocycle birthday step"
      >
        <span className="absolute top-[18%] -left-[3px] h-7 w-[3px] rounded-l bg-zinc-600" />
        <span className="absolute top-[26%] -left-[3px] h-12 w-[3px] rounded-l bg-zinc-600" />
        <span className="absolute top-[36%] -left-[3px] h-12 w-[3px] rounded-l bg-zinc-600" />
        <span className="absolute top-[28%] -right-[3px] h-16 w-[3px] rounded-r bg-zinc-600" />

        <div className="relative flex h-full flex-col overflow-hidden rounded-[2.15rem] bg-white font-[system-ui,-apple-system,sans-serif] text-black">
          <div className="pointer-events-none absolute top-2.5 left-1/2 z-20 h-[22px] w-[92px] -translate-x-1/2 rounded-full bg-black" />

          <div className="relative z-10 flex h-12 items-end justify-between px-6 pb-1 text-[12px] font-semibold tracking-tight">
            <span>9:41</span>
            <span className="flex items-center gap-1.5" aria-hidden>
              <SignalIcon />
              <WifiIcon />
              <BatteryIcon />
            </span>
          </div>

          <div className="flex min-h-0 flex-1 flex-col px-5 pt-4 pb-4">
            <h3 className="text-center text-[17px] font-semibold tracking-tight">
              What is your birthday? <span aria-hidden>🎂</span>
            </h3>

            <div className="mt-8 grid grid-cols-3 gap-2.5">
              {ORDER.map((part) => {
                const value = values[part];
                const isActive = active === part;
                return (
                  <div key={part}>
                    <span className="mb-1.5 block text-center text-[13px] text-neutral-500">
                      {part === "month" ? "Month" : part === "day" ? "Day" : "Year"}
                    </span>
                    <button
                      type="button"
                      aria-label={`${part}, ${value || "empty"}`}
                      aria-pressed={isActive}
                      onClick={() => focusPart(part)}
                      className={cn(
                        "flex h-12 w-full items-center justify-center rounded-lg border-2 text-[17px] font-medium transition-colors focus-visible:outline-[#2f8f3a]",
                        isActive
                          ? "border-[#3d9a46] bg-[#f3fff4]"
                          : "border-[#7dce7a] bg-white",
                      )}
                    >
                      {value ? (
                        <span>{value}</span>
                      ) : (
                        <span className="text-neutral-300">{PLACEHOLDER[part]}</span>
                      )}
                    </button>
                  </div>
                );
              })}
            </div>

            <p className="mt-4 min-h-5 text-center text-[13px] text-[#3d8f45]" aria-live="polite">
              {saved && ready ? `${formatDate(values.month, values.day, values.year)} saved` : ""}
            </p>

            <button
              type="button"
              onClick={onContinue}
              aria-disabled={!ready}
              className={cn(
                "mt-auto h-12 w-full rounded-xl bg-[#e7f86a] text-[16px] font-semibold text-black shadow-[0_4px_0_#c5dc4e] transition-transform focus-visible:outline-[#2f8f3a] active:translate-y-1 active:shadow-none",
                ready ? "opacity-100" : "opacity-45",
              )}
            >
              Continue
            </button>
          </div>

          <div
            className={cn(
              "grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none",
              keyboardOpen ? "grid-rows-[248px]" : "grid-rows-[0px]",
            )}
          >
            <div className="overflow-hidden" inert={keyboardOpen ? undefined : true}>
              <div className="flex h-[248px] flex-col bg-[#d1d3d9]">
                <div className="flex h-11 shrink-0 items-center justify-between border-b border-black/10 px-3">
                  <span className="text-[13px] text-neutral-600">
                    {active === "month" ? "Month" : active === "day" ? "Day" : active === "year" ? "Year" : ""}
                  </span>
                  <button
                    type="button"
                    onClick={() => active && move(active, 1)}
                    className="rounded-md px-2 py-1 text-[16px] font-semibold text-[#007aff] focus-visible:outline-[#007aff]"
                  >
                    {active === "year" ? "Done" : "Next"}
                  </button>
                </div>
                <div className="grid flex-1 grid-cols-3 gap-1.5 p-1.5 pb-3">
                  {KEYS.map((key) => {
                    if (key === "") {
                      return <span key="spacer" />;
                    }
                    if (key === "delete") {
                      return (
                        <button
                          key={key}
                          type="button"
                          aria-label="Delete"
                          onClick={backspace}
                          className="rounded-lg bg-[#adb1b8] text-[20px] font-medium text-black shadow-[0_1px_0_rgba(0,0,0,0.25)] active:translate-y-px active:bg-[#9ea3ab]"
                        >
                          ⌫
                        </button>
                      );
                    }
                    return (
                      <button
                        key={key}
                        type="button"
                        onClick={() => typeDigit(key)}
                        className="rounded-lg bg-white text-[22px] font-medium text-black shadow-[0_1px_0_rgba(0,0,0,0.28)] active:translate-y-px active:bg-[#eceff3]"
                      >
                        {key}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          <div className="pointer-events-none absolute bottom-1.5 left-1/2 z-40 h-1 w-28 -translate-x-1/2 rounded-full bg-black/80" />
        </div>
      </div>
    </div>
  );
}

function SignalIcon() {
  return (
    <svg width="15" height="11" viewBox="0 0 15 11" fill="currentColor" aria-hidden>
      <rect x="0" y="7" width="2.2" height="4" rx="0.4" />
      <rect x="3.4" y="5" width="2.2" height="6" rx="0.4" />
      <rect x="6.8" y="3" width="2.2" height="8" rx="0.4" />
      <rect x="10.2" y="0" width="2.2" height="11" rx="0.4" />
    </svg>
  );
}

function WifiIcon() {
  return (
    <svg width="14" height="11" viewBox="0 0 14 11" fill="none" aria-hidden>
      <path
        d="M7 9.2a1.1 1.1 0 1 0 0 2.2 1.1 1.1 0 0 0 0-2.2Z"
        fill="currentColor"
      />
      <path
        d="M3.2 7.4a5.4 5.4 0 0 1 7.6 0"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
      <path
        d="M1 5a8.4 8.4 0 0 1 12 0"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
    </svg>
  );
}

function BatteryIcon() {
  return (
    <svg width="22" height="11" viewBox="0 0 22 11" fill="none" aria-hidden>
      <rect x="0.6" y="0.6" width="18" height="9.8" rx="2" stroke="currentColor" strokeWidth="1.2" />
      <rect x="2" y="2" width="13" height="7" rx="1" fill="currentColor" />
      <path d="M20 3.5v4a1.6 1.6 0 0 0 0-4Z" fill="currentColor" />
    </svg>
  );
}
