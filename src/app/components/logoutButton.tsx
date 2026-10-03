
import { Button } from '@/components/ui/button'
import { signOut } from '@/lib/auth'
import { LogOut } from 'lucide-react'
import React from 'react'

const LogoutButton = async () => {

    async function logout() {
        "use server"
        await signOut({
            redirectTo: "/login"
        })
    }



  return (
    <div onClick={logout}>
        <LogOut className='w-2 h-5'/>
        <span>Log out</span>
    </div>
  )
}

export default LogoutButton
