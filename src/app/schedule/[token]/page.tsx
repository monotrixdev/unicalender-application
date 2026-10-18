import Image from 'next/image'
import React from 'react'

const ScedulePage = () => {
  return (
    <div className='max-w-5xl h-screen bg-zinc-50 px-4 flex items-center'>
      <section className='mx-auto  flex w-full border border-border rounded-xl bg-white px-4 py-5'>
        <div className='flex flex-col gap-2'>
          <Image className='rounded-full' width={30} height={30} src="https:/xuanvex.github.io/images/img.png" alt='USERS AVATER' />
          <h3 className='text-zinc-500 text-sm'>Monaiyem Khan</h3>
          <h1 className='text-md font-semibold'>Property Viewing</h1>
          <p className='text-sm text-muted-foreground'>Tour your potential dream home with our experience real state professional.</p>
        </div>
      </section>
    </div>
  )
}

export default ScedulePage
