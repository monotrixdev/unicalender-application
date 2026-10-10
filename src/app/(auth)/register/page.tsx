import { Button } from '@/components/ui/button'
import {Shield, SquareRoundCorner, User2Icon, UserCircle, UserCircle2Icon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const RegisterPage = () => {
  return (
    <section className='w-full px-5 py-10 h-screen bg-zinc-50 flex justify-center items-center flex-col'>
        <div className='w-full sm:w-[400px] bg-white rounded-xl flex flex-col border border-blue-200 relative overflow-hidden'>
            <div className='w-60 h-60 bg-blue-500/20 absolute -top-20 blur-3xl rounded-full pointer-events-none'/>
            <div className='w-40 h-40 absolute rounded-full bg-orange-500/20 blur-3xl top-20 left-1/2 pointer-events-none'/>
            <div className='relative z-20 px-4 py-6 pb-4'>
                <div className='w-fit border border-blue-200 text-blue-500 p-1.5 bg-white rounded-xl'>
                    <UserCircle  className='w-5 h-5'/>
                </div>
                <div className='flex flex-col -space-y-0 mt-2'>
                <h4 className='font-semibold text-lg tracking-tight text-zinc-900'>Register a account</h4>
                <span className='text-sm text-zinc-500 tracki'>Create your account below this social platform.</span>
                </div>
                <div className='w-full flex flex-col mt-5 space-y-2'>
                    <Button><Image width={20} height={20} alt='Github Images' src='/github.svg'/> Create with Github</Button>
                    <Button variant='outline'><Image width={15} height={20} alt='Google Images' src='/google.svg'/> Create with Google</Button>
                </div>         
                <span className='w-full text-center flex items-center justify-center text-muted-foreground'>or</span>
                <Link className='w-full flex text-sm items-center justify-center underline hover:text-zinc-500' href='/login'>Login Now</Link>
            </div>
            <div className='devider h-[1px] z-50 bg-zinc-300'/>
            <div className='px-3 z-30 py-4 w-full bg-gradient-to-br from-zinc-50 via-zinc-100 to-zinc-50 h-full text-zinc-400 text-sm font-normal flex items-center justify-center gap-2'>
                <span className=''>Powered by:</span>
                <span className='text-zinc-600 font-semibold'><a href='https://github.com/xuanvex'>XuanVex</a></span>
                <span className='flex items-center justify-center space-x-1'><Shield className='w-5 h-5 text-blue-500'/><span>Secure Authentication</span></span>
            </div>
        </div>
    </section>
  )
}

export default RegisterPage
