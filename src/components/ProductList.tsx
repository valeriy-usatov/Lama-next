import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ProductList = () => {
  return (
    <div className="mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap">
        <div className="w-full sm:w-[45%] lg:w-[22%] flex flex-col gap-4">
            <Link href="/test" >
                <div className="relative w-full h-80">
                <Image
                    src="https://img.inmyroom.ru/inmyroom/resize/700x700/jpg:85/uploads/photo/file/ab/ab8f/jpg_1000_ab8fe205-f767-4048-9cc3-8d2793f264d5.jpg?sign=5e04d90d1b7762e60ccf60e0030c2293a99d64f1bac510aeb5639850d3fb3533"
                    alt=""
                    fill
                    sizes="25vw"
                    className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
                />
                <Image
                    src="https://static.tildacdn.com/tild6264-3737-4137-b036-333339663338/1883db35bacfacc0546b.jpg"
                    alt=""
                    fill
                    sizes="25vw"
                    className="absolute object-cover rounded-md"
                />
                </div>
            </Link>
            <div className='flex justify-between'>
                    <span className='font-medium'>Product Name</span>
                    <span className='font-semibold'>$49</span>
            </div>
            <p className='text-sm text-gray-500'>My description</p>
            <button className='rounded-2xl ring-1 ring-lama text-lama w-max py-2 px-4 text-xs hover:bg-lama hover:text-white'>Add to Cart</button>
        </div>
        <div className="w-full sm:w-[45%] lg:w-[22%] flex flex-col gap-4">
            <Link href="/test" >
                <div className="relative w-full h-80">
                <Image
                    src="https://img.inmyroom.ru/inmyroom/resize/700x700/jpg:85/uploads/photo/file/ab/ab8f/jpg_1000_ab8fe205-f767-4048-9cc3-8d2793f264d5.jpg?sign=5e04d90d1b7762e60ccf60e0030c2293a99d64f1bac510aeb5639850d3fb3533"
                    alt=""
                    fill
                    sizes="25vw"
                    className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
                />
                <Image
                    src="https://static.tildacdn.com/tild6264-3737-4137-b036-333339663338/1883db35bacfacc0546b.jpg"
                    alt=""
                    fill
                    sizes="25vw"
                    className="absolute object-cover rounded-md"
                />
                </div>
            </Link>
            <div className='flex justify-between'>
                    <span className='font-medium'>Product Name</span>
                    <span className='font-semibold'>$49</span>
            </div>
            <p className='text-sm text-gray-500'>My description</p>
            <button className='rounded-2xl ring-1 ring-lama text-lama w-max py-2 px-4 text-xs hover:bg-lama hover:text-white'>Add to Cart</button>
        </div>
        <div className="w-full sm:w-[45%] lg:w-[22%] flex flex-col gap-4">
            <Link href="/test" >
                <div className="relative w-full h-80">
                <Image
                    src="https://img.inmyroom.ru/inmyroom/resize/700x700/jpg:85/uploads/photo/file/ab/ab8f/jpg_1000_ab8fe205-f767-4048-9cc3-8d2793f264d5.jpg?sign=5e04d90d1b7762e60ccf60e0030c2293a99d64f1bac510aeb5639850d3fb3533"
                    alt=""
                    fill
                    sizes="25vw"
                    className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
                />
                <Image
                    src="https://static.tildacdn.com/tild6264-3737-4137-b036-333339663338/1883db35bacfacc0546b.jpg"
                    alt=""
                    fill
                    sizes="25vw"
                    className="absolute object-cover rounded-md"
                />
                </div>
            </Link>
            <div className='flex justify-between'>
                    <span className='font-medium'>Product Name</span>
                    <span className='font-semibold'>$49</span>
            </div>
            <p className='text-sm text-gray-500'>My description</p>
            <button className='rounded-2xl ring-1 ring-lama text-lama w-max py-2 px-4 text-xs hover:bg-lama hover:text-white'>Add to Cart</button>
        </div>
        <div className="w-full sm:w-[45%] lg:w-[22%] flex flex-col gap-4">
            <Link href="/test" >
                <div className="relative w-full h-80">
                <Image
                    src="https://img.inmyroom.ru/inmyroom/resize/700x700/jpg:85/uploads/photo/file/ab/ab8f/jpg_1000_ab8fe205-f767-4048-9cc3-8d2793f264d5.jpg?sign=5e04d90d1b7762e60ccf60e0030c2293a99d64f1bac510aeb5639850d3fb3533"
                    alt=""
                    fill
                    sizes="25vw"
                    className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
                />
                <Image
                    src="https://static.tildacdn.com/tild6264-3737-4137-b036-333339663338/1883db35bacfacc0546b.jpg"
                    alt=""
                    fill
                    sizes="25vw"
                    className="absolute object-cover rounded-md"
                />
                </div>
            </Link>
            <div className='flex justify-between'>
                    <span className='font-medium'>Product Name</span>
                    <span className='font-semibold'>$49</span>
            </div>
            <p className='text-sm text-gray-500'>My description</p>
            <button className='rounded-2xl ring-1 ring-lama text-lama w-max py-2 px-4 text-xs hover:bg-lama hover:text-white'>Add to Cart</button>
        </div>
    </div>
  );
};

export default ProductList;
