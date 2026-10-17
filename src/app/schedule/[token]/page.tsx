"use client";

import React from "react";
import {
CalendarDays,
Clock3,
Globe2,
ArrowUpRight,
CheckCircle2,
Video,
ChevronLeft,
ChevronRight,
} from "lucide-react";

const days = [
{ day: "Mon", date: 12 },
{ day: "Tue", date: 13 },
{ day: "Wed", date: 14 },
{ day: "Thu", date: 15, available: true },
{ day: "Fri", date: 16 },
{ day: "Sat", date: 17, selected: true },
{ day: "Sun", date: 18 },
];

export default function Schedule() {
const [selectedDate, setSelectedDate] = React.useState(17);

return ( <main className="relative isolate min-h-screen overflow-clip bg-zinc-50 text-zinc-900">
{/* Subtle architectural grid */}
<div
aria-hidden="true"
className="pointer-events-none absolute inset-0 -z-10"
style={{
backgroundImage:
"linear-gradient(to right, rgba(161,161,170,0.13) 1px, transparent 1px)",
backgroundSize: "80px 100%",
maskImage:
"linear-gradient(to bottom, black 0%, rgba(0,0,0,0.45) 55%, transparent 100%)",
WebkitMaskImage:
"linear-gradient(to bottom, black 0%, rgba(0,0,0,0.45) 55%, transparent 100%)",
}}
/>

  {/* Sticky navigation */}
  <header className="sticky top-0 z-50 border-b border-zinc-200/80 bg-white/85 backdrop-blur-xl">
    <nav className="mx-auto flex h-[68px] w-full max-w-5xl min-w-0 items-center justify-between gap-4 px-4 sm:px-8">
      <a href="#" className="flex min-w-0 items-center gap-3">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-zinc-950 text-white">
          <CalendarDays size={18} strokeWidth={1.8} />
        </div>

        <span className="truncate text-[15px] font-semibold tracking-tight">
          Uni<span className="text-violet-600">Calender</span>
        </span>
      </a>

      <div className="flex shrink-0 items-center gap-2 rounded-full border border-zinc-200 bg-white px-3 py-1.5">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
        </span>
        <span className="text-[11px] font-medium text-zinc-600 sm:text-xs">
          Public schedule
        </span>
      </div>
    </nav>
  </header>

  {/* Page content */}
  <div className="relative mx-auto w-full max-w-5xl min-w-0 px-4 pb-16 sm:px-8 sm:pb-20">
    {/* Profile intro */}
    <section className="mx-auto max-w-2xl pb-10 pt-14 text-center sm:pb-12 sm:pt-20">
      <div className="relative mx-auto mb-6 flex h-[76px] w-[76px] items-center justify-center rounded-[24px] bg-gradient-to-br from-violet-500 via-purple-600 to-indigo-600 text-xl font-semibold tracking-wide text-white shad,ow-[0_12px_35px_-12px_rgba(124,58,237,0.65)] ring-4 ring-white">
        SA

        <span className="absolute -bottom-1.5 -right-1.5 flex h-6 w-6 items-center justify-center rounded-full border-[3px] border-white bg-emerald-500 text-white">
          <CheckCircle2 size={13} strokeWidth={2.5} />
        </span>
      </div>

      <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-violet-100 bg-violet-50/80 px-3 py-1.5">
        <span className="h-1.5 w-1.5 rounded-full bg-violet-500" />
        <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-violet-700">
          Personal schedule
        </span>
      </div>

      <h1 className="text-3xl font-semibold tracking-[-0.045em] sm:text-5xl">
        Sabbir Ahmed
      </h1>

      <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-zinc-500 sm:text-[15px]">
        Find a time that works for you. Check my availability and plan our
        next meeting.
      </p>

      <div className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-3 text-xs text-zinc-500">
        <span className="flex items-center gap-2">
          <Globe2 size={14} className="text-zinc-400" />
          Bangladesh Standard Time
        </span>

        <span className="flex items-center gap-2">
          <Clock3 size={14} className="text-zinc-400" />
          UTC +06:00
        </span>
      </div>
    </section>

    {/* Main schedule card */}
    <section className="mx-auto bg-red-500 w-full max-w-2xl min-w-0 overflow-hidden rounded-2xl border border-zinc-200/90 bg-white/95 shadomw-[0_20px_70px_-40px_rgba(24,24,27,0.25)]">
      {/* Card heading */}
      <div className="flex items-center justify-between gap-4 border-b border-zinc-100 px-5 py-5 sm:px-7">
        <div>
          <h2 className="text-[15px] font-semibold tracking-tight">
            Availability
          </h2>
          <p className="mt-1.5 text-xs text-zinc-500">
            Schedule overview and upcoming dates
          </p>
        </div>

        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-violet-100 bg-violet-50 text-violet-600">
          <CalendarDays size={18} />
        </div>
      </div>

      <div className="space-y-7 p-5 sm:p-7">
        {/* Public status */}
        <div className="flex items-start gap-3 rounded-xl border border-emerald-100/90 bg-emerald-50/50 p-4">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700">
            <CheckCircle2 size={17} />
          </div>

          <div className="min-w-0 pt-0.5">
            <p className="text-sm font-medium">Schedule is public</p>
            <p className="mt-1 text-xs leading-5 text-zinc-500">
              You can view the upcoming schedule and available times.
            </p>
          </div>

          <span className="ml-auto mt-1 shrink-0 rounded-full bg-emerald-100/80 px-2 py-1 text-[10px] font-medium text-emerald-700">
            Published
          </span>
        </div>

        {/* Upcoming availability */}
        <div>
          <div className="mb-3 flex items-center justify-between gap-3">
            <div>
              <h3 className="text-sm font-semibold">
                Upcoming availability
              </h3>
              <p className="mt-1 text-xs text-zinc-500">
                Available time slots
              </p>
            </div>

            <span className="rounded-lg border border-zinc-200 px-2.5 py-1.5 text-[10px] font-medium text-zinc-500">
              1 time slot
            </span>
          </div>

          <button
            type="button"
            className="group flex w-full min-w-0 items-center justify-between gap-3 rounded-xl border border-zinc-200 p-3.5 text-left transition-all duration-200 hover:border-violet-300 hover:bg-violet-50/40 sm:p-4"
          >
            <div className="flex min-w-0 items-center gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-violet-50 text-violet-600 transition-colors group-hover:bg-violet-100">
                <Video size={19} />
              </div>

              <div className="min-w-0">
                <p className="truncate text-sm font-medium">
                  Meeting availability
                </p>
                <p className="mt-1.5 text-xs text-zinc-500">
                  Today · 09:00 AM – 10:00 AM
                </p>
              </div>
            </div>

            <ArrowUpRight
              size={18}
              className="shrink-0 text-zinc-400 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-violet-600"
            />
          </button>
        </div>

        {/* Calendar */}
        <div className="border-t border-zinc-100 pt-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <h3 className="text-sm font-semibold">Schedule calendar</h3>
              <p className="mt-1 text-xs text-zinc-500">
                Select a date to view its status
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                aria-label="Previous month"
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-zinc-200 text-zinc-500 transition hover:bg-zinc-50"
              >
                <ChevronLeft size={15} />
              </button>

              <span className="min-w-[105px] text-center text-xs font-medium text-zinc-700">
                October 2026
              </span>

              <button
                type="button"
                aria-label="Next month"
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-zinc-200 text-zinc-500 transition hover:bg-zinc-50"
              >
                <ChevronRight size={15} />
              </button>
            </div>
          </div>

          <div className="mt-5 grid grid-cols-7 gap-1.5 sm:gap-2">
            {days.map((item) => {
              const isSelected = selectedDate === item.date;

              return (
                <button
                  key={item.date}
                  type="button"
                  onClick={() => setSelectedDate(item.date)}
                  className={`flex min-w-0 flex-col items-center rounded-xl border px-0.5 py-3 transition-all duration-200 sm:py-3.5 ${
                    isSelected
                      ? "border-violet-600 bg-violet-600 text-white shadow-md shadow-violet-600/15"
                      : item.available
                        ? "border-emerald-200 bg-emerald-50/70 text-zinc-900 hover:border-emerald-300"
                        : "border-zinc-100 bg-white text-zinc-700 hover:border-zinc-300 hover:bg-zinc-50"
                  }`}
                >
                  <span
                    className={`text-[10px] ${
                      isSelected ? "text-violet-100" : "text-zinc-400"
                    }`}
                  >
                    {item.day}
                  </span>

                  <span className="mt-2 text-sm font-semibold">
                    {item.date}
                  </span>

                  <span className="mt-2 flex h-1.5 items-center">
                    {item.available && (
                      <span
                        className={`h-1.5 w-1.5 rounded-full ${
                          isSelected ? "bg-white" : "bg-emerald-500"
                        }`}
                      />
                    )}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-[11px] text-zinc-500">
            <span className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Available
            </span>

            <span className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-violet-600" />
              Selected date
            </span>

            <span className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-zinc-300" />
              No status
            </span>
          </div>

          <div className="mt-5 flex items-start gap-3 rounded-xl border border-zinc-100 bg-zinc-50/80 p-4">
            <CalendarDays
              size={16}
              className="mt-0.5 shrink-0 text-zinc-400"
            />

            <div>
              <p className="text-xs font-medium text-zinc-800">
                October {selectedDate}, 2026
              </p>
              <p className="mt-1 text-xs leading-5 text-zinc-500">
                {selectedDate === 15
                  ? "Available · A time slot is marked for this date."
                  : selectedDate === 17
                    ? "Selected date · Check the schedule for upcoming events."
                    : "No schedule status has been added for this date yet."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Footer */}
    <footer className="mx-auto mt-10 max-w-2xl border-t border-zinc-200/70 pt-6 text-center">
      <p className="text-xs text-zinc-400">
        Powered by{" "}
        <span className="font-semibold text-zinc-700">UniCalender</span>
        <span className="mx-2 text-zinc-300">·</span>
        Make time for what matters.
      </p>
    </footer>
  </div>
</main>

);
}
