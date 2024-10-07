'use client';
import Image from 'next/image';
import { useSession, signIn, signOut } from 'next-auth/react';

const GitHubButton = () => {
  return (
    <div
      className="flex items-center justify-center ring-1 ring-lama text-black w-full hover:bg-lama hover:text-white rounded-2xl mt-3"
      onClick={() => signIn("github")}
    >
      <Image src="/github.svg" alt="google" width={20} height={20} />
      <button onClick={() => signIn("github")} className="p-3">Sign in with GitHub</button>
    </div>
  );
};

export default GitHubButton;
