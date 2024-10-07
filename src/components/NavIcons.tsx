'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import CartModal from './CartModal';
import { useSession, signIn, signOut } from 'next-auth/react';
import Profile from '@/app/profile/page';
import LoginPage from '@/app/login/page';
interface SessionData {
  user: {
    image?: string;
  };
}
const NavIcons = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isLoggedIn, setisLoggedIn] = useState(false);

  const router = useRouter();
  // const session = useSession();
  const { data: session } = useSession<SessionData | null>();

  console.log(session);
  console.log(isProfileOpen);

  const handleProfile = () => {
    setIsProfileOpen((prev) => !prev);
  };

  if (session?.user) {
    router.push('/');
  }

  return (
    <div className="flex items-center gap-4 xl:gap-6 relative">
      <div onClick={handleProfile} className=''>
      {session?.user?.image ? (
        <Image
          src={session?.user?.image} 
          width={22}
          height={22}
          alt="profile"
          className="cursor-pointer rounded-full"
        />
      ) : (
        <Image
          src="/profile.png"
          width={22}
          height={22}
          alt="profile"
          className="cursor-pointer "
          
        />
      )}
      </div>

      {isProfileOpen && (session ? <Profile /> : router.push('/login'))}

      <Image
        src="/notification.png"
        width={22}
        height={22}
        alt="notification"
        className="cursor-pointer"
      />
      <div className="relative cursor-pointer" onClick={() => setIsCartOpen((prev) => !prev)}>
        <Image src="/cart.png" width={22} height={22} alt="cart" />
        {session && (
          <div className="absolute -top-4 -right-4 w-6 h-6 flex justify-center items-center text-sm text-white bg-lama rounded-full">
            2
          </div>
        )}
      </div>
      {isCartOpen && <CartModal />}
    </div>
  );
};

export default NavIcons;
