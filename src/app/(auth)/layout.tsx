
import { requireAuth } from '@/lib/hooks';
import { redirect } from 'next/navigation';
import React from 'react'
import LoginIcon from '../components/avaterUI';
import { auth } from '@/lib/auth';

const  AuthLayout = async ({
    children
}: {
    children: React.ReactNode
}) => {
    const session = await auth();


  return (
   
    <main>
        <header className='sticky flex items-center top-0 z-50 w-full border-b border-zinc-200 px-5 py-2 justify-between bg-zinc-100'>
            <div className='w-fit space-x-2 flex items-center justify-center'>
                <div className='bg-gradient-to-br from-zinc-500 via-zinc-800 to-zinc-900 text-white px-3 py-1 font-sans rounded-lg font-semibold'>
                    U
                </div>
                <span className='font-semibold text-sm text-zinc-900'>Uni<span className='text-zinc-500 font-medium'>Calender</span></span>
            </div>
             {!session?.user && (
                <span className="text-sm font-sans text-zinc-500">
                    Secure Authentication
                </span>
                )}
            {session?.user && (
                <LoginIcon />
            )}
        </header>
        {children}
    </main>
  )
}

export default  AuthLayout
