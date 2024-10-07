'use client';
import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';
import { useSession, signIn, signOut } from 'next-auth/react';

const Menu = () => {
  const session = useSession();
  const [open, setOpen] = useState(false);
  console.log(open);

  return (
    <div className="">
      <Image
        src="/menu.png"
        alt="menu"
        width={28}
        height={28}
        className="cursor-pointer"
        onClick={() => setOpen((prev) => !prev)}
      />
      {open && (
        <div className="absolute left-0 top-20 bg-black text-white w-full h-[calc(100vh-80px)] flex flex-col gap-8 justify-center items-center text-xl z-10">
          <Link href="/">Homepage</Link>
          <Link href="/">Shop</Link>
          <Link href="/">Deals</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
          {session.data ? <Link href="/profile">Profile</Link> : <Link href="/login" onClick={() => setOpen((prev) => !prev)}>Sign in</Link>}
          <Link href="/">Cart(1)</Link>
        </div>
      )}
    </div>
  );
};

export default Menu;
