
import Link from "next/link"

const LoginPage = () => {
  return (
    <div className='h-[calc(100vh-80px)] px-4 md:px-8 lg:px-16 xl:px32 2xl:px-64 flex items-center justify-center'>
        <div className='flex flex-col gap-5'>
          <h3 className='font-semibold text-xl'>Register</h3>
          <form className='flex flex-col gap-2'>
          <label className=''>Username
            </label>
            <input type="text" placeholder='john' className='ring-1 ring-gray-500 rounded-md p-2 outline-none mb-3'/>
            <label className=''>E-mail
            </label>
            <input type="email" placeholder='john@mail.com' className='ring-1 ring-gray-500 rounded-md p-2 outline-none mb-3'/>
            <label className=''>Password
            </label>
            <input type="password" placeholder='Enter you password' className='ring-1 ring-gray-500 rounded-md p-2 outline-none'/>
            <button className="w-full bg-lama text-white p-3 rounded-2xl mt-3">Register</button>
            <Link className="mt-4 font-medium" href="/login">Have an account? Login</Link>
          </form>
        </div>
    </div>
  )
}

export default LoginPage

