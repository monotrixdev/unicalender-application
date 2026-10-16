import { ArrowDown, Bus, ChevronDown, Globe, MoveDown, Timeline, Timer, Video } from 'lucide-react';
import Image from 'next/image';
import React from 'react'

type ScheduleEvents = {
    time: String;
    title: String;
    status: 'busy' | 'available';
}

const events: Record<string, ScheduleEvents[]> = {
    '2026-10-16': [
        {
            time: '11:00 PM',
            title: 'City Universty Class start 9:00 AM and end 2:00 PM',
            status: 'busy',
        }
    ],
    '2026-10-22': [
        {
            time: "9:00 PM",
            title: 'Meeting with Company NASA',
            status: "busy"
        },
        {
            time: '11:00 PM',
            title: 'Go to toilet and smoking',
            status: 'available'
        }
    ]
}

const ScheduleCheck = () => {

  return (
    <main className='max-w-5xl h-screen px-4 py-10 flex items-center justify-center bg-white'>
        <div className='w-full px-4 py-5 mx-auto bg-zinc-50 border border-zinc-200 rounded-xl flex items-start flex-col'>
            <div className=''>
                <Image className='p-1 rounded-xl ring-1 bg-zinc-100 ring-zinc-200' src='https://xuanvex.github.io/images/img.png' width={40} height={40} alt='Users Profile Avater' />
                <h4 className='text-sm font-sans font-semibold p-1 text-zinc-700'>Sabbir Ahmed</h4>
                <h1 className='text-md font-bold p-1 tracking-wide'>Secret meeting</h1>
                <div className='text-sm p-1 text-zinc-700 flex gap-1'><Timer className='w-5 h-5'/> 15m</div>
                <div className='flex items-center gap-1 text-sm p-1 text-zinc-700'><Video className='w-5 h-5'/> Call Video</div>
                <div className='group group:hover:bg-zinc-500 hover:bg-zinc-100 rounded-md hover:ring hover:ring-zinc-200 p-1 duration-200  text-sm text-zinc-700 flex items-center gap-1'><Globe className='w-5 h-5'/>Asia/Dhaka<ChevronDown className='w-5 h-5 group'/></div>
            </div>
            <div className='h-1 bg-muted-foreground'/>
        </div>
    </main>
  )
}

export default ScheduleCheck
