"use client"

import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"
import CartModal from "./CartModal"

const NavIcons = () => {
    const [isProfileOpen, setIsProfileOpen] = useState(false)
    const [isCartOpen, setIsCartOpen] = useState(false)
    
    const router = useRouter()

    const isLoggedIn = false

    const handleProfile = ()=>{
        if(!isLoggedIn) {
            router.push('/login')
        }
        setIsProfileOpen((prev)=>!prev)
    }
    
  return (
    <div className="flex items-center gap-4 xl:gap-6 relative">
        <Image src='/profile.png' width={22} height={22} alt="profile" className="cursor-pointer " onClick={handleProfile}/>
        {isProfileOpen && (
            <div className="absolute p-4 rounded-md top-12 left-0 text-sm shadow-[0_3px_10px_rgb(0,0,0,0.2)] z-20 ">
                <Link href='/'>Profile</Link>
                <div className="mt-2 cursor-pointer" >Logout</div>
            </div>
            )}
        <Image src='/notification.png' width={22} height={22} alt="notification" className="cursor-pointer"/>
        <div className="relative cursor-pointer">
        <Image src='/cart.png' width={22} height={22} alt="cart" onClick={()=>setIsCartOpen((prev)=>!prev)}/>
            <div className="absolute -top-4 -right-4 w-6 h-6 flex justify-center items-center text-sm text-white bg-lama rounded-full">2</div>
        </div>
        {isCartOpen && (
                <CartModal/>
            )}
    </div>
  )
}

export default NavIcons