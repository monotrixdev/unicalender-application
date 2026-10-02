'use client';
import { Button } from '@/components/ui/button'
import { CircleUserRound, Images } from 'lucide-react'
import { Sansation } from 'next/font/google'
import Image from 'next/image'
import React, { useState } from 'react'
import { toast } from '@/components/ui/toast';
import { promiseHooks } from 'v8';
import { promises } from 'dns';
import { resolve } from 'path';
import { setegid } from 'process';
import { signIn } from 'next-auth/react';
import Spinner from '@/app/components/spinner';

const Login = () => {
  const [githubLoader, setGithubLoader] = useState(false);
  const [googleLoader, setGoogleLoader] = useState(false);

async function githubLogin() {
  try {
    setGithubLoader(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    await signIn('github', {
      callbackUrl: '/dashboard'
    })
  } catch (error) {
    setGithubLoader(false)
    toast.add({
      title: "Login Failed!",
      description: "Unable to connect github. Please try again?"
    })
    console.log(error);
  } finally {
    console.log("")
  }
}

  return (
    <section className='w-full h-100 bg-zinc-50 flex flex-col items-center justify-center px-5 py-20'>
      <div className='w-full overflow-hidden relative sm:w-[400px] flex flex-col justify-start bg-zinc-100 border border-blue-200 rounded-xl px-4 py-5'>
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-64 h-32 bg-blue-500/20 blur-3xl rounded-full pointer-events-none" />
          <div className='absolute top-20 left-1/2 -translate-x-1/2 w-30 h-30 bg-orange-500/20 blur-3xl rounded-full pointer-events-none'/>
        <div className='space-x-2 bg-white border border-blue-200 w-fit p-1.5 rounded-lg'>
           <CircleUserRound className='w-5 h-5 text-blue-600'/>
        </div>
        
        <span className='font-sans font-semibold text-xl mt-2 text-zinc-900 tracking-tight'>Welcome back</span>
        <p className='text-sm font-sans mt-0 text-muted-foreground tracking-tight'>Sign in to your account using one of the platforms below.</p>
        <div className='w-full grid grid-cols-1 mt-3 sm:grid-cols-2 gap-2'>
          <Button disabled={githubLoader} onClick={githubLogin} className='w-full sm:w-full flex items-center py-4 justify-center font-sans text-sm font-medium'>
            {githubLoader ? <Spinner/> : <Image className='w-5 h-5' width={0} height={0} src='/github.svg' alt={''} />} 
            {githubLoader ? 'Connecting...' : "Connect with Github"}
          </Button>
          <Button variant='outline' className='w-full sm:w-full flex items-center justify-center font-medium font-sans text-sm py-4'>
            <Image className='w-5 h-5' width={0} height={0} src='/google.svg' alt={''} />Connect with Google</Button>
        </div>
        <div className='w-full flex font-sans text-sm tracking-tight mt-6 text-zinc-400 items-center justify-center gap-1.5'>
          <span>Powered by</span>
          <span className='font-medium text-zinc-700'><a href='https://github.com/xuanvex/'>XuanVex</a></span>
          <span className='text-zinc-300'>•</span>
          <span>Secure Authentication</span>
        </div>
      </div>
    </section>
  )
}

export default Login
