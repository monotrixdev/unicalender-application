import { auth } from '@/lib/auth';
import { requireAuth } from '@/lib/hooks';
import { redirect } from 'next/navigation';
import React from 'react'

const Dashboard = async () => {
    const session = await requireAuth();
  return (
    <div>
      Welcome, {session?.user?.image}
    </div>
  )
}

export default Dashboard
