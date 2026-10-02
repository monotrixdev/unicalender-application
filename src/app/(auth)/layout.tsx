import React from 'react'

const AuthLayout = ({
children,
}: {
    children: React.ReactNode
}) => {
  return (
    <main>
        <div className='w-full bg-slate-50 border-b border-zinc-200 px-4 py-2 flex justify-between items-center'>
            <div className='flex space-x-2 items-center'>
                <div className='px-3 py-1 font-sans font-semibold bg-zinc-900 text-white w-fit rounded-sm'>
                X
            </div>
            <span className='text-sm font-medium text-zinc-900'>XuanVex</span>
            </div>
            <div className='text-sm text-zinc-500'>
                Secure Authentication
            </div>
        </div>
        {children}
    </main>
  )
}

export default AuthLayout
