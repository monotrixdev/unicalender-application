import React from 'react'

const AuthLayout = ({
    children
}: {
    children: React.ReactNode
}) => {
  return (
    <main>
        <header className='sticky flex items-center top-0 z-50 w-full bg-zinc-50 border-b border-zinc-200 px-5 py-2 justify-between bg-zinc-100'>
            <div className='w-fit space-x-2 flex items-center justify-center'>
                <div className='bg-gradient-to-br from-zinc-500 via-zinc-800 to-zinc-900 text-white px-3 py-1 font-sans rounded-lg font-semibold'>
                    X
                </div>
                <span className='font-semibold text-sm text-zinc-900'>XuanVex</span>
            </div>
            <span className='text-sm font-sans text-zinc-500'>Secure Authentication</span>
        </header>
        {children}
    </main>
  )
}

export default AuthLayout
