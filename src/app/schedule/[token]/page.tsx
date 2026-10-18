import Image from "next/image";
import React from "react";
import { Clock3, MapPin, Globe2, ChevronDown } from "lucide-react";

const ScedulePage = () => {
  return (
    <main className="flex min-h-screen items-center justify-center bg-zinc-50 bg-zinc-50 px-4 py-10 text-zinc-900">
      <section className="mx-auto flex w-full max-w-5xl overflow-hidden rounded-2xl border border-zinc-200">
        {/* Profile and Meeting Information */}
        <div className="flex w-full max-w-sm flex-col gap-5 p-7 sm:p-9 bg-zinc-50">
          {/* Profile */}
          <div className="flex flex-col gap-2">
            <Image
              className="rounded-full border border-zinc-200 object-cover"
              width={40}
              height={40}
              src="https://xuanvex.github.io/images/img.png"
              alt="User avatar"
            />

            <p className="mt-1 text-sm font-normal text-zinc-500">
              Monaiyem Khan
            </p>

            <h1 className="font-heading text-3xl font-semibold leading-tight tracking-[-0.04em] text-zinc-900">
              Property Viewing
            </h1>

            <p className="text-[15px] font-normal leading-6 text-zinc-500">
              Tour your potential dream home with our experienced real estate
              professionals.
            </p>
          </div>

          {/* Meeting Duration */}
          <div className="flex items-center gap-3 text-sm text-zinc-500">
            <Clock3 className="size-[17px] shrink-0" strokeWidth={1.8} />
            <span>45 minutes</span>
          </div>

          {/* Meeting Location */}
          <div className="flex items-center gap-3 text-sm text-zinc-500">
            <MapPin className="size-[17px] shrink-0" strokeWidth={1.8} />
            <span>Pine Realty Office</span>
          </div>

          {/* Timezone */}
          <button
            type="button"
            className="flex w-fit items-center gap-2 text-sm text-zinc-500 transition-colors hover:text-zinc-900"
          >
            <Globe2 className="size-[17px] shrink-0" strokeWidth={1.8} />
            <span>Asia/Dhaka</span>
            <ChevronDown className="size-3.5" />
          </button>
        </div>

        {/* Calendar Placeholder */}
        <div className="hidden flex-1 bg-white border-l border-zinc-200 p-8 md:block">
          <h2 className="font-heading text-xl font-semibold tracking-tight">
            Select a date
          </h2>

          <p className="mt-2 text-sm leading-6 text-zinc-500">
            Choose a date and time that works best for you.
          </p>
        </div>
      </section>
    </main>
  );
};

export default ScedulePage;