import GitHubButton from '@/components/GitHubButton';
import { signIn } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';

const LoginPage = () => {
  return (
    <div className="h-[calc(100vh-80px)] px-4 md:px-8 lg:px-16 xl:px32 2xl:px-64 flex items-center justify-center">
      <div className="flex flex-col gap-5">
        <h3 className="font-semibold text-xl">Log in</h3>
        <div className="flex flex-col gap-2">
          <label className="">E-mail</label>
          <input
            type="email"
            placeholder="john@mail.com"
            className="ring-1 ring-gray-500 rounded-md p-2 outline-none mb-3"
          />
          <label className="">Password</label>
          <input
            type="password"
            placeholder="Enter you password"
            className="ring-1 ring-gray-500 rounded-md p-2 outline-none"
          />
          <Link className="mt-3 font-medium" href="/forgot">
            Forgot Password?
          </Link>
          <button className="w-full bg-lama text-white p-3 rounded-2xl mt-3">Login</button>
          {/* <div className="flex items-center justify-center ring-1 ring-lama text-black w-full hover:bg-lama hover:text-white rounded-2xl mt-3">
            <Image src="/google.svg" alt="google" width={20} height={20} />
            <button onClick={() => signIn('google')} className="p-3">
              Sign in with Google
            </button>
          </div> */}
          <GitHubButton />
          <Link className="mt-4 font-medium" href="/register">
            Don't have an account?
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
