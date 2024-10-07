"use client"

import Image from "next/image";
import { useSession, signIn, signOut } from 'next-auth/react';
import Link from "next/link";


const Profile = () => {
    const { data: session, status } = useSession();

    if (status === 'loading') {
        return <div>Loading...</div>; 
      }
    
      if (!session) {
        return <div className="flex justify-center mt-7 font-semibold text-2xl md:text-3xl ">You are not logged in</div>; 
      }

  return (
    <div className="absolute top-16 right-0 flex flex-col bg-gray-200 h-[calc(50vh-180px)] p-4 rounded-md top-16 md:w-[400px] w-max right-0 text-2xl shadow-[0_3px_10px_rgb(0,0,0,0.2)] z-20 ">
          <h3 className="text-center font-semibold">Welcome to our store. <br /> Enjoy your shopping</h3>
          <div className="flex justify-between items-center mt-4">
          {session.user?.image && (
          <Image
            src={session.user.image} // Обязательно проверяем наличие изображения
            width={40}
            height={40}
            alt="profile"
            className="cursor-pointer rounded-full"
          />
        )}
            <h4 className="font-bold">{session.user?.name}</h4>
          </div>
          <Link
            href="/"
            onClick={() => signOut({ callbackUrl: '/' })}
            className="mt-2 cursor-pointer mt-auto ml-auto p-3 bg-slate-300 rounded-2xl hover:bg-lama hover:text-white"
          >
            SignOut
          </Link>
        </div>
  )
}

export default Profile