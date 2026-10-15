'use client';
import { Timeline } from 'lucide-react';
import { title } from 'process';
import React, { useState } from 'react'


    type ScheduleEvents = {
        time: String;
        title: String;
        type: "busy" | "available"
    }

    const dummyEvents: Record<string, ScheduleEvents[]> = {
        "2026-10-15": [
            {
                time: "09:00 AM",
                title: "Available",
                type: "available"
            },
            {
                time: '11:00 AM',
                title: "Team Meeting",
                type: "busy",
            },
        ],
        "2026-10-21": [
            {
                time: "9:00 AM",
                title: "University Class start 9 end 2 PM",
                type: "busy",
            },
            {
                time: "5:34 PM",
                title: "Percel Recived Time",
                type: 'busy'
            }
        ]

        
    }

const publicShedulePage = () => {
    const [selectDate, setSectedDate] = useState(
        new Date().toLocaleDateString("en-CA")
    );
    

    const today = new Date();
    const dates = Array.from({ length: 30 }, (_, index) => {
        const date = new Date(today);
        date.setDate(today.getDate() + index);
        return date;
    })
    
     function seeSchedule(date: any) {
       const getDate = getNumberDate(date) ?? null;
       const data = dummyEvents[getDate] ?? null;
       console.log(data);

    }

    function getNumberDate(date: Date | string): string {
    const selectedDate = typeof date === "string" ? new Date(date) : date;

    const year = selectedDate.getFullYear();
    const month = String(selectedDate.getMonth() + 1).padStart(2, "0");
    const day = String(selectedDate.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
}





  return (
    <main className='min-h-screen bg-zinc-950 px-6 py-12 text-white'>
        <div className='mx-auto max-w-5xl'>
            <h1 className='font-bold text-3xl tracking-tight'>Public Schedule</h1>
            <p className='text-sm text-zinc-400'>View the next 30 days timezone.</p>
            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4 md:grid-cols-6">

                {
                    dates.map((date) => {
                        const dateKey = getNumberDate(date);
                        const isSelected = selectDate === dateKey;
                        const events = dummyEvents[dateKey] ?? [];


                        return (
                            <div onClick={() => setSectedDate(dateKey)} key={dateKey} className={`p-4 rounded-xl transition-all duration-200
                            ${isSelected ? 'border border-violet-500 bg-violet-500/10 ring-1 ring-violet-500/30' : 'bg-white/5 border border-white/10 hover:bg-white/5 hover:border-white/20'}
                            `}>
                                <p className='text-sm text-zinc-400'>
                                    {
                                        date.toLocaleDateString('en-US', {
                                            weekday: 'short'
                                        })
                                    }
                                </p>
                                <h2 className='text-2xl font-semibold mt-2'>
                                    {
                                        date.toLocaleDateString('en-US', {
                                            month: '2-digit'
                                        })
                                    }
                                </h2>
                                <p className='text-sm text-zinc-500 mt-2'>
                                    {
                                        date.toLocaleDateString('en-US', {
                                            month: 'short'
                                        })
                                    }
                                </p>
                                <span className={`flex w-full h-[5px] mt-2 rounded-full ${events.length > 0 ? 'bg-green-500' : 'bg-zinc-700'}`}></span>

                            </div>
                        )
                    })
                }

</div>
            <div className='w-full border border-white/10 mt-5 px-4 py-3 bg-white/5 rounded-xl'>
            <div className='w-full flex items-center justify-between gap-2'>
                <div className=''>
                    <p className='text-xs text-zinc-500'>Selected date</p>
                    <h1 className='text-sm mt-1 font-semibold'>Friday, November, 10, 26</h1>
                </div>
                <button className='p-1.5 border border-white/5 bg-white/5 text-xs text-zinc-400 rounded-xl'>0 schedule items</button>
            </div>
            <div     className='border border-white/5 px-4 py-5 mt-5 rounded-xl flex items-center justify-center flex-col'>
              <Timeline  className='w-5 h-5 text-zinc-600'/>
              <h4 className='text-sm mt-2 font-semibold text-zinc-400'>No Schedule available</h4>
              <p className='text-xs text-muted-foreground mt-1'>There are no schedule entry this data.</p>
            </div>
            </div>
        </div>

    </main>
  )
}

export default publicShedulePage
