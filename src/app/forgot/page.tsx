
import Link from "next/link"

const ForgotPage = () => {
  return (
    <div className='h-[calc(100vh-80px)] px-4 md:px-8 lg:px-16 xl:px32 2xl:px-64 flex items-center justify-center'>
        <div className='flex flex-col gap-5'>
          <h3 className='font-semibold text-xl'>Reset Your Password</h3>
          <form className='flex flex-col gap-2'>
            <label className=''>E-mail
            </label>
            <input type="email" placeholder='john@mail.com' className='ring-1 ring-gray-500 rounded-md p-2 outline-none mb-3'/>
            
            <button className="w-full bg-lama text-white p-3 rounded-2xl mt-3">Reset</button>
            <Link className="mt-4 font-medium" href="/login">Go back to login?</Link>
          </form>
        </div>
    </div>
  )
}

export default ForgotPage

