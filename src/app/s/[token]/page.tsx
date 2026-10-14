
"use client";

import { useMemo, useState } from "react";

type ScheduleEvent = {
  time: string;
  title: string;
  type: "busy" | "available";
};

// Dummy data for UI development only.
const dummyEvents: Record<string, ScheduleEvent[]> = {
  "2026-10-15": [
    { time: "09:00 AM", title: "Available", type: "available" },
    { time: "11:00 AM", title: "Team Meeting", type: "busy" },
    { time: "02:00 PM", title: "Available", type: "available" },
  ],
  "2026-10-16": [
    { time: "10:00 AM", title: "Project Discussion", type: "busy" },
    { time: "01:00 PM", title: "Available", type: "available" },
    { time: "04:00 PM", title: "Available", type: "available" },
  ],
  "2026-10-17": [
    { time: "11:00 AM", title: "Available", type: "available" },
    { time: "03:00 PM", title: "Available", type: "available" },
  ],
  "2026-10-19": [
    { time: "10:00 AM", title: "Busy", type: "busy" },
    { time: "01:30 PM", title: "Available", type: "available" },
  ],
  "2026-10-20": [
    { time: "09:30 AM", title: "Available", type: "available" },
    { time: "12:00 PM", title: "Client Meeting", type: "busy" },
  ],
};

function dateKey(date: Date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

function formatDate(date: Date) {
  return new Intl.DateTimeFormat("en", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(date);
}

export default function PublicSchedulePage() {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  // Use the current local date and generate the next 30 calendar days.
  const dates = useMemo(() => {
    const today = new Date();
    today.setHours(12, 0, 0, 0);

    return Array.from({ length: 30 }, (_, index) => {
      const date = new Date(today);
      date.setDate(today.getDate() + index);

      return {
        date,
        key: dateKey(date),
      };
    });
  }, []);

  const activeDate = selectedDate ?? dates[0].key;
  const events = dummyEvents[activeDate] ?? [];

  function getStatus(key: string) {
    const items = dummyEvents[key] ?? [];

    if (items.length === 0) return "none";

    if (items.some((item) => item.type === "available")) {
      return "available";
    }

    return "busy";
  }

  return (
    <main className="min-h-screen bg-zinc-950 px-4 py-8 text-zinc-100 sm:px-6 sm:py-12">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <header className="flex items-center justify-between gap-4">
          <a href="/" className="text-xl font-bold tracking-tight">
            Uni<span className="text-violet-400">Calender</span>
          </a>

          <span className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-zinc-400">
            Public Schedule
          </span>
        </header>

        {/* Owner information */}
        <section className="mt-10 flex flex-col gap-5 sm:flex-row sm:items-center">
          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-violet-500/15 text-xl font-bold text-violet-300 ring-1 ring-violet-400/20">
            AM
          </div>

          <div>
            <div className="flex flex-wrap items-center gap-2">
              <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                Alex Morgan&apos;s Schedule
              </h1>

              <span className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2.5 py-1 text-xs text-emerald-300">
                Public link
              </span>
            </div>

            <p className="mt-2 text-sm text-zinc-400">
              View the schedule and availability for the next 30 days.
            </p>

            <p className="mt-2 text-xs text-zinc-500">
              Timezone: Asia/Dhaka (UTC+6)
            </p>
          </div>
        </section>

        {/* Date range */}
        <section className="mt-9 rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:p-6">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <h2 className="text-lg font-semibold">
                Next 30 days
              </h2>

              <p className="mt-1 text-sm text-zinc-500">
                Select a date to view its schedule.
              </p>
            </div>

            <span className="rounded-lg border border-white/10 px-3 py-2 text-xs text-zinc-400">
              {dates[0].date.toLocaleDateString("en", {
                month: "short",
                day: "numeric",
              })}{" "}
              –{" "}
              {dates[29].date.toLocaleDateString("en", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </span>
          </div>

          {/* Legend */}
          <div className="mt-5 flex flex-wrap gap-x-5 gap-y-3 text-xs text-zinc-400">
            <span className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
              Available
            </span>

            <span className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
              Busy
            </span>

            <span className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-zinc-600" />
              No schedule
            </span>
          </div>

          {/* 30-day calendar grid */}
          <div className="mt-6 grid grid-cols-3 gap-2 sm:grid-cols-5 sm:gap-3 md:grid-cols-6">
            {dates.map(({ date, key }) => {
              const status = getStatus(key);
              const selected = activeDate === key;

              return (
                <button
                  key={key}
                  type="button"
                  onClick={() => setSelectedDate(key)}
                  aria-pressed={selected}
                  className={`min-w-0 rounded-xl border p-3 text-left transition sm:p-4 ${
                    selected
                      ? "border-violet-400 bg-violet-500/15 ring-1 ring-violet-400/30"
                      : "border-white/10 bg-white/[0.02] hover:border-white/20"
                  }`}
                >
                  <span className="block text-xs text-zinc-500">
                    {date.toLocaleDateString("en", {
                      weekday: "short",
                    })}
                  </span>

                  <span className="mt-1 block text-xl font-semibold">
                    {date.getDate()}
                  </span>

                  <span className="mt-1 block text-xs text-zinc-500">
                    {date.toLocaleDateString("en", {
                      month: "short",
                    })}
                  </span>

                  <span
                    className={`mt-3 block h-1 w-full rounded-full ${
                      status === "available"
                        ? "bg-emerald-400"
                        : status === "busy"
                          ? "bg-rose-400"
                          : "bg-zinc-700"
                    }`}
                  />
                </button>
              );
            })}
          </div>
        </section>

        {/* Selected day's schedule */}
        <section className="mt-6 rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:p-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-sm text-zinc-500">
                Selected date
              </p>

              <h2 className="mt-1 text-lg font-semibold">
                {formatDate(
                  dates.find((item) => item.key === activeDate)!.date
                )}
              </h2>
            </div>

            <span className="rounded-lg bg-white/5 px-3 py-2 text-xs text-zinc-400">
              {events.length} schedule {events.length === 1 ? "item" : "items"}
            </span>
          </div>

          {events.length > 0 ? (
            <div className="mt-6 space-y-3">
              {events.map((event, index) => (
                <div
                  key={`${event.time}-${index}`}
                  className="flex items-center gap-4 rounded-xl border border-white/10 bg-zinc-900/70 p-4"
                >
                  <div className="w-24 shrink-0 text-sm font-medium text-zinc-300">
                    {event.time}
                  </div>

                  <div
                    className={`h-10 w-1 shrink-0 rounded-full ${
                      event.type === "available"
                        ? "bg-emerald-400"
                        : "bg-rose-400"
                    }`}
                  />

                  <div className="min-w-0 flex-1">
                    <p className="font-medium">
                      {event.title}
                    </p>

                    <p
                      className={`mt-1 text-xs ${
                        event.type === "available"
                          ? "text-emerald-300"
                          : "text-rose-300"
                      }`}
                    >
                      {event.type === "available"
                        ? "Available time"
                        : "Busy"}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="mt-6 rounded-xl border border-dashed border-white/10 px-5 py-10 text-center">
              <div className="text-2xl text-zinc-600">▦</div>

              <p className="mt-3 font-medium text-zinc-300">
                No schedule available
              </p>

              <p className="mt-2 text-sm text-zinc-500">
                There are no schedule entries for this date.
              </p>
            </div>
          )}
        </section>

        <footer className="py-8 text-center text-xs text-zinc-600">
          Shared with UniCalender · Read-only schedule
        </footer>
      </div>
    </main>
  );
}