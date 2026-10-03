import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { requireAuth } from '@/lib/hooks'
import { LayoutDashboard, LogOut, Settings, UserRound } from 'lucide-react'
import React from 'react'

const LoginIcon = async () => {
    const session = await requireAuth();

    const menuIcon = [
        {
            icon: LayoutDashboard,
            name: "Dashboard"
        }, 
        {
            icon: UserRound,
            name: "Profile"
        },
        {
            icon: Settings,
            name: "Settings"
        }
    ]



  return (
    <DropdownMenu>
        <DropdownMenuTrigger render={
            <Button variant='ghost' size="icon" className='rounded-full'>
            <Avatar>
                <AvatarImage src={session?.user?.image ?? ''} />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            </Button>
        } />
        <DropdownMenuContent className='w-fit'>
            <DropdownMenuGroup>
                <div className='flex items-center space-x-2'>
                    <div className='w-full flexitems-center'>
                    <Avatar><AvatarImage src={session?.user?.image ?? ''}/></Avatar>
                </div>
                <div className='w-full space-y-0 leading-0'>
                    <h4 className='text-sm flex'>{session?.user?.name ?? ''}</h4>
                    <span className='text-xs text-zinc-600'>{session?.user?.email ?? ''}</span>
                </div>
                </div>
                <DropdownMenuSeparator />
                {
                    menuIcon.map((item, key) => (
                        <DropdownMenuItem key={key} className='flex items-center gap-2'>
                            <item.icon className='w-5 h-5 text-zinc-600'/>
                            <span className='text-sm font-sans'>{item.name}</span>
                        </DropdownMenuItem>
                    ))
                }
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
                <DropdownMenuItem variant="destructive">
                    <LogOut className='w-5 h-5' />
                    Log 0ut
                </DropdownMenuItem>
            </DropdownMenuGroup>
        </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default LoginIcon
