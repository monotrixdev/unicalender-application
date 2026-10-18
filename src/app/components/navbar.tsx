import { MenuIcon, PanelRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import LogoutButton from "./logoutButton";
import LoginIcon from "./avaterUI";
import { auth } from "@/lib/auth";

export async function Navbar() {
    const session =  await auth();
    return(
        <div className="flex sticky top-0 z-30 px-4 py-2 items-center border-b justify-between border-zinc-200 bg-zinc-50">
            <Link className="flex items-center space-x-2" href="/">
                <Image className="hover:border-2" width={30} height={30} 
                 src='/icon.svg'
                 alt="Logo"
                />
                <h4 className="font-semibold text-green-500">Uni<span className="font-normal tracking-tight text-zinc-700">Calender</span></h4>
            </Link>
            <div className="flex items-center gap-4">
                {session?.user && <LoginIcon />}
                <PanelRight className="w-5 h-5"/>
            </div>
        </div>
    )
}