
import React from "react";

export default function ScheduleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen bg-white px-5 sm:px-10 md:px-15 lg:px-[150px]">
      <div className="mx-auto relative min-h-screen max-w-6xl border-x border-neutral-200">
        {children}
      </div>
    </main>
  );
}