import { User2Icon, UserCircle2Icon } from 'lucide-react'
import React from 'react'

const RegisterPage = () => {
  return (
    <section className='w-full px-5 py-10 h-screen bg-zinc-50 flexc justify-center items-center flex-col'>
        <div className='w-full sm:w-[400px] bg-white px-4 py-6 rounded-xl flex flex-col border border-blue-200 relative overflow-hidden'>
            <div className='w-60 h-60 bg-blue-500/20 absolute -top-20 blur-3xl rounded-full pointer-events-none'/>
            <div className='w-40 h-40 absolute rounded-full bg-orange-500/20 blur-3xl top-20 left-1/2 pointer-events-none'/>
            <div className='relative z-20'>
                <div className='w-full border'>
                    <span className='w-full bg-white px-1.5 py-1.'><UserCircle2Icon className='w-5 h-5' /></span>
                </div>
            </div>
        </div>
    </section>
  )
}

export default RegisterPage
