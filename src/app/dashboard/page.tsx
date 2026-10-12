import { auth } from '@/lib/auth';
import { requireAuth } from '@/lib/hooks';
import { redirect } from 'next/navigation';
import React from 'react'

const Dashboard = async () => {
    const session = await requireAuth();
  return (
    <section className='bg-white w-full h-screen flex flex-col items-center px-4'>
      <div className='w-full relative overflow-hidden px-4 py-20 border mt-5 border--200 rounded-xl'>
        <div className='w-64 h-64 rounded-full bg-purple-500/20 blur-3xl absolute -top-40 left-0'/>
        <div className='w-64 h-64 rounded-full bg-green-500/20 blur-3xl absolute -bottom-30 right-0'/>

      </div>
    </section>
  )
}

export default Dashboard
